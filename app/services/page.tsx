import React from 'react'
import PageHeader from '@/components/PageHeader'
import LearnApproach from "@/components/LearnApproach";
import WorkProcess from "@/components/WorkProcess";

const Services = () => {
  const services = [
    {
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed to meet your specific business needs and challenges.',
      icon: '💻'
    },
    {
      title: 'Cloud Solutions',
      description: 'Secure and scalable cloud infrastructure services to modernize your business operations.',
      icon: '☁️'
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to help your business stay competitive in the digital age.',
      icon: '🔄'
    },
    {
      title: 'IT Consulting',
      description: 'Expert guidance and strategic planning to help you make informed technology decisions.',
      icon: '📊'
    }
  ]

  return (
    <main className="w-full min-h-screen">
      <section className='container mx-auto pt-7 pb-[54px]'>
        <PageHeader title='Services' subtitle='Expert solutions for businesses, providing technology, training, and support to drive innovation and sustainable growth.' />
      </section>
      <LearnApproach />
      <WorkProcess />
    </main>
  )
}

export default Services