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
              <p className='text-lg mt-4 text-center'>I love dogs! This is my dog Alvin in the summer of 2014.</p>
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
              <p className='text-lg mt-4 text-center'>I love football! I am a huge fan of Pe&ntilde;arol</p>
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
              <p className='font-bold tracking-wider'>2019</p>
            </div>
            <div className='bg-[#a8b7e0] py-3 px-5 relative z-10 md:z-0 md:static text-[#000] rounded-b-xl shadow-md'>
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
              <p className='font-bold tracking-wider text-right'>2021</p>
            </div>
            <div className='bg-[#a8b7e0] py-3 px-5 relative z-10 md:z-0 md:static text-[#000] rounded-b-xl shadow-md'>
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
              <p className='font-bold tracking-wider'>2022</p>
            </div>
            <div className='bg-[#a8b7e0] py-3 px-5 relative z-10 md:z-0 md:static text-[#000] rounded-b-xl shadow-md'>
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
              <p className='font-bold tracking-wider text-right'>2024</p>
            </div>
            <div className='bg-[#a8b7e0] py-3 px-5 text-[#000] rounded-b-xl shadow-md'>
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

{/*  */ }

{/* <Card titlePosition='right' title="My Works" bg="bg-[#d9abff]" width="w-[63%]">
        <>
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0.25, scale: 0.85 }
            }}
            className='flex w-full relative rounded-3xl p-5 my-5 bg-[#c39be4]'>
            <div className='w-full relative'>
              <Image src={logoFuerte} width={150} height={100} alt='Logo Fuerte' />
              <h2 className='my-2'>2024</h2>
              <p>
                Fuerte is an online clothing store where 85% of sales are driven by the website.
                I played a key role in integrating a seamless payment gateway, implementing an efficient stock management system, and overseeing order and shipping management.
                The project also involved optimizing the user experience, ensuring a smooth and secure transaction process.
                Currently, I am working on a complete redesign to further enhance the store's functionality and appeal, aiming for an even better shopping experience and higher customer engagement.
              </p>
              <a className='my-4 text-center underline tracking-wider block' href='https://www.fuerte.com.uy' target="_blank">www.fuerte.com.uy</a>
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
            className='flex w-full relative rounded-3xl p-5 my-5 bg-[#c39be4]'>
            <div className='w-full relative'>
              <h1 className='text-3xl sf-bold relative'>Covijoven<span className='inline-block absolute top-[5px] ml-1 rotate-12'>2</span></h1>
              <h2 className='my-2'>2024 -</h2>
              <p>
                This project aims to provide a comprehensive digital solution for cooperative management, addressing operational and administrative needs in an efficient and accessible way. The app will allow cooperative members to centrally manage finances, work shifts, assemblies, and the roles of each member, easing the administrative burden on treasurers, auditors, and board members.
                The app will provide access to all necessary functionalities for the smooth operation of the cooperative, enabling tasks such as finance tracking, generating detailed reports, organizing assemblies, and assigning roles in an organized and efficient manner. This will alleviate the daily tasks of responsible parties and facilitate strategic decision-making.
                The app is currently in development and is set to launch on the App Store in March 2025, providing a powerful and modern tool to optimize internal management for cooperatives.
              </p>
            </div>
          </m.div>
          <m.div initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.3, ease: "easeInOut" }} // Más suave
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0.25, scale: 0.85 }
            }} className='flex w-full relative rounded-3xl p-5 my-5 bg-[#c39be4]'>
            <div className='w-full relative'>
              <h1 className='text-3xl sf-bold relative'>Stranza <span className='absolute top-[50%] text-lg'>films</span></h1>
              <h2 className='my-2'>2024 -</h2>
              <p>
                Stranza is a creative production company, currently working on a new website aimed at showcasing its diverse range of projects and services. The website will serve as a powerful tool to attract potential clients, highlight the team's portfolio, and demonstrate the creative expertise behind Stranza's work. Scheduled to launch in February 2025, the site will feature an intuitive and visually stunning design, aimed at enhancing user experience and presenting Stranza's capabilities in film, media production, and more
              </p>
            </div>
          </m.div>
          <m.div initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.3, ease: "easeInOut" }} // Más suave
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0.25, scale: 0.85 }
            }} className='flex w-full relative rounded-3xl p-5 my-5 bg-[#c39be4]'>
            <div className='w-full relative'>
              <h1 className='text-3xl sf-bold relative'>Falta Uno</h1>
              <h2 className='my-2'>2024 -</h2>
              <p>
                Falta Uno is an innovative app designed to connect 5-a-side football players with people eager to join games.
                Whether you are missing a player or looking to participate in a match, the app allows users to easily invite others.
                The platform also features player ratings, including key factors like punctuality and teamwork, ensuring a great experience for everyone involved. The app is currently under development, with a planned launch in 2026.
              </p>
            </div>
          </m.div>
        </>
      </Card> */}

//   <Card titlePosition='right' title='Contact' bg="bg-[#abe4ff]" width='w-[33%]' id='contact'>
//   <>
//     <ul className='my-7 w-full flex-col'>
//       <m.li initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false, amount: 0.5 }}
//         transition={{ duration: 0.3, ease: "easeInOut" }}
//         variants={{
//           visible: { opacity: 1, scale: 1 },
//           hidden: { opacity: 0.25, scale: 0.85 }
//         }} className='mb-7 w-full'>
//         <a className='hover:underline flex justify-end items-center gap-2 text-xl' href=''>
//           <span>Fabricio Secondo</span>
//           <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path></svg>
//         </a>
//       </m.li>
//       <m.li initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false, amount: 0.5 }}
//         transition={{ duration: 0.3, ease: "easeInOut" }}
//         variants={{
//           visible: { opacity: 1, scale: 1 },
//           hidden: { opacity: 0.25, scale: 0.85 }
//         }} className='mt-7 w-full text-right'>
//         <a className='hover:underline flex justify-end items-center gap-2 text-xl' href=''>
//           <span>martinsecondo16@gmail.com</span>
//           <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2z" clipRule="evenodd"></path><path fillRule="evenodd" d="M.071 4.243a.5.5 0 01.686-.172L8 8.417l7.243-4.346a.5.5 0 01.514.858L8 9.583.243 4.93a.5.5 0 01-.172-.686z" clipRule="evenodd"></path><path d="M6.752 8.932l.432-.252-.504-.864-.432.252.504.864zm-6 3.5l6-3.5-.504-.864-6 3.5.504.864zm8.496-3.5l-.432-.252.504-.864.432.252-.504.864zm6 3.5l-6-3.5.504-.864 6 3.5-.504.864z"></path></svg>
//         </a>
//       </m.li>
//       <m.li initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false, amount: 0.5 }}
//         transition={{ duration: 0.3, ease: "easeInOut" }}
//         variants={{
//           visible: { opacity: 1, scale: 1 },
//           hidden: { opacity: 0.25, scale: 0.85 }
//         }} className='mt-7 w-full text-right'>
//         <a className='hover:underline flex justify-end items-center gap-2 text-xl' href=''>
//           <span>My Resume</span>
//           <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 2a3 3 0 0 1 3 3v2h-2v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-2h16v2a1 1 0 0 0 .883.993L18 20a1 1 0 0 0 .993-.883L19 19V4H6a1 1 0 0 0-.993.883L5 5v10H3V5a3 3 0 0 1 3-3h14z"></path></g></svg>
//         </a>
//       </m.li>
//     </ul>
//   </>
// </Card>


{/* <Card titlePosition='left' title='Professional Experience' bg="bg-[#D5C6E0]" width="w-[63%]" id='experience'>
        <>
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0.25, scale: 0.85 }
            }}
            className='flex w-full relative rounded-3xl p-5 my-5'>
            <div className='w-full relative'>
              <Image src={logoHumana} width={50} height={25} alt="logoPwc" />
              <h1 className='text-3xl sf-bold my-2'>Software Developer</h1>
              <h2 className='my-2 tracking-widest'>Nov 2023 - Present</h2>
              <ul className='list-disc list-inside'>
                <li className='my-2'>Developed automations to reduce manual workloads, such as processing files efficiently and monitoring
                  server and service health to ensure uptime through automated interventions.</li>
                <li className='my-2'>Contributed ideas that led to the successful launch of new features, driving user engagement and
                  satisfaction.</li>
                <li className='my-2'>Proactively monitored and maintained production environments, identifying and resolving potential
                  issues to minimize downtime.</li>
                <li className='my-2'>Optimized web applications by refactoring code, improving load times and reducing resource usage
                  significantly</li>
              </ul>
            </div>
          </m.div>
          <div className='h-px w-full bg-gray-500'></div>
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0.25, scale: 0.85 }
            }}
            className='flex w-full relative rounded-3xl p-5 my-5'>
            <div className='w-full relative'>
              <Image src={logoPwc} width={50} height={25} alt="logoPwc" />
              <h1 className='text-3xl sf-bold my-2'>Software Developer</h1>
              <h2 className='my-2 tracking-widest'>Aug 2022 - Nov 2023</h2>
              <ul className='list-disc list-inside'>
                <li className='my-2'>Reviewed software requirements documents to ensure completeness and accuracy, identifying and
                  resolving discrepancies.</li>
                <li className='my-2'>Led website migrations, successfully implementing new designs and updated architectures, resulting in a
                  30% improvement in user engagement and a 20% faster load time.</li>
                <li className='my-2'>Optimized application functionality through collaborative efforts with the development team, enhancing
                  overall system reliability and reducing error rates by 15%.</li>
              </ul>
            </div>
          </m.div>
        </>
      </Card> */}