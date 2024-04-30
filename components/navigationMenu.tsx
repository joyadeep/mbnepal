"use client"
import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu";
import { useRouter } from 'next/navigation';

type Props = {}

const NavigationMenuBar = (props: Props) => {
    
    const router= useRouter();
  return (
    <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-primary-text hover:text-secondary-text font-medium uppercase p-0 m-0">
                  about
                </NavigationMenuTrigger>
                <NavigationMenuContent className="rounded-none border-none">
                  <div className="w-60 h-fit text-left bg-secondaryBackground">

                    <div className="w-full h-1 bg-secondary-text" />

                    <div className="py-2 px-5 cursor-pointer text-white font-semibold hover:bg-white hover:text-primary-text w-full" onClick={()=>{router.push("/introduction")}}>
                      <NavigationMenuLink className="">
                        introduction
                      </NavigationMenuLink>
                    </div>
                    <div className="py-2 px-5 cursor-pointer text-white font-semibold hover:bg-white hover:text-primary-text w-full" onClick={()=>{router.push("#")}}>
                      <NavigationMenuLink className="">
                        our team
                      </NavigationMenuLink>
                    </div>
                    
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

  )
}

export default NavigationMenuBar