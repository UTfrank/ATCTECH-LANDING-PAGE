import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CourseRegistrationEmail } from "@/emails/course-registration-email";
import dayjs from "dayjs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service is not configured" },
      { status: 500 }
    );
  }

  try {
    const formData = await req.json();
    const { course, startDate, duration, packageCost, name, email } = formData;

    // Validate required fields
    if (!course || !startDate || !duration || !packageCost) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Format the date for email
    const formattedDate = dayjs(startDate).format("MMMM D, YYYY");

    try {
      const data = await resend.emails.send({
        from: "Course Registration <onboarding@resend.dev>",
        to: "atctechconsulting@gmail.com",
        subject: `Course Registration: ${course}`,
        react: CourseRegistrationEmail({
          course,
          startDate: formattedDate,
          duration: duration.toString(),
          packageCost,
          name,
          email,
        }),
      });

      if (!data.data?.id) {
        throw new Error("Failed to send email: No ID returned");
      }

      return NextResponse.json({ success: true, id: data.data?.id });
    } catch (emailError) {
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request data" },
      { status: 400 }
    );
  }
}
