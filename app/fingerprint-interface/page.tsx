import Service from '@/components/service'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <Service
    title='fingerprint interface'
    image='/fingerprintInterface.png'
    >
        <p>
        For withdrawal process, a customer can use their fingerprint as a means of verification. User can visit bank/cooperative teller and verify their transaction by registering their pre-registered finger identification.
        </p>

    </Service>
  )
}

export default page