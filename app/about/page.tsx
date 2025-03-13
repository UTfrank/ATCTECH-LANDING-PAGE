import React from 'react'

const About = () => {
  return (
    <main className="w-full min-h-screen">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Welcome to ATC Tech, where innovation meets excellence. We are a leading technology solutions provider dedicated to transforming businesses through cutting-edge digital solutions.
          </p>
          <p className="text-lg mb-6">
            Our team of experts brings together years of industry experience and technical expertise to deliver solutions that drive growth and efficiency for our clients.
          </p>
          <div className="mt-12">
            <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
            <p className="text-lg mb-6">
              To empower businesses with innovative technology solutions that drive growth, efficiency, and success in the digital age.
            </p>
          </div>
          <div className="mt-12">
            <h2 className="text-3xl font-semibold mb-6">Our Vision</h2>
            <p className="text-lg mb-6">
              To be the leading technology partner for businesses worldwide, known for our innovation, reliability, and commitment to excellence.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About