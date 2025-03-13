import React from 'react'

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
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Services