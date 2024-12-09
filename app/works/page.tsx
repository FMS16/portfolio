import React from 'react'
import Banner from '../components/works/Banner'
import Works from '../components/works/Works'

const page = () => {
  return (
    <div className='bg-[#ece9e6] pb-12'>
      <Banner />
      <div className='container mx-auto'>
        <Works />
      </div>
      <div className="w-full mt-64 pb-24">
        <div className="w-full mt-64 pb-7 md:pb-24">
          <div className="container flex md:justify-between flex-col md:flex-row mx-auto relative h-full">
            <div className="lg-w-[45%] w-full px-12 md:px-0 md:justify-center md:flex-row flex items-start flex-col">
              <ul className="text-lg">
                <li className="text-xl mb-4 text-[#8798c9] tracking-widest sf-bold dark:text-[#8798c9]">Elsewhere</li>
                <li className="my-2 opacity-50 hover:opacity-100"><a href="">Linkedin</a></li>
                <li className="my-2 opacity-50 hover:opacity-100"><a href="">Github</a></li>
                <li className="my-2 opacity-50 hover:opacity-100"><a href="">Contact</a></li>
                <li className="my-2 opacity-50 hover:opacity-100"><a href="">Posts</a></li>
                <li className="my-2 opacity-50 hover:opacity-100"><a href="">Youtube</a></li>
              </ul>
            </div>
            <div className="w-[100%] lg:w-full mt-32 md:mt-0 flex flex-wrap justify-center">
              <h1 className="text-xl text-[#8798c9] opacity-75 tracking-widest dark:text-[#8798c9]">© 2024 Fabricio Secondo</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page