"use client";

import React from 'react'
import Image from 'next/image'
import fuerte from "./../../assets/images/logoRecortadoFino.webp"
import covijoven from "./../../assets/images/covijoven2.png"
import stranza from "./../../assets/images/logo.png"
import fsecondo from "./../../assets/images/fsecondo.png";

import { motion as m } from 'framer-motion'

import { useRouter } from 'next/navigation'

const Works = () => {
  const router = useRouter();
  return (
    <div className='w-full h-full bg-[#ECE9E6]'>
      <div className='w-[70%] mx-auto flex flex-wrap justify-center mt-40 gap-7'>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.3, ease: "easeInOut" }} // Más suave
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0.25, scale: 0.85 }
          }} className='w-full md:w-[30%] bg-[#e4e0dc] md:my-0 my-4 h-[300px] flex flex-col justify-center items-center shadow-md'>
          <div className='p-4 h-1/2 w-full relative flex items-center rounded-t-lg'>
            <Image src={fuerte} fill className='object-contain p-4' alt='Logo Fuerte' />
          </div>
          <div className='bg-white  h-1/2 w-full rounded-b-lg px-7 py-12'>
            <h1 className='text-xl sf-bold tracking-wider dark:text-[#000]'>Fuerte</h1>
            <h2 className='text-lg dark:text-[#000]'>fuerte.com.uy</h2>
          </div>
        </m.div>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.3, ease: "easeInOut" }} // Más suave
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0.25, scale: 0.85 }
          }} className='w-full md:w-[30%] bg-[#e4e0dc] h-[300px] md:my-0 my-4 flex flex-col justify-center items-center shadow-md'>
          <div className='p-4 h-1/2 flex w-full relative items-center rounded-t-lg'>
            <Image src={covijoven} fill className='object-contain p-4' alt='Logo Fuerte' />
          </div>
          <div className='bg-white  h-1/2 w-full rounded-b-lg px-7 py-12'>
            <h1 className='text-xl sf-bold tracking-wider dark:text-[#000]'>Covijoven2</h1>
            <h2 className='text-lg dark:text-[#000]'>Coming soon</h2>
          </div>
        </m.div>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.3, ease: "easeInOut" }} // Más suave
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0.25, scale: 0.85 }
          }} className='w-full md:w-[30%] bg-[#e4e0dc] h-[300px] md:my-0 my-4 flex flex-col justify-center items-center shadow-md'>
          <div className='p-4 h-1/2 flex w-full relative items-center rounded-t-lg'>
            <Image src={stranza} fill className='object-contain p-4' alt='Logo Fuerte' />
          </div>
          <div className='bg-white  h-1/2 w-full rounded-b-lg px-7 py-12'>
            <h1 className='text-xl sf-bold tracking-wider dark:text-[#000]'>Stranza</h1>
            <h2 className='text-lg dark:text-[#000]'>Coming soon</h2>
          </div>
        </m.div>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.3, ease: "easeInOut" }} // Más suave
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0.25, scale: 0.85 }
          }} onClick={() => router.push('/')} className='w-full md:w-[30%] md:my-0 my-4 bg-[#e4e0dc] h-[300px] flex flex-col justify-center items-center  shadow-md'>
          <div className='p-4 h-1/2 flex w-full relative items-center rounded-t-lg'>
            <Image src={fsecondo} fill className='object-contain p-4' alt='Logo Fuerte' />
          </div>
          <div className='bg-white  h-1/2 w-full rounded-b-lg px-7 py-12'>
            <h1 className='text-xl sf-bold tracking-wider dark:text-[#000]'>fsecondo.dev</h1>
          </div>
        </m.div>
      </div>
    </div>
  )
}

export default Works