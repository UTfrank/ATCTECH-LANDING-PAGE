import React from 'react'

const Jobs = () => {
  const jobListings = [
    {
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'Silicon Valley, CA',
      type: 'Full-time',
      description: 'We are seeking an experienced Software Engineer to join our team and help build innovative solutions for our clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '5+ years of experience in software development',
        'Strong proficiency in modern programming languages',
        'Experience with cloud technologies and microservices',
        'Excellent problem-solving and communication skills'
      ]
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Silicon Valley, CA',
      type: 'Full-time',
      description: 'Looking for a strategic Product Manager to drive product vision and execution across our technology solutions.',
      requirements: [
        'Bachelor\'s degree in Business, Technology, or related field',
        '3+ years of product management experience',
        'Strong analytical and project management skills',
        'Experience in technology product development',
        'Excellent leadership and communication abilities'
      ]
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description: 'Join our design team to create beautiful and intuitive user experiences for our digital products.',
      requirements: [
        'Bachelor\'s degree in Design or related field',
        '3+ years of UX/UI design experience',
        'Proficiency in design tools like Figma and Adobe Creative Suite',
        'Strong portfolio demonstrating user-centered design',
        'Experience with design systems and component libraries'
      ]
    }
  ]

  return (
    <main className="w-full min-h-screen">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8">Career Opportunities</h1>
        <p className="text-lg mb-8">
          Join our team of innovators and help shape the future of technology. We offer competitive benefits,
          a collaborative work environment, and opportunities for professional growth.
        </p>
        <div className="space-y-8">
          {jobListings.map((job, index) => (
            <div key={index} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h2 className="text-2xl font-semibold">{job.title}</h2>
                <div className="space-x-4 text-sm text-gray-600">
                  <span>{job.department}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <div>
                <h3 className="text-lg font-medium mb-2">Requirements:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {job.requirements.map((req, reqIndex) => (
                    <li key={reqIndex}>{req}</li>
                  ))}
                </ul>
              </div>
              <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Jobs