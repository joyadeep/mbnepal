import Service from '@/components/service'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
   <Service 
   title='various regulatory reports'
   image='/regulatoryReport.jpg'
   >

    <p>
    MBWin System by default comes with all the general regulatory report defined by a institutions central system. But upon request of client, MicroBanker Nepal will build any types of required regulatory reports.
    </p>

   </Service>
  )
}

export default page