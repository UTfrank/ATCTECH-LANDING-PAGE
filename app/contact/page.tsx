import Address from '@/components/Address'
import ContactForm from '@/components/ContactForm'
import Faq from '@/components/Faq'
import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import Link from 'next/link';

const Contact = () => {
  return (
    <main className="w-full min-h-screen font-mulish">
      <div className="container mx-auto">
        <section className="font-mulish bg-options relative py-[53px] md:py-[53px] lg:py-[103px] rounded-xl text-white flex flex-col items-center gap-y-10 h-[500px]" style={{ backgroundImage: "url(./header_2_bg.png)" }}>
          <div className="flex flex-col items-center gap-y-3.5 text-center w-10/12 md:w-8/12">
            <h4 className="font-raleway font-bold text-xl md:text-3xl lg:text-5xl">Get in Touch</h4>
            <div className='flex flex-col items-center gap-x-8 *:flex *:items-center *:gap-x-5'>
              <Link href="#">
                <FaEnvelope />
                contact@atctech
              </Link>
              <Link href="#">
                <FaPhone />
                +44 7761 425 493
              </Link>
            </div>
          </div>
            <ContactForm />
        </section>
      </div>
      <Address />
      <Faq />
    </main>
  )
}

export default Contact