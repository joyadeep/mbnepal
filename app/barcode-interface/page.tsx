import Service from '@/components/service'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <Service
    title='barcode'
    image='/barcode.png'
    >
        <p>
        Barcode facilitates MBWin user with high level security in addition to other security features. Barcode itself is a number of unique lines which makes your banking procedure easy and smooth. Barcode can be used for easy recognition of Account number, cheque number, etc. It can also be used in FD certificate to auto identification of FD related info from customers account.
        </p>

    </Service>
  )
}

export default page