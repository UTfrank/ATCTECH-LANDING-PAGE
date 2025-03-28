"use client";

import { useState, useEffect } from "react";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface CourseRegistrationModalProps {
    trigger: React.ReactNode;
    courseTitle: string;
}

// Initialize dayjs plugin for localized format
dayjs.extend(localizedFormat);

const CourseRegistrationModal = ({ trigger, courseTitle }: CourseRegistrationModalProps) => {
    const [date, setDate] = useState<Date>();
    const [duration, setDuration] = useState<"3" | "6">("3");
    const [packageCost, setPackageCost] = useState<string>("$85");
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        // Update package cost based on duration
        setPackageCost(duration === "3" ? "$85" : "$180");
    }, [duration]);

    const handleSubmit = async () => {
        // Validate form
        if (!name) {
            toast.error("Please enter your name");
            return;
        }

        if (!email) {
            toast.error("Please enter your email");
            return;
        }

        if (!date) {
            toast.error("Please select a start date");
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('/api/course-registration', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    course: courseTitle,
                    startDate: date,
                    duration,
                    packageCost,
                    name,
                    email
                }),
            });

            const responseData = await response.json();
            if (!response.ok) {
                throw new Error(responseData.error || 'Failed to register for course');
            }

            toast.success("Registration successful! We'll contact you soon.");
            // Add a delay before closing the modal to ensure toast is visible
            setTimeout(() => {
                // Reset form
                setName("");
                setEmail("");
                setDate(undefined);
                setDuration("3");
                setIsOpen(false);
            }, 3000); // 2 second delay
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to register. Please try again.';
            toast.error(errorMessage);
            console.error('Registration form error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>
            <DialogContent className="w-10/12 md:w-5/12 h-[90vh]">
                <DialogHeader>
                    <DialogTitle className="text-xl font-bold text-[#040000]">
                        Course Registration
                    </DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 space-y-4 p-2 h-full overflow-y-scroll scrollbar-hidden">
                    <div className="flex flex-col justify-center items-start gap-y-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <div className="col-span-3">
                            <Input
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-y-4">
                        <Label htmlFor="email" className="text-right">
                            Email
                        </Label>
                        <div className="col-span-3">
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full"
                                placeholder="Enter your email address"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-y-4">
                        <Label htmlFor="course" className="text-right">
                            Course
                        </Label>
                        <div className="col-span-3">
                            <Select defaultValue={courseTitle}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select course" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value={courseTitle}>{courseTitle}</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-y-4">
                        <Label htmlFor="date" className="text-right">
                            Start Date
                        </Label>
                        <div className="col-span-3">
                            <div className="border rounded-md p-2">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    className="rounded-md border"
                                    disabled={(date) => date < new Date()}
                                />
                            </div>
                            {date && (
                                <p className="text-sm text-muted-foreground mt-2">
                                    Selected date: {dayjs(date).format("MMMM D, YYYY")}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-y-4">
                        <Label htmlFor="duration" className="text-right">
                            Duration
                        </Label>
                        <div className="col-span-3">
                            <Select
                                defaultValue="3"
                                onValueChange={(value) => setDuration(value as "3" | "6")}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select duration" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="3">3 Months</SelectItem>
                                    <SelectItem value="6">6 Months</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-y-4">
                        <Label htmlFor="cost" className="text-right">
                            Package Cost
                        </Label>
                        <div className="col-span-3">
                            <Input
                                id="cost"
                                value={packageCost}
                                disabled
                                className="bg-gray-100"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-start">
                    <button
                        className="text-[13px] font-semibold text-white bg-[#710000] border border-[#710000] py-1.5 px-5 rounded-full transition-all ease-in duration-300 hover:bg-[#8a0000] disabled:opacity-70 disabled:cursor-not-allowed"
                        onClick={handleSubmit}
                        disabled={isLoading}
                    >
                        {isLoading ? "Processing..." : "Register Now"}
                    </button>
                </div>
                <ToastContainer position="top-right" />
            </DialogContent>
        </Dialog>
    );
};

export default CourseRegistrationModal;