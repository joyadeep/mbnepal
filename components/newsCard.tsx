import React from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'
import { Button } from './ui/button'

type Props = {}

const NewsCard = (props: Props) => {
  return (
    <Card className='h-fit cursor-pointer hover:shadow-lg overflow-hidden group rounded-lg'>
        <CardContent className='p-0'>
           <div className='relative w-full h-40 overflow-hidden'>
            <div className='absolute right-0 bg-secondary-text p-1 text-white z-10 rounded-bl-sm capitalize'>30 Aug</div>
           <Image src="/team.jpg" alt='news1' fill className='object-cover group-hover:scale-125 duration-700' />
           </div>

          <div className='px-5 text-primary-text mt-5 flex flex-col gap-3 pb-5'>
          <h4 className=' text-sm font-semibold text-primary-text uppercase'>advanced training announcement</h4>
          <p className='text-sm'>Advance Training Course Announcement for 2023 We are having Advance MBWin Training classes from September 24th, 2023. To reserve your seat please contact Microbanker office numbers</p>

          <Button className='uppercase text-primary-text font-semibold bg-blue-200/50 w-fit rounded-sm hover:text-white hover:bg-secondaryBackground  duration-700'>Read more </Button>
          </div>

        </CardContent>
    </Card>
  )
}

export default NewsCard