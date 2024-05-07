import Service from '@/components/service'
import { Metadata } from 'next'
import React from 'react'

type Props = {}

export const metadata:Metadata = {
    title: "Microfinance Group Feature",
    description:"MICROFINANCE GROUP FEATURE The Customer orientation and customer relationship facilities enable MBWin to offer powerful features for Microfinance institutions that use various group methodologies, such as practiced by the Gramin Bank. Multilevel groups can be set up with a loan officer at the top of the hierarchy, followed by, for example, centers, then groups and […]"
}

const page = (props: Props) => {
  return (
    <Service 
    title='Microfinance Group Feature'
    image='/financeGroup.png'
    >
        <p>
        The Customer orientation and customer relationship facilities enable MBWin to offer powerful features for Microfinance institutions that use various group methodologies, such as practiced by the Gramin Bank. Multilevel groups can be set up with a loan officer at the top of the hierarchy, followed by, for example, centers, then groups and even subgroups, and finally members. Accounts can be owned by any of the levels in the hierarchy. This allows for the creation of an extremely flexible administration, monitoring and tracking system.
        </p>
        <br />
    <p>
    The multilevel group hierarchy is linked with the MBWin transaction processor in such a way that the system can be configured to auto generate batches of loan repayments and saving deposits. These can be used as so called collection sheets when making center visit to groups of customers and afterwards in the branch for exceptional posting of large numbers of transactions in an extremely efficient way. Lowering of transaction cost and improved staff productivity, as well as the provision of a powerful monitoring capability are the main benefits.
    </p>
    </Service>
  )
}

export default page