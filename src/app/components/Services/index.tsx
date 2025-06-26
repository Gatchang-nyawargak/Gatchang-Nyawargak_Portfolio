"use client";

import React, { useState } from 'react';
import { FaLaptopCode, FaMobileAlt, FaDatabase, FaCloud, FaProjectDiagram, FaPencilRuler, FaArrowRight } from 'react-icons/fa'; // Importing icons

const servicesData = [
  {
    title: "Frontend Development",
    icon: <FaLaptopCode size={60} className="text-blue-500" />,
    shortDescription: "Creating dynamic and responsive web interfaces with a focus on user experience.",
    details: "With a passion for building intuitive and responsive user interfaces, I specialize in using modern tools like React, Next.js, and JavaScript. My frontend development services ensure that your web applications are optimized for performance, accessibility, and mobile-first design.",
  },
  {
    title: "Mobile Development",
    icon: <FaMobileAlt size={60} className="text-blue-500" />,
    shortDescription: "Bringing your ideas to life on mobile platforms with clean, scalable code.",
    details: "I focus on creating mobile applications that are not only responsive but also offer a seamless user experience across devices. Whether it&rsquo;s iOS or Android, I leverage technologies like Retrofit and Room to ensure your mobile app delivers great performance and functionality.",
  },
  {
    title: "Backend Development",
    icon: <FaDatabase size={60} className="text-blue-500" />,
    shortDescription: "Building solid backend systems to power your web and mobile applications.",
    details: "Using Django and RESTful APIs, I provide backend solutions that ensure your applications are scalable and maintainable. I focus on secure data management, API integration, and cloud deployment, creating the foundation that allows your applications to run smoothly.",
  },
  {
    title: "Cloud Infrastructure",
    icon: <FaCloud size={60} className="text-blue-500" />,
    shortDescription: "Ensuring your applications are deployed in a reliable, scalable cloud environment.",
    details: "I help manage cloud infrastructure, focusing on containerization using Docker and cloud deployments that scale as your business grows. My services aim to reduce infrastructure costs while ensuring that your applications perform consistently under varying workloads.",
  },
  {
    title: "Data & Software Architecture",
    icon: <FaProjectDiagram size={60} className="text-blue-500" />,
    shortDescription: "Designing robust architectures that support your business objectives.",
    details: "I offer services in system and data architecture design, focusing on creating scalable solutions that meet your current and future needs. From SQL database modeling to structuring system components, my goal is to help businesses grow with well-architected software systems.",
  },
  {
    title: "UX/UI Design",
    icon: <FaPencilRuler size={60} className="text-blue-500" />,
    shortDescription: "Creating visually engaging and user-friendly designs for your digital products.",
    details: "I bring a creative approach to UX/UI design, focusing on building interfaces that are not only visually appealing but also highly usable. Using tools like Adobe Illustrator, Photoshop, and Figjam, I craft designs that resonate with users, enhancing the overall experience of your product.",
  },
];

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleDetails = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle the clicked service
  };

  return (
    <section id="services" className="py-32 bg-pink-50">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-black-500">What Services I&rsquo;m Providing</h2>
          <p className="text-gray-600 mt-2 text-xl">Click &quot;Learn More&quot; to discover how I can help bring your ideas to life.</p>
          <div className="mt-2 h-1 w-16 bg-pink-500 mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg text-center transition-transform transform hover:-translate-y-2 duration-300 hover:shadow-xl"
            >
              <div className="flex justify-center items-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-black-500 text-lg mb-6">
                {expandedIndex === index ? service.details : service.shortDescription}
              </p>
              <button
                onClick={() => toggleDetails(index)}
                className="flex justify-center items-center text-gray-400 hover:text-pink-500 transition-colors duration-300"
              >
                {expandedIndex === index ? "Show Less" : "Learn More"} <FaArrowRight className="ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
