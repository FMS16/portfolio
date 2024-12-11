import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div className='w-full h-[100vh] relative z-1 flex justify-center items-center'>
            <div className='flex flex-wrap justify-center'>
                <h1 className='text-6xl w-full text-center'>Oops! It seems like you got lost</h1>
                <h2 className='text-3xl w-full my-5 text-center'>Don't worry, come back quickly <Link className='underline text-blue-500' href='/'>here</Link></h2>
            </div>
        </div>
    )
}

export default NotFound