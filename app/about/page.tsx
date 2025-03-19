import React from 'react'
import PageHeader from '@/components/PageHeader'
import AboutContent from '@/components/About'
import Vision from '@/components/Vision'
import Statistics from '@/components/Statistics'
import Team from '@/components/Team'

const About = () => {
  return (
    <main className="w-full min-h-screen">
      <section className='container mx-auto pt-7 pb-[54px]'>
        <PageHeader title='About Us' subtitle='Innovating the Future with Cutting-Edge Technology and Seamless Digital Solutions.' />
      </section>
      <AboutContent />
      <Statistics isBackground={false} />
      <Vision />
      <Team />
    </main>
  )
}

export default About