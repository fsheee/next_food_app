import React from 'react';
import { BsPinterest, BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="container pt-40">
        <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-4">
                <h2 className="text-xl font-bold">About us</h2>
                <p className="leading[1.8]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Similique quaerat amet magni eveniet? Impedit quibusdam, 
                     tempore esse aliquam, neque error quod veritatis
                     eligendi vitae voluptates maxime velit eos, aut veniam!
                </p>
            </div>
            <div className="space-y-4">
          <h2 className="text-xl font-bold">The Restaurant</h2>

          <ul className="space-y-2">
            <li>About Us</li>
            <li>Chefs</li>
            <li>Events</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <div className="flex gap-8 text-accent text-2xl pt-16">
            <FaFacebookF />
            <BsTwitter />
            <BsPinterest />
            <FaLinkedinIn />
          </div>
        </div>
       </div>
       <div className="w-fit mx-auto pt-16 pb-8 text-[14px] sm:text-[16px]">
        &copy; Copyright 2024 All rights reserved[created by @fsheen]
      </div>
      
    </div>
  );
}

export default Footer; 
