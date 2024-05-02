import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Mbwin = (props: Props) => {
  return (
    <div className='px-64 bg-secondaryBackground py-10 flex items-center gap-36' >
        <Image src={"/mbwin.png"} alt='mbwin' width={200} height={100} />
        <div>
            <h3 className='uppercase text-lg text-white font-bold tracking-wider'><span className='text-secondary-text'>mbwin</span> core banking system</h3>
            <p className='text-white mt-5 mb-10'>
            The MicroBanking System for Windows (MBWin) is banking software designed and developed for a wide range of banks and financial intermediaries.  Because of its multi-tier architecture, the system is highly scalable and can, therefore, cater to a wide range of users and be adapted to a variety of hardware configurations.  It is modular in terms of applications and functionality.
            </p>
            <Link href="/mbwin-system" className='text-white text-sm font-medium'>View More <span className='font-black'> &gt;&gt;</span></Link>
        </div>
    </div>
  )
}

export default Mbwin