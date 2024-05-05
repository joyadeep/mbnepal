import NewsCard from '@/components/newsCard'
import React from 'react'

type Props = {}

const News = (props: Props) => {
  return (
    <>
      <a id="news"/>
        <h3 className='text-center uppercase text-primary-text font-bold text-2xl pt-28'>News</h3>
        <div className='mt-5 grid grid-cols-3 gap-10'>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
        </div>
    </>
  )
}

export default News