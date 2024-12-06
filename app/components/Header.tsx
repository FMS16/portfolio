"use client";

import Link from 'next/link';
import React from 'react'
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation'


const Header = () => {
    const [scroll, setScroll] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const [active, setActive] = useState('home');

    useEffect(() => {
        const currentPath = pathname === '/' ? 'home' : pathname.replace('/', '');
        setActive(currentPath);
    }, [pathname]);


    useEffect(() => {

        const handleScroll = () => {
            setScroll(window.scrollY > 120);
        };
    
        window.addEventListener("scroll", handleScroll);
    
        // Limpiar el listener al desmontar el componente
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    

    return (
        <header className={`w-full h-20 flex justify-center items-end sf-pro z-10 transition-all fixed top-0 z-50 duration-300 ease-in-out`}>
            <nav className='w-[150px] h-10 flex justify-center items-center'>
                <ul className={`flex justify-center items-center gap-7 px-7 py-4 rounded-3xl transition-all duration-300 ease-in-out ${scroll ? "bg-[#f4f3f0]/70 backdrop-blur-md" : "bg-transparent"}`}>
                    <li><Link className={`${active == 'home' && scroll ? 'text-[#000] bg-white' : 'text-[#4c6763]'} py-3 px-5 rounded-3xl`} onClick={() => setActive('home')} href='/'>Home</Link></li>
                    <li><Link className={`${active == 'works' && scroll ? 'text-[#000] bg-white' : 'text-[#4c6763]'} py-3 px-5 rounded-3xl`} onClick={() => setActive('works')} href='/works'>Works</Link></li>
                    <li><Link className={`${active == 'experience' ? 'text-[#000] bg-white' : 'text-[#4c6763]'} py-3 px-5 rounded-3xl`} onClick={() => setActive('experience')} href='/experience'>Experience</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
