import Module from '@/components/module'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <Module title='our products'
    modules={[
        {
            image:"/tabletBanking2.png",
            iconTitle:"Tablet Banking(Market Collection)"
        },
        {
            image:"/smsBanking2.png",
            iconTitle:"SMS Banking"
        },
        {
            image:"/smartBanking2.png",
            iconTitle:"Smart Banking"
        },
        {
            image:"/internetBanking2.png",
            iconTitle:"Internet Banking"
        },
        {
            image:"/assetMgmt2.png",
            iconTitle:"Assets & Inventory Management"
        },
        {
            image:"/hrSystem.png",
            iconTitle:"Human Resource, Payroll and Attendance Management System"
        },
        {
            image:"/electronicDocumentSystem.png",
            iconTitle:"Electronic Document Management System"
        },
        {
            image:"/creditAppraisalSystem.png",
            iconTitle:"Credit Appraisal System"
        }
    ]}
    />
  )
}

export default page