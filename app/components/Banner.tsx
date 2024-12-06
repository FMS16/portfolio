import React from 'react'

const Banner = () => {
    return (
        <div className='w-full h-[100vh] relative z-1 flex justify-center items-center'>
            <div>
                <h1 className='text-9xl w-[90%] xl:w-full xl:text-left text-center mx-auto sf-bold max-sm:text-6xl'>
                    Hi. I'am Fabricio.
                </h1>
                <h1 className='text-9xl w-[90%] text-center mx-auto sf-bold max-sm:text-6xl max-md:text-7xl'>A Developer.</h1>
                <h2 className='text-xl w-[90%] mx-auto xl:w-full text-center opacity-50 my-24 relative cursor-default'>Lover of programming, always striving to learn, grow, and innovate</h2>
            </div>
        </div>
    )
}

export default Banner