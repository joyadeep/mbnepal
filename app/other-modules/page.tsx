import Module from '@/components/module'
import Image from 'next/image'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <Module title='features and modules' 
    modules={[
        {
            image:"/financeGroup.png",
            iconTitle:"MicroFinance Group Feature"
        },
        {
            image:"/islamicBanking.png",
            iconTitle:"Islamic Banking"
        },
        {
            image:"/mis.png",
            iconTitle:"MIS Reporting"
        }, {
            image:"/chequeMgmt.png",
            iconTitle:"Cheque Management"
        }, 
        {
            image:"/generalLedger.png",
            iconTitle:"General Ledger and Accountants"
        },
        {
            image:"/multiCurrency.png",
            iconTitle:"Multi Currency"
        },
        {
            image:"/atmInterface.png",
            iconTitle:"ATM Interface"
        },
        {
            image:"/budgetModule.png",
            iconTitle:"Budget Module"
        },
        {
            image:"/fingerprintInterface.png",
            iconTitle:"Fingerprint Interface"
        },
        {
            image:"/customizedReport.png",
            iconTitle:"Customized Report"
        },
        {
            image:"/regulatoryReport.jpg",
            iconTitle:"Regulatory Report"
        },
        {
            image:"/barcode.png",
            iconTitle:"Barcode Interface"
        },
        {
            image:"/shareAccount.png",
            iconTitle:"Share Accounting & Management"
        },
        {
            image:"/qr.png",
            iconTitle:"QR Interface"
        }
    ]}
    />
  )
}

export default page