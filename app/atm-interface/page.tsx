import Service from '@/components/service'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <Service
    title='atm interface'
    image='/atmInterface.png'
    >
        <p>
        MBNepal has developed ATM interface jointly with Smart Choice Technology (SCT) and Nepal Investment Bank Ltd (NIBL) to provide the banking services to the customer through both SCT and NIBL&apos;s national payment network. The ATM interface is the service that allows the customer to withdraw their balances through debit/credit cards and enquire their balances 24 hours anywhere from Nepal/India where SCT or NIBL&apos;s national payment network is available.
        </p>
    </Service>
  )
}

export default page