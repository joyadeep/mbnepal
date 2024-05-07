import Service from '@/components/service'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <Service
    title='budget module'
    image='/budgetModule.png'
    >
        <p>
        A budget is a set of interlinked plans that quantitatively describe an entity’s projected future operations. A budget is used to measure actual operating results, for the allocation of funding, and as a plan for future operations.
        </p>

    </Service>
  )
}

export default page