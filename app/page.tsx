"use client";

import Banner from "./components/Banner";
import Cards from "./components/Cards";
import WhatIDo from "./components/WhatIDo";

export default function Home() {
  return (
    <>
      <div className="background-custom-one w-full">
        <Banner />
      </div>
      <div className="background-custom-three w-full overflow-hidden">
        <div className="container mx-auto relative md-top-[10vh] h-full">
          <Cards />
        </div>
      </div>
      <div className="background-custom-three">
        <div className="w-[90%] md:container pt-40 md:pt-0 mx-auto relative h-full">
          <WhatIDo />
        </div>
        <div className="w-full mt-12 pb-7 md:pb-24">
          <div className="container flex md:justify-between flex-col md:flex-row mx-auto relative h-full">
            <div className="lg-w-[45%] w-full px-12 md:px-0 md:justify-center md:flex-row flex items-start flex-col">
              <ul className="text-lg dark:text-[#8798c9]">
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
    </>
  );
}


// <div className="py-10 mt-[15vh] text-center flex justify-center flex-col">
//             <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="mb-24 text-3xl w-[50px] bg-[#000] text-[#fff] rounded-full h-[50px] self-center flex justify-center items-center"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z" clipRule="evenodd"></path></svg></button>
//             <h1 className="text-2xl uppercase tracking-widest sf-bold">Fabricio Secondo</h1>
//             <h2 className="text-xl mt-4 tracking-wider">{new Date().getFullYear()}</h2>
//           </div>