import Service from "@/components/service";
import { Metadata } from "next";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title: "MIS Reporting",
  description:
    "MIS REPORTING The MBWin MIS System ( MBMIS ) is designed to consolidate and merge branch level MBWin databases at the head office of an institution. The system imports branch databases regularly (e.g. monthly or weekly) and then generates consolidated reports as well as branch-wise reports.  It also includes a number of charts.  This allows […]",
};

const page = (props: Props) => {
  return (
    <Service title="mis reporting" image="/mis.png">
      <p>
        The MBWin MIS System ( MBMIS ) is designed to consolidate and merge
        branch level MBWin databases at the head office of an institution.
      </p>
      <br />
      <p>
        The system imports branch databases regularly (e.g. monthly or weekly)
        and then generates consolidated reports as well as branch-wise reports.
        It also includes a number of charts. This allows easy monitoring,
        comparison and analysis of branch operations. Financial reports include
        consolidated as well as branch wise trial balances, balance sheets and
        income statements.
      </p>
      <br />
      <p>
        Like MBWin itself, the MIS system has its own built-in reporting tool
        with which trained users can design and generate their own reports.
      </p>
      <br />
      <ul className="list-disc pl-5">
        <li>
          The reporting part is designed with the upper management in mind and
          consequently is easy and intuitive to use.
        </li>
        <li>Consolidation and merging of branch databases.</li>
        <li>
          User-selected tables can be excluded from the merge exercise, in order
          to speed-up the merge and reduce data storage requirements.
        </li>
        <li>
          CGAP indicators – computed on the basis of user-defined parameters.
        </li>
        <li>
          Consolidated trial balances – these allow you to drill down to the
          level of individual branches.
        </li>
        <li>
          Multiple user defined balance sheets, profit and loss statements (a
          maximum of 99 each).
        </li>
        <li>Various monitoring reports and graphs.</li>
        <li>
          User defined loan provision definitions allows you to monitor the
          provision requirements for the whole institution and verify the actual
          provisions per branch.
        </li>
        <li>
          All reports, including trial balances, can be exported in many
          formats, including Excel spreadsheet
        </li>
      </ul>
    </Service>
  );
};

export default page;
