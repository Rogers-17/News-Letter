"use client"

import { useState } from 'react'
import Background from './Background'
import { Button } from '../ui/button'


const Homepage = () => {

    const [name, setName] = useState<string>("");
    const [email, SetEmail] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleSubmit = (e: any) => {
        e.preventDefault();

        
    }


  return (
    <div className='container'>
        <div className='items-center'>
        <Background />
            <div className='md:w-[478px]'>
                <h1 className='text-white mt-10 font-bold text-lg md:text-2xl'>Coming Soon!</h1>
                <p className='text-3xl md:text-6xl font-bold tracking-tighter'>
                    Our Brand New Website <br /> is On The Way
                </p>
                <p className='text-[#FFFB00] text-sm md:text-lg mt-3 mb-3'>
                    Subscribe to be among the first users
                </p>
            </div>
            
        <form onSubmit={handleSubmit}>
            
            <input type="text" 
            placeholder='Name'
            className='md:w-[300px] w-[250px] focus:outline-none text-black border-white !bg-white p-2 mt-1 rounded-lg md:h-[50px]'
            onChange={(e) => setName(e.target.value)}
            value={name}
            /><br></br>

            <input type="email" 
            placeholder='Enter Your Email'
            className='md:w-[300px] w-[250px] focus:outline-none text-black border-white !bg-white p-2 mt-1 rounded-lg md:h-[50px]'
            onChange={(e) => SetEmail(e.target.value)}
            value={email}
            /><br></br>
            {error && <p className='text-red-500'>{error}</p>}
            <Button variant={'secondary'} size={'lg'} type='submit'>
                Submit
            </Button>
        </form>
        </div>
    </div>
  )
}

export default Homepage
