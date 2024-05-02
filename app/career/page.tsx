import { Separator } from '@/components/ui/separator'
import React from 'react'
import Vacancy from './vacancy'
import { Metadata } from 'next';

type Props = {}
export const metadata: Metadata = {
  title: "Career",
};
const page = (props: Props) => {
  return (
    <div className='px-72 pt-10'>
      <h3 className='capitalize text-xl font-bold text-secondaryBackground'>current openings</h3>
      <Separator orientation='horizontal' className='h-0.5 bg-secondaryBackground my-5' />
      <Vacancy />
    </div>
  )
}

export default page