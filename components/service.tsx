import Image from 'next/image'
import React from 'react'

type Props = {
    title:string;
    children:React.ReactNode;
    image:string;
}

const Service = (props: Props) => {
  return (
    <div className='px-60 pt-5'>
        <h2 className='font-bold text-xl text-primary-text uppercase'>{props.title}</h2>
        <div className='flex gap-10 mt-3'>
            <div className='w-9/12 text-sm text-primary-text text-justify'>
           {props.children}
            </div>

            <div className='w-3/12'>
            <div className='relative w-32 h-32' >
                <Image src={props.image} alt={props.image} fill className="object-cover" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Service