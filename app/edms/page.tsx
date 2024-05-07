import Service from "@/components/service";
import Image from "next/image";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Service
        title="electronic document management system (edms)"
        image="/electronicDocumentSystem.png"
      >
        <p>
          An Electronic Documents Management System (EDMS) is a product
          developed by MBNepal to contribute on tracking, managing and storing
          various documents of clients/members of MBWin system user
          institutions. The system is very useful in terms of reducing paper
          works, protection of valuable documents and also to save time in
          searching of physical documents.
        </p>
        <br />
        <h3 className="font-bold">Key highlights of EDMS</h3>
        <ul className="list-disc pl-3">
          <li>
            Separate database is maintained to store the images so that no issue
            of database size increment of MicroBanking System and can be
            retrieved easily & conveniently.
          </li>
          <li>
            Multiple images, pages can be stored for a single purpose. For
            example, front page, back page of citizenship, multiple pages of
            loan Tamasuk etc.
          </li>
          <li>
            Application wise image capture & view options such as separate view
            options for member related documents, loan related documents,
            FD/savings related documents.
          </li>
          <li>
            Can be easily sent to printer for copies. No need to look for
            photocopy options.
          </li>
          <li>
            Documents can easily be transferred via email or using any other
            communication methods that can protect from losing the valuable
            documents during physical transportation and it may also save time &
            transportation/courier cost.
          </li>
          <li>
            As documents are handy to view, unnecessary printing of documents
            can be reduced which will help reducing harmful emissions and
            protect environment.
          </li>
          <li>Helps on creating paperless working scenario.</li>
        </ul>
      </Service>
      <div className="relative w-1/2 mx-auto aspect-square "> 
        <Image src="/edmsb.png" alt="edms" fill className="absolute object-contain" />
      </div>
    </>
  );
};

export default page;
