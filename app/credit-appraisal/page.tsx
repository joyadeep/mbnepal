import Service from "@/components/service";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <Service title="credit appraisal system" image="/creditAppraisalSystem.png">
      <p>
        Credit Appraisal System allows the institution to collect loan
        applicant’s data and process those data to check the eligibility for the
        loan. Various check lists and rating system are maintained to check the
        eligibility. And upon, being eligible loan can be auto opened in the
        MBWin System.
      </p>
      <br />
      <h3>Following are some features of Credit Appraisal System.</h3>
      <br />
      <ol className="list-decimal pl-3">
        <li>
          Loan Officer can collect data from remote location as its one part is
          based on android mobile application. This data will be later uploaded
          to MBWin system to be appraised.
        </li>
        <li>
          Loan officer can also enter data directly to MBWin system&apos;s
          Credit Appraisal module.
        </li>
        <li>
          Various types of ratings, checklists are used to rate the data of loan
          applicant.
        </li>
        <li>Supports multiple cycle of loan application</li>
      </ol>
    </Service>
  );
};

export default page;
