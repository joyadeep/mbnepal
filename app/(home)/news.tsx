import NewsCard from '@/components/newsCard'
import React from 'react'

type Props = {}

const News = (props: Props) => {
  return (
    <div className='px-5 md:px-52 pb-32'>
      <a id="news"/>
        <h3 className='text-center uppercase text-primary-text font-bold text-2xl pt-28'>News</h3>
        <div className='mt-5 grid grid-cols-1 md:grid-cols-3 gap-10'>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
        </div>
    </div>
  )
}

export default News