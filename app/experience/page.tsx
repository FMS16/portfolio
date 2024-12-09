import React from 'react'
import Banner from '../components/experience/Banner'
import Experiences from '../components/experience/Experiences'

const page = () => {
  return (
    <div className='bg-[#FFEEEE] pb-12'>
      <Banner />
      <div className='container mx-auto'>
          <Experiences />
      </div>
      <div className="w-full mt-64 pb-7 md:pb-24">
          <div className="container flex md:justify-between flex-col md:flex-row mx-auto relative h-full">
            <div className="lg-w-[45%] w-full px-12 md:px-0 md:justify-center md:flex-row flex items-start flex-col">
              <ul className="text-lg dark:text-[#8798c9]">
              <li className="text-xl mb-4 text-[#8798c9] tracking-widest sf-bold dark:text-[#8798c9]">Elsewhere</li>
                <li className="my-2 opacity-50 hover:opacity-100"><a href="https://www.linkedin.com/in/fabricio-secondo-a22262231/">Linkedin</a></li>
                <li className="my-2 opacity-50 hover:opacity-100"><a href="https://github.com/FMS16?tab=repositories">Github</a></li>
                <li className="my-2 opacity-50 hover:opacity-100"><a href="mailto:martinsecondo16@gmail.com">Contact</a></li>
                <li className="my-2 opacity-50 hover:opacity-100"><a href="https://www.linkedin.com/in/fabricio-secondo-a22262231/">Posts</a></li>
                <li className="my-2 opacity-50 hover:opacity-100"><a href="https://www.youtube.com/@elrincondealanturing">Youtube</a></li>
              </ul>
            </div>
            <div className="w-[100%] lg:w-full mt-32 md:mt-0 flex flex-wrap justify-center">
              <h1 className="text-xl text-[#8798c9] opacity-75 tracking-widest dark:text-[#8798c9]">© 2024 Fabricio Secondo</h1>
            </div>
          </div>
        </div>
    </div>
  )
}

export default page