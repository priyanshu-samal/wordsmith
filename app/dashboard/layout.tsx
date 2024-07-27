'use client'
import React, { useState } from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { TotalUsageContext } from '../(context)/TotalusageContext';
import { UserSubscriptionContext } from '../(context)/TotalUsageSubscription';
import { UpdateCreditUsage } from '../(context)/UpdateCreditUsage';


function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const [totalusage,setTotalUsage]=useState<Number>(0)
    const [userSubscription,setUserSubscription]=useState<boolean>(false)
    const[updateCreditUsage,setCreditUsage]=useState<any>()
    return (
    <TotalUsageContext.Provider value={{totalusage,setTotalUsage}}>
      <UserSubscriptionContext.Provider value={{userSubscription,setUserSubscription}}>
       <UpdateCreditUsage.Provider value={{updateCreditUsage,setCreditUsage}}>
    <div className='bg-slate-100 h-screen'>
        <div className='md:w-64 hidden md:block fixed '>
            <SideNav/>
        </div>
        <div className='md:ml-64'>
             <Header/>
        {children} 
        </div>
        
    </div>
    </UpdateCreditUsage.Provider>
    </UserSubscriptionContext.Provider>
    </TotalUsageContext.Provider>
    
  )
}

export default layout