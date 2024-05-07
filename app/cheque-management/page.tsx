import Service from "@/components/service";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <Service title="cheque management module" image="/chequeMgmt.png">
      <p>
        Cheque Management Module is software which is designed and developed to
        facilitate the organization for writing the cheque. It tracks each and
        every leaf of a cheque issued by the Bank in the name of the Company.
        This will help to maintain the records of cheques, signatories of
        account holders, cheque inventories and keeps tracking of the cheque
        status.This module is designed for auto batch posting that are directly
        reflected in the assigned GL accounts.
      </p>
      <br />
      <p>Following are the major functionality of this module:</p>
      <br />
      <ul className="list-disc pl-5">
        <li>Cheque payment entry, approval & print information in cheque.</li>
        <li>Cheque Stock Maintenance.</li>
        <li>
          Cheque payment configuration by adding, editing and deleting the
          account details, Payee details etc.
        </li>
        <li>Generating voucher</li>
        <li>Various related reports</li>
      </ul>
    </Service>
  );
};

export default page;
