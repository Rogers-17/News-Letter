"use client"


import {useEffect, useState} from "react";

const Thanks= () => {

    // const name = localStorage.getItem("name");
    const [name, setName] = useState<string>("");

    useEffect(() => {
        const storedName = localStorage.getItem("name");
        setName(storedName || '');
    }, []);

  return (
      <div className='container'>
          <div className='absolute top-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,_yellow,_transparent)] blur-[400px] z-0 pointer-events-none'></div>
          <div className='absolute bottom-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,_yellow,_transparent)] blur-[400px] z-0 pointer-events-none'></div>
          <div className='md:w-[478px]'>
              <h1 className="text-white mt-10 font-bold text-lg md:text-2xl">Hey, <span className='text-[#FFFB00]'>{name}</span></h1>
              <p className="text-3xl md:text-6xl font-bold tracking-tightertext-white mt-5">
                  Thanks for Subscribing and joining the Waitlist
              </p>
              <p className='text-[#FFFB00] text-sm md:text-lg mt-3 mb-3'>You will receive an Email once the site is done</p>
          </div>
      </div>
  )
}

export default Thanks
