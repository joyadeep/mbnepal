import Service from '@/components/service'
import Image from 'next/image'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <>
    <Service
    title='sms banking system'
    image='/smsBanking2.png'
    >
        <p>
        MicroBanker Nepal Pvt. Ltd. were one of the first banking technologies provider in Nepal and most of other nations to introduce SMS Banking System. The SMS Banking is a service that allows a customer to interact the information of their accounts using their Mobile Phones with SMS (Short Messaging Service) facility. In other word, the customer can access their bank account very conveniently but in a secured mode to perform various operations. This service provides the real-time account information in a true “anywhere, anytime” transaction capabilities from the mobile phones very conveniently to the registered clients. This means your customer can access their account information, perform some banking transactions 24 hours, from home country as well as from any country where mobile phone roaming services is available.
        </p>
    </Service>
    <br />
    <div className='text-primary-text text-sm px-60 text-justify'>
    <p>
        The system is designed to access the data of the MicroBanking system to provide the required information. It works using Short Messaging Service (SMS) technology. With SMS, the client can perform a wide range of query-based transactions from a mobile phone, without making a call. The information is retrieved from the MB system and sends back to the mobile phone via the SMS Centre, all in a matter of a few seconds.
        </p><br />
        <p>
        The SMS Banking system we are proposing you runs under windows operating systems. The system has been fully tested and is now being used in Nepal for a very long time. The system is very efficient, as it does not require additional computers or staffs and runs automatically from your existing server. We are confident that you will benefit from this system in the competitive market. The service can be provided to the new and the existing client for those who register their account and mobile phones in the system. This kind of system can generate profit for your organization as you can charge your client for their registrations to use this system as well as per request basis.
        </p><br />

        <h3 className='font-bold'>Following are functions available in Micro Banker’s SMS Banking System.</h3><br />
        <ol className='list-decimal pl-5'>
            <li>Transaction alert.</li>
            <li>Broad cast message to selected person or a group.</li>
            <li>Auto birthday and anniversary message to client</li>
            <li>Auto loan due and future installment alert</li>
            <li>Auto Loan and Time deposit maturity alert.</li>
            <li>Alert to loan guarantor</li>
            <li>Auto Customized alert</li>
            <li>Auto registration upon account opening and auto deactivation upon account closing.</li>
            <li>PIN Based Security</li>
            <li>Account enquiry for all kinds of products</li>
            <li>Mini Statement with last 5 transactions</li>
            <li>Loan Due and Required to close amount enquiry</li>
            <li>New Cheque Book Request</li>
            <li>Multi language support.</li>
            <li>Customized message formats</li>

        </ol>
        <br />
        <p>To deliver and receive SMS from and to the client, we have developed different types of SMS Gateway technologies.</p>
<br />
        <div className='flex gap-5 text-justify'>
            <div className='flex-1'>
                <ol className='list-decimal pl-3' start={1}>
                    <li className='font-bold'>MicroBanker SMS Gateway</li>
                </ol>
                <p>In Nepal, all of our client uses SMS Gateway developed by MicroBanker Nepal Pvt. Ltd. Clients will be delivered SMS by the Identity MBNAlert. In this method, client’s server will request SMS push request to MicroBanker’s cloud server and MicroBanker’s SMS Gateway system will deliver to SMS to the particular client.</p>
            </div>
            <div className='flex-1 relative w-full h-96'>
                <Image src="/sms-banking3.jpg" alt='sms banking'  fill className='absolute object-contain'/>
            </div>
        </div>

        <div className='flex gap-5 text-justify'>
            <div className='flex-1 w-full h-36 relative'>
                <Image src="/modem.jpg" alt='modem' fill className='absolute object-contain' />
            </div>
            <div className='flex-[3]'>
            <ol className='list-decimal pl-3' start={2}>
                    <li className='font-bold'>Data Modem</li>
                </ol>
                <br />
                <p>
                For places where internet connectivity is not available or there is no SMS Gateway, MicroBanker Nepal has developed an application that uses data modem with a Normal SIM Card to send and receive SMS to and from client. A quite large no. of our international clients is still using this technology because of lack of internet connectivity, absence of local SMS provider or other technology being too expensive. 
                </p>
            </div>
        </div>
<br />
        <ol className='list-decimal pl-3' start={3}>
            <li className='font-bold'>Customized Unegration with SMS Provider</li>
        </ol>
        <br />
        <p className='pb-36'>Upon request of client, we can easily integrate our SMS Banking system with third party SMS provider.</p>

    </div>
    </>
  )
}

export default page