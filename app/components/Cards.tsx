"use client";

import React from 'react';
import Card from './Card';
import Image from 'next/image';
import arrow from "../assets/images/arrow-vector-png.webp";

import alvin from "../assets/images/alvin2.png";
import cap from "./../assets/images/cap2.jpeg"


import { motion as m } from 'framer-motion';

const Cards = () => {
  return (
    <div className="flex flex-wrap w-[90%] mx-auto md:w-full justify-between">
      <Card titlePosition='left' className='hidden md:block md:w-[35%]' title="Me" bg="bg-[#d7c9ff]" id='me'>
        <>
          <div className='relative flex items-center flex-col w-full'>
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.3, ease: "easeInOut" }} // Más suave
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.25, scale: 0.85 }
              }}
              className="w-full h-full">
              <div className='w-full h-[250px] relative'>
                <Image fill src={alvin} className='object-cover object-bottom rounded-xl' alt='Alvin, my dog' />
              </div>
              <p className='text-lg mt-4 text-center dark:text-[#000]'>I love dogs! This is my dog Alvin in the summer of 2014.</p>
            </m.div>
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.3, ease: "easeInOut" }} // Más suave
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.25, scale: 0.85 }
              }}
              className="w-full h-full mt-12">
              <div className='w-full h-[250px] relative'>
                <Image fill src={cap} className='object-cover object-center rounded-xl' alt='Alvin, my dog' />
              </div>
              <p className='text-lg mt-4 text-center dark:text-[#000]'>I love football! I am a huge fan of Pe&ntilde;arol</p>
            </m.div>
          </div>
        </>
      </Card>
      <Card titlePosition='right' title="My Journey" className='w-full md:w-[60%]' bg="bg-[#b0bbdd]" id='my-journey'>
        <div className="relative flex flex-col">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.3, ease: "easeInOut" }} // Más suave
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0.25, scale: 0.85 }
            }}
            className="self-end md:w-[50%] w-[90%] relative my-4">
            <div className='bg-[#8798c9] p-2 rounded-t-xl'>
              <p className='font-bold tracking-wider dark:text-[#000]'>2019</p>
            </div>
            <div className='bg-[#a8b7e0] dark:text-[#000] py-3 px-5 relative z-10 md:z-0 md:static text-[#000] rounded-b-xl shadow-md'>
              <p>
                I discovered programming in high school through an Informatics class, and I immediately fell in love with HTML, CSS, and JavaScript.
                This sparked my passion for coding and set me on the path to becoming a developer.
              </p>
            </div>
            <div className='absolute -bottom-[25px] -left-[25%] z-1'>
              <Image src={arrow} width={100} height={100} alt='arrow' />
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
            }}
            className="self-start md:w-[50%] w-[90%] relative my-4">
            <div className='bg-[#8798c9] p-2 rounded-t-xl'>
              <p className='font-bold tracking-wider text-right dark:text-[#000]'>2021</p>
            </div>
            <div className='bg-[#a8b7e0] dark:text-[#000] py-3 px-5 relative z-10 md:z-0 md:static text-[#000] rounded-b-xl shadow-md'>
              <p>
                I completed my final year of high school while simultaneously pursuing a technical programming degree in ORT University.
                It was a challenging journey, but it deepened my passion for programming even further.
              </p>
            </div>
            <div className='absolute transform scale-x-[-1] -bottom-[25px] -right-[25%] z-1'>
              <Image src={arrow} width={100} height={100} alt='arrow' />
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
            }}
            className="self-end md:w-[50%] w-[90%] relative my-4">
            <div className='bg-[#8798c9] p-2 rounded-t-xl'>
              <p className='font-bold tracking-wider dark:text-[#000]'>2022</p>
            </div>
            <div className='bg-[#a8b7e0] dark:text-[#000] py-3 px-5 relative z-10 md:z-0 md:static text-[#000] rounded-b-xl shadow-md'>
              <p>
                I landed my first job in the tech industry, and from that moment, my learning journey never stopped.
                With the guidance of incredible mentors and involvement in impactful projects,
                I had the privilege of working in multinational companies alongside professionals from around the globe.
              </p>
            </div>
            <div className='absolute -bottom-[25px] -left-[25%] z-1'>
              <Image src={arrow} width={100} height={100} alt='arrow' />
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
            }}
            className="self-start md:w-[50%] w-[90%] relative my-4">
            <div className='bg-[#8798c9] p-2 rounded-t-xl'>
              <p className='font-bold tracking-wider text-right dark:text-[#000]'>2024</p>
            </div>
            <div className='bg-[#a8b7e0] py-3 px-5 text-[#000] dark:text-[#000] rounded-b-xl shadow-md'>
              <p>
                I worked on several exciting freelance projects that challenged and inspired me.
                Currently, I am part of a new multinational company, continuing to grow and embrace new opportunities.
                This is my present, and I could not be more excited about the journey ahead!
              </p>
            </div>
          </m.div>
        </div>
      </Card>
    </div>
  );
};

export default Cards;
