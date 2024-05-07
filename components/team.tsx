
import React from 'react'

type Props = {
    title:string;
    team:{
        name:string;
        designation:string;
    }[]
}



const Team = ({title,team}: Props) => {
  return (
    <div className='text-primary-text'>
        <h2 className='text-xl font-semibold uppercase'>{title}</h2>
        <div className='mt-3 grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    team.map((team,index)=>(
                        <div key={index} className='capitalize'>
                    <h4 className=' font-medium'>{team.name}</h4>
                    <h5 className='text-sm'>{team.designation}</h5>
                </div>
                    ))
                }
                
                
        </div>
    </div>
  )
}

export default Team