import Service from '@/components/service'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <Service
    title='customized report'
    image='/customizedReport.png'
    >
        <p>
        Various types of financial reports are included in MBWin System by default. Upon requirement of clients and regulatory bodies MBNepal will design these reports in to the MBWIN System.
        </p>

    </Service>
  )
}

export default page