import Image from 'next/image'
import React from 'react'

type Props = {
    title:string;
    children:React.ReactNode;
    image:string;
}

const Service = (props: Props) => {
  return (
    <div className='px-5 md:px-60 py-5'>
        <h2 className='font-bold text-xl text-primary-text uppercase'>{props.title}</h2>
        <div className='flex flex-col md:flex-row gap-10 mt-3'>
            <div className='w-full md:w-9/12 text-sm text-primary-text text-justify'>
           {props.children}
            </div>

            <div className='w-full md:w-3/12'>
            <div className='relative w-40 h-40 md:w-32 md:h-32 mx-auto md:mx-0' >
                <Image src={props.image} alt={props.image} fill className="object-cover" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Service