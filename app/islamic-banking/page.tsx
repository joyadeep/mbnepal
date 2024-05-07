import Service from '@/components/service'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <Service 
    title='islamic banking'
    image="/islamicBanking.png"
    >
        <p>
        MBWIN also supports Islamic finance principal with editable profit margin. During the loan opening, it allows to enter profit margin which will be distributed equally among the installments for the period. Later these margins can be edited manually during the lifetime of the loan, installment by installment. In General Ledger, all income will be recognized as income from profit margin. Internally the interest calculation will be based on declining balance basis.
        </p>

    </Service>
  )
}

export default page