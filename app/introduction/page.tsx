import { Metadata } from 'next';
import React from 'react'

type Props = {}
export const metadata: Metadata = {
  title: "Introduction",
  description:"INTRODUCTION We are the authorized distributor and competence center of MBWin, registered and based in Kathmandu, Nepal serving globally. It is one of the world’s leading banking software used by various types of institutions worldwide. It is a robust software to manage an organization’s various types of client transactions in a comprehensive manner and efficiently […]"
};
const page = (props: Props) => {
  return (
    <div className='px-24 pt-2 pb-10 flex flex-col gap-6'>
        <h3 className='text-xl font-bold text-primary-text uppercase'>introduction</h3>
        <p className='text-primary-text'>
        We are the authorized distributor and competence center of MBWin, registered and based in Kathmandu, Nepal serving globally. It is one of the world’s leading banking software used by various types of institutions worldwide. It is a robust software to manage an organization’s various types of client transactions in a comprehensive manner and efficiently monitor all operations. MBWin is a banking software that caters all types of deposits (Savings, Current, Fixed, Shares) and Loans which are integrated with the General ledger accounting system.
        <br />
        <br />
The MBWin system is available in both distributed individual branch system as well as On-line Centralized Multi-branch system with ATM, Multi-lingual, Multi-currency, SMS Banking, Internet banking for larger institutions. At the same time, it can be used as stand-alone single PC and group modules by small Microfinance institutions.
        </p>
    </div>
  )
}

export default page