import Image from 'next/image'
import React from 'react'

type Props = {
    title:string;
    modules?:{
        image:string;
        iconTitle:string;
    }[]
}

const Module = ({title,modules}: Props) => {
  return (
    <div className='px-52 py-10'>
        <h3 className='text-2xl font-bold text-primary-text text-center uppercase '>{title}</h3>
        <div className='grid grid-cols-4 gap-5 gap-y-10 mt-10'>
            {
                modules?.map((module,index)=>(
                    <div key={index} className='flex flex-col gap-2 cursor-pointer'>
                <Image src={module.image} alt={module.iconTitle} width={130} height={130} className="mx-auto" />
                <p className='text-center text-primary-text font-semibold '>{module.iconTitle}</p>
            </div>
                ))
            }
        </div>
    </div>
  )
}

export default Module