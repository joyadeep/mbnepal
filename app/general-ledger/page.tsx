import Service from '@/components/service'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <Service
    title='general ledger and accountings'
    image='/generalLedger.png'
    >
        <p>
        As MBWIN completely based on General Ledger and Accountings, it can be used as normal accounting system in any non-banking businesses as well. User can post journals, maintain ledgers, produce various report such as trial balance, balance sheet and profit and loss statement.
        </p>

    </Service>
  )
}

export default page