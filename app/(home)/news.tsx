import NewsCard from '@/components/newsCard'
import React from 'react'

type Props = {}

const News = (props: Props) => {
  return (
    <div className='px-52 pt-10 pb-32'>
      <a id="news"/>
        <h3 className='text-center uppercase text-primary-text font-bold text-2xl'>News</h3>
        <div className='mt-5 grid grid-cols-3 gap-10'>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
        </div>
    </div>
  )
}

export default News