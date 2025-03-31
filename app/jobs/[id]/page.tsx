import Button from '@/components/Button'
import PageHeader from '@/components/PageHeader'
import { recruiting_jobs } from '@/constants'
import { notFound } from 'next/navigation'
import React from 'react'


const JobDetails = async ({ params }: {
    params: Promise<{ id: string }>
}) => {
    const id = (await params).id;
    const job = recruiting_jobs.find(job => job.link === `/jobs/${id}`)
    console.log(id);

    if (!job) {
        notFound()
    }

    return (
        <main className="w-full min-h-screen">
            <section className='container mx-auto pt-7 pb-[54px]'>
                <PageHeader title='Jobs' subtitle='Explore endless career opportunities across diverse industries with the right resources and connections.' />
            </section>
            <div className="container mx-auto py-12">
                <div className="mx-auto flex flex-col md:flex-row md:justify-between justify-center">

                    <div className="prose w-7/12">
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Job Responsibilities</h2>
                            <p className="text-gray-600">{job.description}</p>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Job Requirements</h2>
                            <ul className="list-disc list-inside space-y-2">
                                {job.requirements.map((requirement, index) => (
                                    <li key={index} className="text-gray-600">{requirement}</li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    <div className="mt-8 w-full md:w-4/12 lg:w-3/12">
                        <div className='bg-white rounded-xl p-10 flex flex-col gap-y-4'>
                            <h6 className='text-lg text-[#040000] font-bold'>Apply Today</h6>
                            <p className="text-xs text-[#808080]">Explore endless career opportunities across diverse industries with the right resources and connections.</p>
                            <Button className="!bg-[#710000] !text-[#ffffff] !text-[12.5px] !md:text-sm hover:!bg-[#710000] px-4 py-4 !w-fit">
                                Apply Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default JobDetails
