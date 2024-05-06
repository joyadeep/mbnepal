import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Story = (props: Props) => {
  return (
    <div className='px-5 md:px-36 flex flex-col md:flex-row items-center py-10 gap-5' >

        <div className='w-full md:w-2/3 '>
            <h3 className='capitalize text-secondary-text font-bold text-xl mb-5'>our story</h3>
            <p className='text-justify text-secondaryBackground mb-10'>
            Almost three decades ago, MBNepal started with a small staff and two fold visions. The first was to provide banking software services in Nepal for rural populations, that even big commercial banks did not have access to in those days. The second was to cultivate technical expertise and build capacity in Nepal, who could serve as consultants to other developing countries that needed similar services. MicroBanker software system was developed by MB Nepal. Our office in Nepal became the official partner and competence center for this software, providing services, support and expertise for its implementation around the world.
            </p>

            <Link href="/our-story" className='text-secondaryBackground text-sm font-medium'>View More <span className='font-black'> &gt;&gt;</span></Link>
        </div>

        <div className='w-full md:w-1/3 '>
        <Image src={"/team.jpg"} alt='team' width={500} height={500} className='mx-auto' />
        </div>


    </div>
  )
}

export default Story