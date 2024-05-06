import { Metadata } from "next";
import Image from "next/image";
import React from "react";

type Props = {};
export const metadata: Metadata = {
  title: "Our Story",
  openGraph:{
    images:"team2.jpg"
  },
  description:"Our Story Almost three decades ago, MBNepal started with a small staff and two fold visions. The first was to provide banking software services in Nepal for rural populations, that even big commercial banks did not have access to in those days. The second was to cultivate technical expertise and build capacity in Nepal, who […]"
};
const page = (props: Props) => {
  return (
    <div className="px-5 md:px-24 pt-2 pb-10 flex flex-col gap-6">
      <h3 className="text-xl font-bold text-primary-text">Our Story</h3>
      <div className="relative w-auto h-[300px] md:h-[500px] text-center">
        <Image
          src="/team.jpg"
          alt="microbanker team"
          fill
          className="object-cover"
        />
      </div>
      <p className="text-primary-text  mt-3">
        Almost three decades ago, MBNepal started with a small staff and two
        fold visions. The first was to provide banking software services in
        Nepal for rural populations, that even big commercial banks did not have
        access to in those days. The second was to cultivate technical expertise
        and build capacity in Nepal, who could serve as consultants to other
        developing countries that needed similar services. MicroBanker software
        system was developed by MB Nepal. Our office in Nepal became the
        official partner and competence center for this software, providing
        services, support and expertise for its implementation around the world.
        <br />
        <br />
        Many developing countries that needed affordable financial software and
        systems acquired the MicroBanking (MBWin) system. Over the years, we
        have also worked with commercial banks to digitized manual records, and
        many organizations sought our help to resolve Y2K programming
        deficiencies. We have also helped many nations that have faced political
        turmoil and instability to start building financial systems, helping
        small MFIs grow to national commercial banks or nation-wide
        organizations.
        <br />
        <br />
        Today, our outreach extends from the remote Karnali region of Nepal to
        remote areas in African countries like the Democratic Republic of Congo,
        supporting organizations who provide financial services to people living
        in rural communities, villages, towns and cities in many developing
        nations. MBWin has also been made multi-lingual to meet the needs of our
        highly diverse clientele. We now support 10 different languages
        including Arabic, Chinese, Thai, Laotian, Russian, Spanish, and
        Indonesian.
        <br />
        <br />
        We are proud to support grassroots organizations in many countries
        including Nepal, and to bridge the digital divide for those who have
        been historically excluded from the benefits of technology and
        commercial banking platforms. In this respect, our team continues to
        develop the latest, state of the art technologies to provide services
        like ATMs, Internet banking, Tablet banking, QR payment, SMS Banking,
        Smart Banking App etc. and to uphold the highest standards for our
        products.
        <br />
        <br />
        Our team continues to provide services in 22 nations in more than 500
        institutions. We extend our gratitude to all those who have helped us to
        reach this milestone and to stand where we are today.
      </p>
    </div>
  );
};

export default page;
