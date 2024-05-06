import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {
    title:React.ReactElement;
    description:string;
    moreLink?:string;
    backgroundColor:string;
    features:{
        image:string;
        iconTitle:string;
    }[];
    columns:string;
    linkId?:string;
}

const Features = ({title,description,moreLink,features,backgroundColor,columns,linkId}: Props) => {
  return (
    <>
    <a id={linkId} />
    <div className={`px-5 md:px-64 py-28 ${backgroundColor} `}>
    <div className='flex flex-col gap-5 text-center '>
        <div className=' text-secondary-text uppercase text-2xl font-bold'>
        {title}
        </div> 
        <p className={cn("text-sm",backgroundColor === "bg-white"? "text-secondaryBackground":"text-white")}>{description}</p>

        <div className={cn("grid gap-10 mt-10",columns)}>
            {features.map((feature,index)=>(
                <div key={index} className='flex flex-col gap-2'>
                <div className='relative w-32 h-32 mx-auto'>
                    <Image src={feature.image} alt="finance group" fill className='absolute' />
                </div>
                <p className={cn("font-semibold",backgroundColor === "bg-white"? "text-secondaryBackground":"text-white")}>{feature.iconTitle}</p>
            </div>
            ))}
        </div>
    </div>
       {
           moreLink && 
           <div className='mt-10'>
       <Link href={moreLink} className={cn('text-sm font-medium ',backgroundColor === "bg-white"? "text-secondaryBackground":"text-white")}>View More <span className='font-black'> &gt;&gt;</span></Link>
        </div>
       } 
    </div>
       </>
  )
}

export default Features