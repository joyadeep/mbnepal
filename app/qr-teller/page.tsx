import Service from '@/components/service'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <Service
    title='qr teller'
    image='/qr.png'
    >
        <p>
        Smart Banking Customers can withdraw fund from teller using the QR generated from their smart banking app. This allows customers to withdraw fund without a cheque or ATM Card. For this function, an institution must also subscribe to our Smart Banking System.
        </p>

    </Service>
  )
}

export default page