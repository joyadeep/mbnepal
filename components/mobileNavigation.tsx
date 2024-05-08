"use client"
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { MdOutlineMenu } from 'react-icons/md'
import { useRouter } from 'next/navigation'

type Props = {}

const MobileNavigation = (props: Props) => {
    const route = useRouter();
    const handleClick = () => {
        // router path as prop
        // close sheed after click
    }
  return (
    <Sheet>
            <SheetTrigger asChild>
            <MdOutlineMenu size={32} className="text-secondary-text md:hidden"/>
            </SheetTrigger>
            <SheetContent className="pt-20 px-0">
            <ul className="">
                  <li onClick={() => route.push("/")} className="pl-3 py-2 text-primary-text  hover:text-secondary-text font-medium uppercase ">
                      home
                  </li>
                  <li onClick={() => route.push("/our-story")} className="pl-3 py-2 text-primary-text  hover:text-secondary-text font-medium uppercase ">
                      our story
                  </li>
                  <li className="pl-3 py-2 text-primary-text  hover:text-secondary-text font-medium uppercase ">
                      accordian
                  </li>
                  <li onClick={() => route.push("/#product")} className="pl-3 py-2 text-primary-text  hover:text-secondary-text font-medium uppercase ">
                      product
                  </li>
                  <li onClick={() => route.push("/career")} className="pl-3 py-2 text-primary-text  hover:text-secondary-text font-medium uppercase ">
                      career
                  </li>
                  <li onClick={() => route.push("/#news")} className="pl-3 py-2 text-primary-text  hover:text-secondary-text font-medium uppercase ">
                      news
                  </li>
                  <li onClick={() => route.push("/#contact")} className="pl-3 py-2 text-primary-text  hover:text-secondary-text font-medium uppercase ">
                      contact
                  </li>
            </ul>
            </SheetContent>
          </Sheet>
  )
}

export default MobileNavigation