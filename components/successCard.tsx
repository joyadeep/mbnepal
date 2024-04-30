"use client"
import React, { useEffect, useState } from 'react'
// import AnimatedNumbers from "react-animated-numbers"
import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

type Props = {
    time:number;
    postfix?:string
    title:string;
    description:string;
}

const SuccessCard = ({time,title,description,postfix}: Props) => {
 

  return (
    <div className='flex gap-3 h-32'>
        <div className='w-3 bg-white'>
        </div>
        <div className='flex flex-col gap-3 w-full'>
            <h2 className='text-6xl flex gap-1 font-medium text-white'>
              <AnimatedNumbers 
              animateToNumber={Number(time)}
              transitions={(index) => ({
                type: "spring",
                duration: 5,
              })}
              />
             <span> {postfix}</span>
            </h2>
            <div>
            <h6 className='text-secondary-text uppercase font-semibold'>{title}</h6>
            <p className='text-white text-xs'>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default SuccessCard