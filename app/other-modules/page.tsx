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
            iconTitle:"MicroFinance Group Feature",
            link:"/microfinance-group-feature"
        },
        {
            image:"/islamicBanking.png",
            iconTitle:"Islamic Banking",
            link:"/islamic-banking"
        },
        {
            image:"/mis.png",
            iconTitle:"MIS Reporting",
            link:"/mis-reporting"
        }, {
            image:"/chequeMgmt.png",
            iconTitle:"Cheque Management",
            link:"/cheque-management"
        }, 
        {
            image:"/generalLedger.png",
            iconTitle:"General Ledger and Accountants",
            link:"/general-ledger"
        },
        {
            image:"/multiCurrency.png",
            iconTitle:"Multi Currency",
            link:"/multi-currency"
        },
        {
            image:"/atmInterface.png",
            iconTitle:"ATM Interface",
            link:"/atm-interface"
        },
        {
            image:"/budgetModule.png",
            iconTitle:"Budget Module",
            link:"/budget-module"
        },
        {
            image:"/fingerprintInterface.png",
            iconTitle:"Fingerprint Interface",
            link:"/fingerprint-interface"
        },
        {
            image:"/customizedReport.png",
            iconTitle:"Customized Report",
            link:"/customized-report"
        },
        {
            image:"/regulatoryReport.jpg",
            iconTitle:"Regulatory Report",
            link:"/regulatory-report"
        },
        {
            image:"/barcode.png",
            iconTitle:"Barcode Interface",
            link:"/barcode-interface"
        },
        {
            image:"/shareAccount.png",
            iconTitle:"Share Accounting & Management",
            link:"/share-accounting-management"
        },
        {
            image:"/qr.png",
            iconTitle:"QR Teller",
            link:"/qr-teller"
        }
    ]}
    />
  )
}

export default page