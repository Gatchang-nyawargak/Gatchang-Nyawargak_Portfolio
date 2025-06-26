import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

const Projects = () => {
  const projectItems = [
    {
      title: 'Investika Mobile App',
      description: 'A gamified learning platform empowering Kenyan youth to master investments in stocks, bonds, and money market funds via personalized lessons and financial simulations.',
      link: 'https://github.com/Gatchang-nyawargak/Vivosparks-Mobile.git',
      image: '/images/Group 42.png',
    },
    {
      title: 'Contacts App',
      description: 'An Android app using RecyclerViews, custom adapters, and view holders to display user contacts efficiently, offering a smooth and structured way to manage contact information.',
      link: 'https://github.com/Gatchang-nyawargak/android_contacts_app',
      image: '/images/contact.png',
    },
    {
      title: 'Enwallet App',
      description: 'Track your spending with this Android app that allows users to categorize income and expenses, giving insight into their financial habits through a clean and intuitive interface.',
      link: 'https://github.com/Gatchang-nyawargak/enwallet-assessment',
      image: '/images/wallet.jpeg',
    },
    {
      title: 'School',
      description: 'A Django-based school system for managing teachers, students, and courses. Data can be accessed and modified through RESTful APIs, ensuring efficiency and real-time updates.',
      link: 'https://github.com/Gatchang-nyawargak/Rest-apis-django.git',
      image: '/images/school.jpeg',
    },
    {
      title: 'DashBoard',
      description: 'This responsive dashboard built with React and TypeScript visualizes user behavior. It uses modern charts and real-time data to support better user engagement analysis.',
      link: 'https://github.com/Gatchang-nyawargak/Vivosparks-Frontend.git',
      image: '/images/Dashboard.png',
    },
    {
      title: 'Vivosparks informational website',
      description: 'A fast, responsive website for showcasing Vivosparks info. Built with React, it provides insights into the brand’s goals, vision, and offerings using a sleek modern layout.',
      link: 'https://github.com/Gatchang-nyawargak/VivoSparks-Informational.git',
      image: '/images/info.png',
    },
  ];

  return (
  <section id="projects" className="py-20 bg-gray-50">
  <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">My Projects</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
    {projectItems.map((project, idx) => (
      <div
        key={idx}
        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 flex flex-col h-full"
      >
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={300}
          className="object-cover rounded-md mb-4 h-[200px] w-full"
        />
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-bold text-gray-800 hover:text-blue-500 transition-colors duration-300 flex items-center mb-2"
        >
          {project.title} <FaExternalLinkAlt className="ml-2 text-sm" />
        </a>
        <p className="text-lg text-black-500">{project.description}</p>
      </div>
    ))}
  </div>
</section>

  );
};

export default Projects;
