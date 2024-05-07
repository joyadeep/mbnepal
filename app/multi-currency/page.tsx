import Service from '@/components/service'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <Service
    title='multi currency'
    image='/multiCurrency.png'
    >

        <p>
        MBWin also supports multi-currency options. Institutions which handles multiple currency as a part of their daily transaction can use MBWin System to manage all aspect of banking by selecting their required currency base. The transactions bases are handled by rates determined by the institutions.
        </p>

    </Service>
  )
}

export default page