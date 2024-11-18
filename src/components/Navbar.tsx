import React from 'react';
import Image from 'next/image';
import { AiOutlineMenu } from "react-icons/ai";

const navbar = () => {
  return (
    
    <nav className="container pt-6">
        <div className="flex justify-between items-center">
        <Image src="/logo.jpg" width={100} height={100} alt="logo" />
        <ul className="md:flex gap-8 items-center font-semibold text-[14px] hidden">
          <li>Home</li>
          <li>About</li>
          <li>Food</li>
          <li>Dish</li>
          <li>Contact</li>
          <button className="bg-accent text-white px-6 py-2 rounded-3xl">
            SignUp
          </button>

        </ul>
         <AiOutlineMenu className="md:hidden text-accent" size={30} /> 
          
    </div> 
    
    </nav> 
    
  );
}


export default navbar;
