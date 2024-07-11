import React from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
        <Image src={assets.logo_light} alt='' width={120}/>
        <p className='text-sm text-white'>All Right Reserved by Gagan Suman</p>
        <div className='flex flex-wrap'>
            <Image src={assets.facebook_icon} alt="" width={40}/>
            <Image src={assets.twitter_icon} alt="" width={40}/>
            <Image src={assets.googleplus_icon} alt="" width={40}/>
        </div>
    </div>
  )
}

export default Footer