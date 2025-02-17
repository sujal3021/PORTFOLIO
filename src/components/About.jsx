import React from 'react'
import AboutImg from '../assets/About.png'
import { FaChevronRight } from 'react-icons/fa'

const About = () => {
  return (
    <div id='about' className='py-20 bg-gray-900 z-50 text-gray-300'>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='text-4xl md:text-5xl font-bold mb-11 text-center'>About Me</h2>
        <div className='flex flex-col md:flex-row gap-20 items-center'>
            {/* img section */}
            <div className='relative border hidden md:block border-blue-600 p-1 rounded-full bg-blue-500 shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500'>
                <img src={AboutImg} alt="" className='w-[300px] md:w-[1500px] rounded-full border-blue-600 border shadow-blue-500 '/>
            </div>
            {/* paragraph section */}
            <div className='p-5 md:p-10 bg-gray-950 rounded-md shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500'>
                <p className='text-lg leading-7 mb-6'>Hi! I'm Sujal Saha, a passionate Full-Stack Developer with expertise in the MERN stack, Problem Solving, and Core subjects. With a strong foundation in modern web development and an eye for detail, I create elegant, user-friendly web solutions tailored to meet client needs.</p>
                <p className='text-lg leading-7 mb-6'>My journey into tech began after my higher secondary, and I've embraced every challenge to hone my skills in development, problem-solving, and teamwork. I’m always eager to learn and explore new technologies to deliver cutting-edge web experiences.</p>
                <p className='text-lg leading-7 '>I enjoy doing Leetcode and GeekForGeeks and used to play online games in my free time.I am quite interested in Chess and loved to watch Sci-fi and Horror movies.</p>
                <div className='mt-5'>
                    <h1 className='font-bold text-2xl mb-5 text-blue-400'>My Skills</h1>
                    <div className='flex flex-wrap gap-4 mb-5 text-sm'>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>React.js</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Express.js</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Next.js</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Tailwind Css</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Html5</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Node.js</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Github</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>DSA</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Java</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>DBMS</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Javascript</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Typescript</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Python</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>C/C++</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>OOPS in Java</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>CSS</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Mongo DB</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>MYSQL</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About