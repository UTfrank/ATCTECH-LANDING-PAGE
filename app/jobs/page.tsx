import React from 'react'
import Link from 'next/link'
import { recruiting_jobs } from '@/constants'
import PageHeader from '@/components/PageHeader'
import Button from '@/components/Button'

/*interface jobListings {
  title: job.title,
  department: job.department,
  location: job.city,
  type: job.jobType,
  description: job.description,
  requirements: job.requirements,
  link: job.link
}*/
const Jobs = () => {
  // Sort jobs by department
  const sortedJobs = [...recruiting_jobs].sort((a, b) => a.department.localeCompare(b.department))

  // Group jobs by department
  const jobsByDepartment = sortedJobs.reduce((acc, job) => {
    if (!acc.hasOwnProperty(job.department)) {
      (acc as { [key: string]: typeof recruiting_jobs })[job.department] = []
    }
    (acc as { [key: string]: typeof recruiting_jobs })[job.department].push(job)
    return acc
  }, {})

  return (
    <main className="w-full min-h-screen font-mulish">
      <section className='container mx-auto pt-7 pb-[54px]'>
        <PageHeader title='Jobs' subtitle='Explore endless career opportunities across diverse industries with the right resources and connections.' />
      </section>
      <div className="w-10/12 md:w-9/12 mx-auto py-12">
        <h4 className="text-[#2F2F2F] text-[24px] lg:text-[40px] font-extrabold text-center">Become a part of our big family to inspire and get inspired by <span className='text-[#710000]'>professional experts.</span></h4>
        <div className="space-y-8 mt-20">
          {Object.entries(jobsByDepartment).map(([department, jobs]) => (
            <div key={department} className="space-y-4">
              <h5 className='text-[#040000] text-2xl font-bold'>{department}</h5>
              {(jobs as typeof recruiting_jobs).map((job, index) => (
                <div key={index} className="rounded-[10px] px-6 py-4 bg-[#FFFAFA] flex flex-col md:flex-row justify-between items-center w-full md:w-11/12 ml-auto">
                  <div className="flex flex-col w-full md:w-8/12">
                    <h2 className="text-xl font-bold text-[#040000] mb-3">{job.title}</h2>
                    <div className="space-x-4 text-xs text-[#040000] mb-5">
                      <span>{job.city}</span>
                      <span>|</span>
                      <span className='text-[#710000]'>{job.jobType}</span>
                    </div>
                    <p className="text-[#8E8E93] text-sm">{job.description}</p>
                  </div>
                  <Link href={job.link} className="inline-block bg-transparent text-[#040000] text-sm font-medium py-2 px-6 hover:bg-[#040000] hover:text-white hover:border-0 transition-colors border border-[#DCDCDC] rounded-full">
                    Apply Now
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center gap-y-5 mt-10 w-full">
          <div className='text-center w-10/12 lg:w-8/12 mx-auto'>
            <h3 className="text-[24px] lg:text-[32px] font-extrabold">Can't find the perfect position?</h3>
            <p className="font-normal text-sm">Discover tailored job opportunities that match your skills and ambitions. </p>
          </div>
          <Button variant="primary" size="md" className="!bg-[#710000] !text-[#ffffff] !text-[12.5px] !md:text-sm hover:!bg-[#710000] px-4 py-4 !w-[205px]">Join Our Team</Button>
        </div>
      </div>
    </main>
  )
}

export default Jobs