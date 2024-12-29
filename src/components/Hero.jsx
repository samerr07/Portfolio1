import React from 'react'
import hero from '../assets/Hero.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import Github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import reactLogo from '../assets/React.png'
import reduxLogo from '../assets/Redux.png'
import tailwind from '../assets/Tailwind Css.png'

const Hero = () => {
  return (
    <section className='relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between' >
            <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
               <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug'>Hi There, <br />I'm Sameer <span className='text-red-500'>Srivastava</span></h1>
               <p className='md:text-2xl text-xl mb-4'>MERN Stack Developer</p>
               <p className='mb-4'>I'm a passionate Fullstack web developer with expertise in React, Next.js, Node.js, Express.js and modern web technologies. I love creating beautiful and functional website that solve real world problems.</p>
               <button className='bg-black text-white px-3 py-2 w-max rounded-md'><a href='/Sameer_Srivastava.pdf' download target='_blank'>Download CV</a></button>
            </div>
            <div className='md:w-1/2 relative flex justify-center items-end'>
                 <img src={hero} alt="" className='lg:h-[90vh] h-96' />
                 <img src={reactLogo} alt="" className='absolute w-10 top-36 left-0 rounded-full md:hidden'/>
                 <img src={reduxLogo} alt="" className='absolute w-10 top-0 right-5 md:hidden'/>
                 <img src={tailwind} alt="" className='absolute w-10 rounded-full right-0 bottom-36 md:hidden'/>
            </div>
        </div>
      </div>
      <div className='absolute top-40 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full'> 
        <a target='_blank' href= "mailto:anilanita07@gmail.com"><img src="https://e7.pngegg.com/pngimages/202/83/png-clipart-paper-red-envelope-mail-envelope-mail-miscellaneous-angle-thumbnail.png" alt="" className='w-20'/></a>
        <a target='_blank' href="https://github.com/samerr07"><img src={Github} alt="" className='w-20'/></a>
        <a target='_blank' href="https://x.com/anilsri62259096"><img src={twitter} alt="" className='w-20'/></a>
        <a target='_blank' href="https://www.linkedin.com/in/sameer-srivastava-7896b8208/"><img src={linkedin} alt="" className='w-20'/></a>
      </div>
    </section>
  )
}

export default Hero
