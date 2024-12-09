"use client";
import React from 'react'

const Banner = () => {
  return (
    <div className='background-works h-[100vh] flex relative justify-center items-center'>
      <h1 className='text-9xl w-[90%] xl:w-full dark:text-[#000] text-center mx-auto sf-bold max-sm:text-6xl'>What I&apos;ve Built</h1>
      <button
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        className='absolute bottom-10 left-1/2 transform -translate-x-1/2 text-3xl bg-[#000] text-[#fff] rounded-full h-[50px] w-[50px] flex justify-center items-center'>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clipRule="evenodd"></path>
        </svg>
      </button>
    </div>
  )
}

export default Banner