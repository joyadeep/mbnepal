import React from 'react'
import { Button } from '../../components/ui/button'

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div className='h-[calc(100vh-80px)] w-full relative  overflow-hidden'>
        <video autoPlay muted loop className='absolute w-full object-cover'>
            <source src='/hero.mp4' type='video/mp4' />
        </video>
        <div className='absolute flex flex-col gap-5 text-center p-5 rounded-md bg-white/70 w-2/3 h-fit top-[55%] left-1/2 translate-x-[-50%] translate-y-[-50%] '>
            <p className='uppercase font-bold text-xl tracking-wider  text-secondary-text'>all banking solution</p>
            <p className='uppercase font-bold text-5xl tracking-wider w-1/2 mx-auto text-primary-text leading-normal'>veteran of banking system</p>
            <p className='text-primary-text'>
            For more than 27 years, MicroBanker Nepal has been supporting banks, finances and co-operatives in Nepal and around the world with excellent core-banking system and innovative banking supplementary products. Along with our outstanding customer support and services MicroBanker can be best solution to your banking requirements.
            </p>
            <Button className="uppercase tracking-widest bg-secondary-text text-lg w-fit self-center rounded-full font-bold px-10 py-6 hover:bg-white hover:text-secondary-text duration-500">contact us</Button>
        </div>
    </div>
  )
}

export default HeroSection