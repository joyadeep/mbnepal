import Service from "@/components/service";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <Service title="internet banking" image="/internetBanking2.png">
      <p>
        MicroBanker Nepal’s Internet Banking System allows a financial
        institution’s users to access their account via browser. The system
        allows users to preview detailed information of their multiple accounts
        and preview statement. The system is extremely secured managed with
        session logins and system lock outs.
      </p>
      <br />
      <p>Features</p>
      <br />
      <ol className="list-decimal pl-3">
        <li>Detailed Account Preview</li>
        <li>Full Account Statements</li>
        <li>Online activity tracking</li>
        <li>Auto password change requests.</li>
        <li>Incorrect password lockout.</li>
        <li>Session based logins.</li>
        <li>Customer desired themes</li>
        <li>Multiple account support.</li>
      </ol>
    </Service>
  );
};

export default page;
