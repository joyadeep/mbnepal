import Service from "@/components/service";
import Image from "next/image";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <Service
      title="human resource management system (hrms)"
      image="/hrSystem.png"
    >
      <p>
        Human Resource Management System (HRMS) software developed by MBNepal
        enables users to efficiently manage, automate and streamline HR-related
        tasks such as employee Information, attendance, leave/late records and
        payroll.
      </p>

      <h3 className="font-bold">Key Highlights of HRMS</h3>

      <ul className="list-disc pl-3">
        <li>
          Data Management: Employee centralized database which will be able to
          manage employee’s data in one place and create a centralized employee
          database that can be easily accessible by the authorized users to
          retrieve the information any time for the various purposes.
        </li>
        <li>Manage and e-filling of employee documents.</li>
        <li>Generate employment related records.</li>
        <li>Manage employment history.</li>
        <li>Manage organizational and positional hierarchy.</li>
        <li>
          Attendance and Time Management: Manage attendance in real time.
          Capture attendance in real time and can easily assign shift. Auto
          calculation of late/worked hours and overtime.
        </li>
        <li>Manage attendance shifts and holidays.</li>
        <li>
          Leave Management and Record: Can be easily configure the leave
          policies and record employee’s leave. Also calculates leave balance
          and carry forward, balance leave for next year.
        </li>
        <li>
          Payroll Management: Automates the pay process by calculating various
          deductions and taxes
        </li>
      </ul>
      <div className="relative aspect-square ">
            <Image src="/HRMS-Software.png" alt="HRMS" fill className="object-contain absolute" />
      </div>
    </Service>
  );
};

export default page;
