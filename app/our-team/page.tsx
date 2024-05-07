import Team from '@/components/team'
import { Metadata } from 'next'
import React from 'react'

type Props = {}

export const metadata:Metadata = {
    title:"Our Team",
    description:"MANAGEMENT Yadab Lal Pradhan Executive Chairman Anjira Malakar Director Reva Rajbhandary Shrestha Director ACCOUNTS & ADMINISTRATION Sweta Shrestha Administration/Accounts Manager Ram Krishna Lamichane Senior Account Officer Bikash Pyakurel  Account Officer Samikchya Bista Receiptionist/Admin Assistant Marketing Department Dinesh Kumar Rajbhandari Marketing Manager Binaya Shrestha Assistant Marketing  Manager PROGRAMMING Bikram Gurung Chief Technology Officer Salil Ratna Bajracharya Senior Web […]"
}

const page = (props: Props) => {
  return (
    <div className='px-5 md:px-60 py-5 flex flex-col gap-10'>
        <Team 
        title='management'
        team={[
            {
                name:"yada lal pradhan",
                designation:"executive chairman"
            },
            {
                name:"anjira malakar",
                designation:"director"
            },
            {
                name:"reva rajbahandary shrestha",
                designation:"director"
            }
        ]}
        />

        <Team 
        title='programming'
        team={[
            {
                name:"bikram gurung",
                designation:"chief technology officer"
            },
            {
                name:"salil ratna bajracharya",
                designation:"senior web developer"
            },
            {
                name:"samin sakhya",
                designation:"IOS developer"
            },
            {
                name:"aabiskar khanal",
                designation:"lead engineer"
            },
            {
                name:"supriya amatya",
                designation:"backend developer"
            },
            {
                name:"joyadeep limbu",
                designation:"frontend developer"
            }
        ]}
        />

        <Team 
        title='accounts & administration'
        team={[
            {
                name:"sweta shrestha",
                designation:"administration / accounts manager"
            },
            {
                name:"ram krishna lamichane",
                designation:"senior account officer"
            },
            {
                name:"bikash pyakurel",
                designation:"account officer"
            },
            {
                name:"samikchya bista",
                designation:"receiptionist / admin assistant"
            }
        ]}
        />

        <Team
        title='marketing department'
        team={[
            {
                name:"dinesh kumar rajbhandari",
                designation:"marketing manager"
            },
            {
                name:"binaya shrestha",
                designation:"assistant marketing manager"
            }
        ]}
        />

        <Team 
        title='customer support'
        team={[
            {
                name:"ajay govinda shresta duwal",
                designation:"chief operating officer"
            },
            {
                name:"binaya pradhan shrestha",
                designation:"customer support manager"
            },
            {
                name:"pooja pradhan shrestha",
                designation:"assistant manager, customer support"
            },
            {
                name:"sabina shakya shrestha",
                designation:"assistant manager, customer support"
            },
            {
                name:"krishna bdr. thapa",
                designation:"senior customer support officer"
            },
            {
                name:"rasuj shrestha",
                designation:"senior customer support officer"
            },
            {
                name:"rojan man sthapit",
                designation:"senior customer support officer / delphi developer"
            },
            {
                name:"nihit rajbhandari",
                designation:"customer support officer"
            },
            {
                name:"prabesh shakya",
                designation:"customer support officer"
            },
            {
                name:"shailesh shrivastav",
                designation:"customer support officer"
            },
            {
                name:"ynisha karanjit",
                designation:"customer support officer"
            },
            {
                name:"pratima dharel",
                designation:"jr. customer support officer"
            },
            {
                name:"rubina rajopadhyaya",
                designation:"jr. customer support officer"
            },
            {
                name:"kanchan dangol",
                designation:"jr. customer support officer"
            }
        ]}
        />

    </div>
  )
}

export default page