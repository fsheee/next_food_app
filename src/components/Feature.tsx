import React from 'react';
import Dash from './Dash';
import Image from 'next/image';

const Feature = () => {
  return (
    <div className="container pt-40">
        <h2 className="text-6xl font-bold">Our</h2>
        <h2 className="text-6xl font-bold pt-2">
            Featured <span className="text-accent">Food</span>
        </h2>

        <p className="max-w-[550px] pt-10 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, modi obcaecati 
            <br/>ut repudiandae tempore odio adipisci architecto autem tenetur dignissimos
             exercitationem nemo esse voluptatibus aliquam assumenda libero, eos iusto iure.
        </p>
      
    
  <Dash />
  <div className="grid md:grid-cols-[1fr,37%,1fr] gap-10 mt-10">
   <div className="w-fit mx-auto">
     <Image className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl" 
     src="/grid.jpg"
     width={300}
     height={600}
     alt="grid-img"
     />
 <div className="space-y-4">
          <Dash/>
          <h2 className="font-medium text-xl">Pasta</h2>
          <p className="text-gray-700 text-[14px] xl:text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae quis eos cum excepturi esse adipisci voluptates
            consequuntur corporis Rem quam aliquid libero amet dignissimos.
          </p>
    </div>    
    </div> 
    <div className="w-fit mx-auto self-end ">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/momos.avif"
            width={500}
            height={900}
            alt="grid image"
          />
           <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl">Dumplings Momo</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, nesciunt distinctio.
            </p>
          </div>
        </div>

        <div className="w-fit mx-auto">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/shrimp.avif"
            width={300}
            height={600}
            alt="grid image"
          />

          <div className="space-y-6">
            <Dash />
            <h2 className="font-medium text-xl">Shrimp</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, nesciunt distinctio.
            </p>
          </div>
        </div>
     </div>    
    </div>
  
  );
}

export default Feature;
