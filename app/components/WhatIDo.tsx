"use client";

import React from 'react'
import { motion as m } from 'framer-motion'
import { useRouter } from 'next/navigation';

const WhatIDo = () => {
    const router = useRouter();
    return (
        <div className='w-full p-0 md:p-7 md:pt-24 flex justify-center'>
            <div className='flex flex-col sm:justify-center md:justify-start items-center'>
                <div className='w-[90%] md:w-full'>
                    <div className='w-full md:w-2/3'>
                        <m.h1 initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            variants={{
                                visible: { opacity: 1, scale: 1 },
                                hidden: { opacity: 0.25, scale: 0.85 }
                            }} className='text-5xl md:text-7xl sf-bold dark:text-[#000]'>I think outside the box, I create with purpose, and I develop with precision.</m.h1>
                        <m.button initial="hidden"
                        onClick={() => router.push('/works')}
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            variants={{
                                visible: { opacity: 1, scale: 1 },
                                hidden: { opacity: 0.25, scale: 0.85 }
                            }} className='hover:bg-[#333] my-20 py-4 px-10 items-center text-base md:text-lg tracking-widest gap-2 bg-[#000] text-white shadow-lg rounded-xl flex w-max'>
                            See my work
                            <span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clipRule="evenodd"></path><path fillRule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clipRule="evenodd"></path></svg></span>
                        </m.button>
                    </div>

                </div>
                <div className='w-[75%] md:w-full mt-[15vh] flex justify-end'>
                    <div className='w-full md:w-2/3 text-right flex justify-end flex-wrap'>
                        <m.h1 initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            variants={{
                                visible: { opacity: 1, scale: 1 },
                                hidden: { opacity: 0.25, scale: 0.85 }
                            }} className='text-5xl md:text-7xl sf-bold dark:text-[#000]'>I write, sharing my perspective from time to time.</m.h1>
                        <m.a initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            variants={{
                                visible: { opacity: 1, scale: 1 },
                                hidden: { opacity: 0.25, scale: 0.85 }
                            }}
                            href='https://www.linkedin.com/in/fabricio-secondo-a22262231/'
                            className='my-20 hover:bg-[#333] tracking-widest py-4 px-10 items-center text-base md:text-lg gap-2 bg-[#000] text-white shadow-lg rounded-xl flex w-max'
                        >
                            Read Articles
                            <span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clipRule="evenodd"></path><path fillRule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clipRule="evenodd"></path></svg></span>
                        </m.a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatIDo