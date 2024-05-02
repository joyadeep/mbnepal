import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
export const metadata: Metadata = {
  openGraph: {
    images:"/team.jpg"
  },
  title:{
    default:"Home - MicroBanker Nepal Pvt. Ltd.",
    template:"%s - MicroBanker Nepal Pvt. Ltd."
  },
  description: "all Banking solution Veteran of Banking systems For more than 27 years, MicroBanker Nepal has been supporting banks, finances and co-operatives in Nepal and around the world with excellent core-banking system and innovative banking supplementary products. Along with our outstanding customer support and services MicroBanker can be best solution to your banking requirements. Contact us […]",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header/>
        <div className="mt-28 min-h-screen">
        {children}
        </div>
        <Footer/>
        </body>
    </html>
  );
}
