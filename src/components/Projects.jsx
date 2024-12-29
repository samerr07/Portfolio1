import React from 'react'
import JobPortal from '../assets/JobPortal.png'
import ExpenseTracker from '../assets/ExpenseTracker.png'
import FoodDelivery from '../assets/FoodDelivery.png'
import ChatApp from '../assets/ChatApp.png'
import Tour from '../assets/Tour.png'
import TwitterClone from '../assets/TwitterClone.png'
import Cards from './Cards'


const Projects = () => {

    const projectJson = [
        {
          title: 'Job Portal',
          desc: 'Job Portal application built with the MERN stack. This application allows users to search, filter, and apply for jobs, and provides an admin panel to manage job listings.',
          image: JobPortal,
          live: "https://job-portal-mern-zsxf.onrender.com/",
          github: "https://github.com/samerr07/Job-Portal-MERN.git"
        },
        {
          title: 'Expense Tracker App',
          desc: 'This application helps you track your expenses in real-time, providing detailed analytics and insights into your financial habits. Built with Next.js, React, Drizzle ORM, Clerk, and Tailwind CSS.',
          image: ExpenseTracker,
          live: "https://expense-tracker-full-stack-app.vercel.app/",
          github: "https://github.com/samerr07/Expense-Tracker-Full-Stack-App.git"
        },
        {
          title: 'Food Delivery App',
          desc: 'This Full Stack Food Delivery App built using the MERN (MongoDB, Express, React, Node.js) stack. The app enables users to select dishes, place orders, and make payments.',
          image: FoodDelivery,
          live: "https://frontend-seven-roan.vercel.app/",
          github: "https://github.com/samerr07/Fullstack-Food-Delivery-App-E-Commerce-MERN.git"
        },
        {
          title: 'Tour & Travel',
          desc: 'This application is designed to help users explore and plan their travel experiences, providing a seamless and interactive platform for discovering destinations.',
          image: Tour,
          live: "https://mern-tour-and-travel1.vercel.app/",
          github: "https://github.com/samerr07/MERN-Tour-and-Travel.git"
        },
        {
          title: 'Chat App',
          desc: 'This is a real-time chat application built using the MERN (MongoDB, Express, React, Node.js) stack. It allows users to send text messages, share images, and communicate in real time.',
          image: ChatApp,
          live: "https://mern-chat-app-1-4cmn.onrender.com/",
          github: "https://github.com/samerr07/MERN-Chat-App.git"
        },
        {
          title: 'Twitter Clone',
          desc: 'The app includes core features of a social media platform, such as posting tweets, liking, commenting, following users, and more. It’s ensuring a seamless experience across devices.',
          image: TwitterClone,
          live: "https://twitter-clone-z1w1.onrender.com/",
          github: "https://github.com/samerr07/Twitter-Clone.git"
        },
      ];

  return (
    <div name='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards item={items}/>
            })}
        </div>
      </div>
    </div>
  )
}

export default Projects
