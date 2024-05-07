import Module from '@/components/module'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <Module title='our products'
    modules={[
        {
            image:"/tabletBanking2.png",
            iconTitle:"Tablet Banking(Market Collection)",
            link:"/tablet-banking-market-collection"
        },
        {
            image:"/smsBanking2.png",
            iconTitle:"SMS Banking",
            link:"/sms-banking-system"
        },
        {
            image:"/smartBanking2.png",
            iconTitle:"Smart Banking",
            link:"/smart-banking-system"
        },
        {
            image:"/internetBanking2.png",
            iconTitle:"Internet Banking",
            link:"/internet-banking"
        },
        {
            image:"/assetMgmt2.png",
            iconTitle:"Assets & Inventory Management",
            link:"/assets-inventory-management"
        },
        {
            image:"/hrSystem.png",
            iconTitle:"Human Resource, Payroll and Attendance Management System",
            link:"/hrms"
        },
        {
            image:"/electronicDocumentSystem.png",
            iconTitle:"Electronic Document Management System",
            link:"/edms"
        },
        {
            image:"/creditAppraisalSystem.png",
            iconTitle:"Credit Appraisal System",
            link:"/credit-appraisal"
        }
    ]}
    />
  )
}

export default page