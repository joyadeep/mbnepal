import HeroSection from "./(home)/heroSection";
import Story from "./(home)/story";
import Mbwin from "./(home)/mbwin";
import Features from "@/components/features";
import Contact from "./(home)/contact";
import Success from "./(home)/success";
import News from "./(home)/news";



export default function Home() {
  return (
    <main>
      <HeroSection/>
      <Story/>
      <Mbwin/>
      <Features title={<>Features and <span className="text-primary-text">modules</span></>}
        description="MBWin Core Banking System includes wide variety of features and modules that eases the banking and accounting need of the organization."
        backgroundColor="bg-white"
        columns="grid-cols-5"
        moreLink="/other-modules"
        features={[
          {
            image:"/financeGroup.png",
            iconTitle:"MicroFinance Group Feature"
          },
          {
            image:"/islamicBanking.png",
            iconTitle:"Islamic Banking"
          },
          {
            image:"/mis.png",
            iconTitle:"MIS Reporting"
          }, {
            image:"/chequeMgmt.png",
            iconTitle:"Cheque Management"
          }, 
          {
            image:"/atmInterface.png",
            iconTitle:"ATM Interface"
          }
        ]}
      />
      
      <Features title={<>products</>}
        description="We intend to provide all the banking and accounting-related solutions to our clients. Hence, we have developed a wide variety of products, so that our clients can get all the solutions at one place."
        backgroundColor="bg-secondaryBackground"
        columns="grid-cols-5"
        moreLink="/other-products"
        linkId="products"
        features={[
          {
            image:"/tabletBanking.png",
            iconTitle:"Tablet Banking (Market Collection)"
          },
          {
            image:"/smsBanking.png",
            iconTitle:"SMS Banking"
          },
          {
            image:"/smartBanking.png",
            iconTitle:"Smart Banking"
          }, {
            image:"/internetBanking.png",
            iconTitle:"Internet Banking"
          }, 
          {
            image:"/assetMgmt.png",
            iconTitle:"Assets & Inventory Management"
          }
        ]}
      />
      <Features title={<>other <span className="text-primary-text">solutions</span></>}
        description="Excluding banking, MicroBanker Nepal offers wide variety of other solutions."
        backgroundColor="bg-white"
        columns="grid-cols-4"
        features={[
          {
            image:"/cloudHosting.png",
            iconTitle:"Cloud Hosting"
          },
          {
            image:"/websiteDevelopment.png",
            iconTitle:"Website Development"
          },
          {
            image:"/appDevelopment.png",
            iconTitle:"Application Development"
          }, {
            image:"/mobileDevelopment.png",
            iconTitle:"Mobile App Development"
          }, 
        ]}
      />
      <Success/>
      <News/>
      <Contact/>
    </main>
  );
}
 