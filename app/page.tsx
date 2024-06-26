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
        columns="md:grid-cols-5 grid-cols-1"
        moreLink="/other-modules"
        features={[
          {
            image:"/financeGroup.png",
            iconTitle:"MicroFinance Group Feature",
            link:"/microfinance-group-feature"
          },
          {
            image:"/islamicBanking.png",
            iconTitle:"Islamic Banking",
            link:"/islamic-banking"
          },
          {
            image:"/mis.png",
            iconTitle:"MIS Reporting",
            link:"/mis-reporting"
          }, {
            image:"/chequeMgmt.png",
            iconTitle:"Cheque Management",
            link:"/cheque-management"
          }, 
          {
            image:"/atmInterface.png",
            iconTitle:"ATM Interface",
            link:"/atm-interface"
          }
        ]}
      />
      
      <Features title={<>products</>}
        description="We intend to provide all the banking and accounting-related solutions to our clients. Hence, we have developed a wide variety of products, so that our clients can get all the solutions at one place."
        backgroundColor="bg-secondaryBackground"
        columns="md:grid-cols-5 grid-cols-1"
        moreLink="/other-products"
        linkId="products"
        features={[
          {
            image:"/tabletBanking.png",
            iconTitle:"Tablet Banking (Market Collection)",
            link:"/tablet-banking-market-collection"
          },
          {
            image:"/smsBanking.png",
            iconTitle:"SMS Banking",
            link:"/sms-banking-system"
          },
          {
            image:"/smartBanking.png",
            iconTitle:"Smart Banking",
            link:"/smart-banking-system"
          }, {
            image:"/internetBanking.png",
            iconTitle:"Internet Banking",
            link:"/internet-banking"
          }, 
          {
            image:"/assetMgmt.png",
            iconTitle:"Assets & Inventory Management",
            link:"/assets-inventory-management"
          }
        ]}
      />
      <Features title={<>other <span className="text-primary-text">solutions</span></>}
        description="Excluding banking, MicroBanker Nepal offers wide variety of other solutions."
        backgroundColor="bg-white"
        columns="md:grid-cols-4 grid-cols-1"
        features={[
          {
            image:"/cloudHosting.png",
            iconTitle:"Cloud Hosting",
            link:"/cloud-hosting"
          },
          {
            image:"/websiteDevelopment.png",
            iconTitle:"Website Development",
            link:"/website-development"
          },
          {
            image:"/appDevelopment.png",
            iconTitle:"Application Development",
            link:"/application-development"
          }, {
            image:"/mobileDevelopment.png",
            iconTitle:"Mobile App Development",
            link:"/mobile-app-development"
          }, 
        ]}
      />
      <Success/>
      <News/>
      <Contact/>
    </main>
  );
}
 