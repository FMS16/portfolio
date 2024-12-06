"use client";

import React from 'react'
import Image from 'next/image'
import humana from "./../../assets/images/Humana_logo.png";
import pwc from "./../../assets/images/Logo-pwc.png"

import { motion as m } from 'framer-motion'

const Experiences = () => {
    return (
        <div className='w-full h-full mt-24'>
            <div className='flex flex-col w-[60%] max-sm:w-[90%] mx-auto'>
                <m.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }} // Más suave
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0.25, scale: 0.85 }
                    }} className='bg-[#dfd0d0] px-7 py-12 rounded-lg'>
                    <Image src={humana} className='object-contain' alt='Logo Humana' width={100} height={100} />
                    <h1 className='text-3xl sf-bold my-2'>Software Developer</h1>
                    <h2 className='tracking-widest mt-2 mb-4'>Nov 2023 - Present</h2>
                    <ul className='list-disc list-inside'>
                        <li className='my-2'>Developed console applications to automate file processing on remote servers, reducing manual workloads and ensuring server and service uptime through automated interventions.</li>
                        <li className='my-2'>Contributed ideas that led to the successful launch of new features, driving user engagement and satisfaction.</li>
                        <li className='my-2'>Built web pages and user interfaces for file processing, increasing speed by 75% and nearly eliminating manual tasks.</li>
                        <li className='my-2'>Proactively monitored and maintained production environments, identifying and resolving potential issues to minimize downtime.</li>
                    </ul>
                </m.div>
                <div className='my-12 flex justify-center'>
                    <div className='w-1 h-24 bg-[#dfd0d0] opacity-75'></div>
                </div>
                <m.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }} // Más suave
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0.25, scale: 0.85 }
                    }} className='bg-[#dfd0d0] px-7 py-12 rounded-lg'>
                    <Image src={pwc} className='object-contain' alt='Logo PwC' width={100} height={100} />
                    <h1 className='text-3xl sf-bold my-2'>Software Developer</h1>
                    <h2 className='tracking-widest mt-2 mb-4'>Aug 2022 - Nov 2023</h2>
                    <ul className='list-disc list-inside'>
                        <li className='my-2'>Developed console applications to automate file processing on remote servers, reducing manual workloads and ensuring server and service uptime through automated interventions.</li>
                        <li className='my-2'>Contributed ideas that led to the successful launch of new features, driving user engagement and satisfaction.</li>
                        <li className='my-2'>Built web pages and user interfaces for file processing, increasing speed by 75% and nearly eliminating manual tasks.</li>
                        <li className='my-2'>Proactively monitored and maintained production environments, identifying and resolving potential issues to minimize downtime.</li>
                    </ul>
                </m.div>
            </div>
        </div>
    )
}

export default Experiences