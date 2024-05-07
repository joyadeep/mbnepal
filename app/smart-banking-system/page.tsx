import Service from "@/components/service";
import Image from "next/image";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Service title="smart banking system" image="/smartBanking2.png">
        <p>
          MicroBanker Nepal’s Smart Banking System is a cloud-based mobile
          banking setup designed to enable mobility for financial institutions.
          This system integrates or is a part of MBWin Core Banking System,
          which means, being in MicroBanker Eco System there is a huge potential
          for further future enhancement. The Smart Banking System includes all
          the latest functions that assist in a better banking experience for
          end customers by providing features such as account inquiry, P2P
          payments, interbank and intrabank transfers, statements, wallet
          service, bill payments, and many more.
        </p>
        <br />
        <p>Some of the features are listed below:</p>
        <br />
        <ol className="list-decimal pl-3">
          <li>WIFI, GPRS, and SMS Enabled: Works on multiple channels</li>
          <li>
            Detailed Account Enquiry: All the details of the account are
            previewed.
          </li>
          <li>
            Account statement: Account statements are previewed with no limits
            on the date.
          </li>
          <li>Cheque Book Request: Online Cheque book request.</li>
          <li>
            Internal fund transfer: Easy fund transfer within the organization.
          </li>
          <li>
            Inter-Bank fund transfer: Transfer amount to more than 50 banks.
          </li>
          <li>Load balance to wallet: Load balance to Khalti wallet.</li>
          <li>
            Online Payments: Payments such as Top-up, TV, Internet, Utilities,
            etc.
          </li>
          <li>
            Android and IOS Platform: Works on both of the popular platforms
          </li>
          <li>And much more: Pin change, customized layout scheme, etc.</li>
        </ol>
      </Service>
      <div className="px-60  py-16">
        <div className="relative aspect-video">

        <Image src="/SmartBankFeatures.png" alt="smart banking system" fill className="absolute object-contain" />
        </div>
      </div>
    </>
  );
};

export default page;
