import React from 'react';
import Image from 'next/image'; 

const Survey = () => {
  return (
    <div className="container pt-40"> 
    <div className="grid lg:grid-cols-[50%,1fr] gap-10">
       {/* <div className="grid lg:grid-cols-2 gap-8"> */}
       
       {/*left side*/}
        <div>
       
          <Image
            //  className="w-[100%] h-auto lg:w-auto lg:h-[90vh]"
            className="w-[100%] max-w-[400px] h-auto"
            src="/survey.png"
            width={1000}
            height={600}
            alt="survey image"
          />
        </div>
       {/*right side*/}
        <div className="self-center ">
          <h2 className="text-4xl md:text-6xl font-bold">Survey</h2>
          <h2 className="text-4xl md:text-6xl font-bold pt-3">
            About our <span className="text-accent">Food</span>
          </h2>

          <p className="text-gray-700 pt-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            vel, repudiandae fugiat veritatis blanditiis consectetur? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Fuga, dicta!
          </p>

          <p className="text-gray-700 pt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            vel, repudiandae fugiat veritatis blanditiis consectetur? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Fuga, dicta!
          </p>
        </div>
      </div>
     </div>
     
  );
};

export default Survey;

