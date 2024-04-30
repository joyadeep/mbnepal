import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {}

const Vacancy = (props: Props) => {
  return (
    <div className='text-primary-text flex flex-col gap-6'>
        <div className='flex justify-between items-center'>
            <h5 className='font-semibold'>Android App Developer</h5>
            <span className='bg-blue-300/25 px-3 py-0.5 rounded-sm'>17 Jul</span>
        </div>
        <p>
        Android Developer Job Description Developing new Android Applications Maintaining existing projects and adding new features. Publishing apps on the PlayStore and releasing new upda
        </p>
        <Button className='uppercase text-white font-semibold bg-secondaryBackground w-fit rounded-sm p-5 hover:bg-secondary-text'>
            read more
        </Button>

    </div>
  )
}

export default Vacancy