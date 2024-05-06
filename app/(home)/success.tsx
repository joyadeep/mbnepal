import SuccessCard from '@/components/successCard'
import React from 'react'

type Props = {}

const Success = (props: Props) => {
  return (
    <div className='bg-secondaryBackground py-10 px-5 md:px-60'>
        <h3 className='uppercase text-secondary-text text-2xl font-semibold text-center'>measurable <span className='text-white'>successes</span></h3>
        <div className='grid grod-cols-1 md:grid-cols-3 gap-4 mt-5'>
          <SuccessCard time={27} title='years' description='Excellence in Software and Support for 27+ years' />
          <SuccessCard time={22} title='countries' description='Live in 22 countries' />
          <SuccessCard time={500} postfix='+' title='customers' description='Banks, Finances, Co-operatives, Investment Companies and Businesses worldwide' />
        </div>
    </div>
  )
}

export default Success