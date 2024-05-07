import Service from "@/components/service";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
    <Service title="assets & inventory management" image="/islamicBanking.png">
      <p>
        The Asset management tracks the equipment and supplies that a company
        uses to run the business. In other words, inventory management and asset
        management both track a company’s property. But inventory management
        focuses on the flow of items a company sells or parts it uses to make
        goods.
      </p>
      <br />
      
    </Service>
    <div className="px-5 text-sm text-primary-text md:px-60 pb-10 ">
    <p>
    The Asset & Inventory Management System (MBAMS) features are currently
    facilitated in the system:
  </p>
  <br />
  <ol className="list-decimal pl-3">
    <li>
      Secure access by authorized personnel only with encrypted password
    </li>
    <li>
      Break-down and grouping of assets based on different categories &
      levels which are fully flexible due to user-defined parameters
    </li>
    <li>Complete purchase details of assets</li>
    <li>Tracking of assets transfer/issue between various department</li>
    <li>Tracking of assets movement between Locations (Branches)</li>
    <li>Tracking of assets based on responsible Persons</li>
    <li>Records of sale/auction detail of assets</li>
    <li>Records of assets receive from various donor/institutions</li>
    <li>Records of asset dispose for damaged assets</li>
    <li>Bar code label generation and printing</li>
    <li>Store/View picture of Assets</li>
    <li>
      Depreciation on Fixed Assets using various methods such as fixed line,
      declining/diminishing balance, Sum of year’s digit etc.
    </li>
    <li>User-defined depreciation limit</li>
    <li>Various report for fixed Assets, depreciation</li>
    <li>General Inventory management including stock report</li>
  </ol>
    </div>
    </>
  );
};

export default page;
