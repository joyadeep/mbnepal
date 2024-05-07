import Service from '@/components/service'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <Service
    title='Share Accounting & Management'
    image='/shareAccount.png'
    >
        <p>
        The Share Register and Transfer (R&T) system is to handle the share registration and transfer process in secondary share market. It is developed by MBNepal is in market for over ten years. This system is widely in use by various types of institutions.
        </p><br />
        <p>
        This system is very user friendly and designed with the consideration put in the international standard MicroBanking system and have fully functional capabilities required for Nepalese environment, law, rules and regulations.
        </p>

    </Service>
  )
}

export default page