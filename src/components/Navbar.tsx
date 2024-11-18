"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  // State to manage menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="container pt-6">
      <div className="flex justify-between items-center">
        <Image src="/logo.jpg" width={100} height={100} alt="logo" />
        
        {/* Menu for larger screens */}
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

        {/* Hamburger menu icon */}
        <AiOutlineMenu
          className="md:hidden text-accent cursor-pointer"
          size={30}
          onClick={toggleMenu}
        />
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <ul className="flex flex-col gap-4 mt-4 font-semibold text-[14px] md:hidden">
          <li>Home</li>
          <li>About</li>
          <li>Food</li>
          <li>Dish</li>
          <li>Contact</li>
          <button className="bg-accent text-white px-6 py-2 rounded-md">
            SignUp
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
