import React from "react";
import {
  MdOutlineLocalPhone,
  MdOutlineEmail,
  MdFacebook,
} from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaSkype } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import NavigationMenuBar from "./navigationMenu";


type Props = {};

const links = [
  {
    id: 1,
    icon: <MdFacebook size={22} />,
    href: "https://www.facebook.com/microbankernepal/",
  },
  {
    id: 2,
    icon: <BsLinkedin size={20} />,
    href: "https://www.linkedin.com/company/mbnepal/mycompany/",
  },
  {
    id: 2,
    icon: <FaSkype size={20} />,
    href: "#",
  },
];

const Header = (props: Props) => {

  return (
    <header className="fixed top-0 h-28 bg-white w-full shadow-sm border-b border-b-slate-200 pb-3 z-20 ">
      <div className="flex justify-between items-center bg-secondaryBackground text-white  px-24 py-1">
        <div className="flex items-center gap-2 text-xs font-bold">
          <MdOutlineLocalPhone size={18} />
          <span>01-4958647 | 01-4961957 | 01-4958312 | 01-4958319</span>
          <MdOutlineEmail size={18} className="ml-4" />
          <span> info@mbnepal.com</span>
        </div>
        <div className="flex gap-5">
          {links.map((link) => (
            <Link href={link.href} key={link.id}>
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
      <nav className=" flex justify-between items-center px-24 py-3 ">
       <div className="relative w-48 h-14">
       <Image
          src={"/logo.png"}
          alt={"logo"}
          fill
          className="absolute object-contain  "
          priority
        />
       </div>
        <div className="flex items-center gap-6 text-sm uppercase">
          <Link
            href={"/"}
            className="text-primary-text  hover:text-secondary-text font-medium"
          >
            home
          </Link>
          <Link
            href={"/our-story"}
            className=" text-primary-text  hover:text-secondary-text font-medium"
          >
            our story
          </Link>

          <NavigationMenuBar/>
          
          <Link
            href={"/#products"}
            className="text-primary-text  hover:text-secondary-text font-medium"
          >
            products
          </Link>
          <Link
            href={"/career"}
            className="text-primary-text  hover:text-secondary-text font-medium"
          >
            career
          </Link>
          <Link
            href={"/#news"}
            className="text-primary-text  hover:text-secondary-text font-medium"
          >
            news
          </Link>
          <Link
            href={"/#contact"}
            className="text-primary-text  hover:text-secondary-text font-medium"
          >
            contact
          </Link>
          <Link href={"#"} className="text-primary-text">
            <BiSearch size={20} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
