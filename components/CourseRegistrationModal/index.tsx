"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

interface CourseRegistrationModalProps {
    title: string
    trigger: React.ReactNode
}

interface FormValues {
    course: string
    startDate: Date
    duration: "3" | "6"
    cost: string
}

const CourseRegistrationModal = ({ title, trigger }: CourseRegistrationModalProps) => {
    const form = useForm<FormValues>({
        defaultValues: {
            course: title,
            startDate: new Date(),
            duration: "3",
            cost: "$85"
        }
    })

    const watchDuration = form.watch("duration")

    React.useEffect(() => {
        const cost = watchDuration === "3" ? "$85" : "$180"
        form.setValue("cost", cost)
    }, [watchDuration, form])

    const onSubmit = (data: FormValues) => {
        console.log(data)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>
            <DialogContent className="w-10/12 md:w-7/12 h-[90vh]">
                <DialogHeader>
                    <DialogTitle>Course Registration</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-2 h-full overflow-y-scroll scrollbar-hidden">
                        <FormField
                            control={form.control}
                            name="course"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Course</FormLabel>
                                    <FormControl>
                                        <Select defaultValue={field.value} onValueChange={field.onChange}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a course" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value={title}>{title}</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="startDate"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>Start Date</FormLabel>
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        className="rounded-md border w-fit"
                                    />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="duration"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Duration</FormLabel>
                                    <FormControl>
                                        <Select defaultValue={field.value} onValueChange={field.onChange}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select duration" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="3">3 Months</SelectItem>
                                                <SelectItem value="6">6 Months</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="cost"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Package Cost</FormLabel>
                                    <FormControl>
                                        <Input {...field} disabled />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <button
                            type="submit"
                            className="bg-[#710000] text-white py-3 px-6 rounded-full cursor-pointer hover:bg-[#8B0000] transition-colors"
                        >
                            Register Now
                        </button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default CourseRegistrationModal