import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="px-56 py-10  text-primary-text text-justify">
      <h3 className="font-bold uppercase text-xl mb-5">mbwin system</h3>
      <div className="flex gap-10 items-center">
        <div className=" w-3/4">
          The MicroBanking System for Windows (MBWin) is banking software
          designed and developed for a wide range of banks and financial
          intermediaries. Because of its multi-tier architecture, the system is
          highly scalable and can, therefore, cater to a wide range of users and
          be adapted to a variety of hardware configurations. It is modular in
          terms of applications and functionality.
          <br /> <br />
          MBWin has modules for current accounts, savings accounts, time
          deposits, share accounts, and loan accounts that interface with the
          general ledger module (GL) and the contact information module (CIF).
          This results in a robust, integrated system. The centralized CIF
          module maintains comprehensive information on corporate and individual
          customers, guarantors, and signatories, and it has additional features
          for specialized microfinance operators that deploy group
          methodologies.
        </div>
        <div className="relative w-1/4 h-60">
          <Image
            src={"/mbwin.png"}
            alt="mbwin"
            fill
            className="absolute object-contain"
          />
        </div>
      </div>

      <div className="mt-10">
        <p>
          MBWin offers a classic user-friendly menu structure as well as a set
          of speed buttons for quick access to the most common functions. The
          built-in reports will meet the basic internal and external reporting
          requirements of most financial organizations. The built-in report
          generator allows users to custom-build reports to meet user-specific
          requirements. MBWin is the successor of the widely used DOS-based
          MicroBanking System and has inherited some of the best features of the
          DOS system, notably the Configurator and Product Generator. Both
          features have been enhanced and made more user-friendly.
        </p>
        <br />
        <br />

        <ol className="list-decimal ml-5">
          <li className="font-semibold">MBWin Features</li>
        </ol>
        <p className="py-5">
          <span className="font-semibold">
            System Security and Access Control
          </span>{" "}
          In addition to the security built into the SQL Server, MBWin protects
          each record in the database with a unique hash key that prevents
          modification of the record from outside of the MBWin system. Teller
          access is enabled by the pre-authorization of tellers. Each teller is
          identified by a three-character teller number and a password of at
          least six characters. Once having access to the system, a teller’s
          access to functionalities within the system is controlled by
          user-defined roles. A teller can be assigned one or more roles. This
          design allows the system administrator complete flexibility to assign
          specific functions to specific tellers.
        </p>

        <ol className="list-decimal ml-5" start={2}>
          <li className="font-semibold">Customer Orientation</li>
        </ol>
        <p className="py-5">
          MBWin is a customer-orientated system that places the customer and
          other banks “contacts in the center of the system. The other
          applications, savings, current accounts, time deposits, loans, and
          share accounts are associated with contacts through any number of
          relationships. Any customer can be the primary owner of any number of
          accounts. But vice-versa, any account can be held by any number of
          customers and can be linked to any number of other contacts such as
          signatories or guarantors. Unique for a banking system, MBWin also
          allows the maintenance of user-defined relationships between any
          number of contacts. Individuals can be related to one another, for
          example, a spouse or relative. Individuals can be related to corporate
          customers and identified as shareholders or directors of one or more
          corporate clients. This will enable commercial banks to analyses their
          exposure to groups of individuals and their related corporations or
          conglomerates.
        </p>

        <ol className="list-decimal ml-5" start={3}>
          <li className="font-semibold">Microfinance Group Features</li>
        </ol>
        <p className="py-5">
          The customer orientation and customer relationship facilities enable
          MBWin to offer powerful features for Microfinance institutions that
          use various group methodologies. “Multi-level groups” can be set up
          with a loan officer at the top of the hierarchy, followed by, for
          example, centers, then groups and even subgroups, and finally members.
          Accounts can be owned by any of the levels in the hierarchy. This
          allows for the creation of an extremely flexible administrative,
          monitoring and tracking system. MicroBanker Nepal has developed a
          Tablet banking app that integrates with the Microfinance group feature
          and helps Loan Officer to Disburse loan, Collect Repayments, preview
          account details, and many more.
          <br />
          <br />
          For more details{" "}
          <Link href="#" className="underline underline-offset-4">
            click here
          </Link>
          <br />
          <br />
          The multi-level group hierarchy is linked with the MBWin transaction
          processor in such a way that the system can be configured to
          auto-generate batches of loan repayments and (compulsory) savings
          deposits. These can be used as so-called “collection sheets” when
          making center visits to groups of customers and, afterwards in the
          branch, for exceptional posting of large numbers of transactions in an
          extremely efficient way. Lowering of transaction costs and improved
          staff productivity, as well as the provision of a powerful monitoring
          capability, are the main benefits.
        </p>

        <ol className="list-decimal ml-5" start={4}>
          <li className="font-semibold">
            Application and Transaction Features
          </li>
        </ol>

        <p className="py-5">
          MBWin has a number of facilities to generate automatic transactions
          between the various application modules. This includes standard ones,
          such as standing orders and interest transfers from time deposits to
          other applications, and more unusual ones such as auto-recoveries from
          deposit accounts to credit loans for installments due. For
          microfinance operators with field collections, it also has facilities
          to automatically credit so-called “surplus payments” – loan repayments
          in excess of the amount required to close an account – to a deposit
          account of the same customer.
        </p>

        <ol className="list-decimal ml-5" start={5}>
          <li className="font-semibold">
            Application Modules and General Ledger
          </li>
        </ol>
        <p className="py-5">
          The five application modules (savings, current accounts, time
          deposits, loans, and share accounts) can be licensed separately so
          that you only pay for the modules that you need. The GL system is
          integrated with the other applications so that at the end of each day
          the GL accounts are updated with the application transactions for that
          day. A daily trial balance is produced, and a balance sheet and profit
          and loss statement can be generated optionally. The Product Generator
          allows most common products to be designed quickly and easily. Loan
          products may have a large variety of installment schedules ranging
          from weekly to annually, with options for penalty interest and
          charges.
        </p>

        <ol className="list-decimal ml-5" start={5}>
          <li className="font-semibold">Language Support</li>
        </ol>
        <p className="py-5">
          A translation utility is available to translate MBWin to other
          languages. Languages currently available are Arabic, Dari, English,
          French, Indonesian (2 versions – Indonesian and East Timor), Laotian,
          Latvian, Pashtu, Russian, Spanish, Tamil, and Thai.
        </p>

        <ol className="list-decimal ml-5" start={6}>
          <li className="font-semibold">Budget Module</li>
        </ol>
        <p className="py-5">
          A budget is a set of interlinked plans that quantitatively describe an
          entity’s projected future operations. A budget is used to measure
          actual operating results, for the allocation of funding, and as a plan
          for future operations.
        </p>
      </div>
    </div>
  );
};

export default page;
