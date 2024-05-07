import Service from '@/components/service'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <Service
    title='cloud hosting'
    image='/cloudHosting.png'
    >
        <p>
        A communications network. The word “cloud” often refers to the Internet, and more precisely to some data center full of servers that is connected to the internet. Cloud hosting is an alternative to hosting websites on single servers (either dedicated or shared servers) and can be considered as an extension of the concept of clustered hosting where websites are hosted on multiple servers.
        </p>
    </Service>
  )
}

export default page