'use client'

import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import UsageTrack from './UsageTrack'

const SideNav = () => {
  const router = useRouter()
  const path = usePathname()

  const MenuList = [
    {
      name: 'Home',
      icon: Home,
      path: '/dashboard'
    },
    {
      name: 'History',
      icon: FileClock,
      path: '/dashboard/history'
    },
    {
      name: 'Billing',
      icon: WalletCards,
      path: '/dashboard/billing'
    },
    {
      name: 'Setting',
      icon: Settings,
      path: '/dashboard/setting'
    },
  ]

  useEffect(() => {
    console.log(path)
  }, [path])

  return (
    <div className='h-screen relative p-5 shadow-sm border bg-white'>
      <div className='flex justify-center'>
        <img width={120} height={100} src="/logo.svg" alt="" />
      </div>
      <hr className='my-6 border' />
      <div className='mt-3 '>
        {MenuList.map((menu, index) => (
          <div
            key={index}
            onClick={() => router.push(menu.path)}
            className={`flex gap-2 mb-2 p-3 hover:bg-[#363F4F] hover:text-white rounded-lg cursor-pointer ${path === menu.path && 'bg-[#363F4F] text-white'}`}
          >
            <menu.icon className='h-6 w-6' />
            <h2>{menu.name}</h2>
          </div>
        ))}
      </div>
      <div className='absolute bottom-10 left-0 w-full'>
        <UsageTrack />
      </div>
    </div>
  )
}

export default SideNav
