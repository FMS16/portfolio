import React from 'react';
import Image from 'next/image';

interface CardProps {
  bg: string;
  title: string;
  titlePosition:string;
  children: React.ReactNode;
  id:string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ bg, title, titlePosition, className, children, id }) => {
  return (
    <div
      id={id}
      className={`scroll-mt-20 flex mb-32 flex-wrap shadow-xl transition-all duration-300 ease-in-out justify-center cursor-default ${bg} ${className} rounded-3xl p-7 h-full`}
    >
      <div className={`w-full mb-12 text-${titlePosition}`}>
        <h1 className="uppercase tracking-widest text-lg">about</h1>
        <h1 className="text-3xl md:text-6xl limelight-regular">{title}</h1>
      </div>
      <>
        {children}
      </>
    </div>
  );
};

export default Card;
