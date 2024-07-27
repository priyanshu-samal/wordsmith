'use client'
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/Schema'
import { useUser } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import React, { useContext, useEffect, useState } from 'react'
import { HISTORY } from '../history/page'
import { TotalUsageContext } from '@/app/(context)/TotalusageContext'
import { UserSubscriptionContext } from '@/app/(context)/TotalUsageSubscription'
import { UpdateCreditUsage } from '@/app/(context)/UpdateCreditUsage'

const UsageTrack = () => {
    
    const {user}=useUser()
    const {totalUsage,setTotalUsage}=useContext(TotalUsageContext)
    const {userSubscription,setUserSubscription}=useContext(UserSubscriptionContext)
    const [maxWords,setMaxWords]=useState(10000)
    const{updateCreditUsage,setCreditUsage}=useContext(UpdateCreditUsage)
    
  useEffect(() => {
    if (user) {
      GetData()
      IsUserSubscribe()
    }
  }, [user]) 

  useEffect(() => {
    if (user) {
      GetData()
    }
  }, [updateCreditUsage, user]) 


   const GetData=async()=>{
    {/* @ts-ignore */}
    const result:HISTORY[]=await db.select().from(AIOutput)
    
    .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress))
    getTotalUsage(result)
   }

    const IsUserSubscribe=async()=>{
        const result=await db.select().from(userSubscription)
        .where(eq(userSubscription.email,user?.primaryEmailAddress?.emailAddress))
        if(result){
            setUserSubscription(true)
            setMaxWords(1000000)
        }
    }
    


    const getTotalUsage=(result:HISTORY[])=>{
        let total:number=0
        result.forEach(element =>{
            total=total+Number(element.aiResponse?.length)

        })

        setTotalUsage(total)

    }

    const billing=()=>{
        window.location.href='/dashboard/billing'
    }
    
  return (
    <div className='m-5'>
        <div className='bg-[#363F4F] text-white p-3 rounded-lg'>
            <h2 className='font-medium'>Creadits</h2>
            <div className='h-2 bg-[#9981f9] rounded-full mt-3'>
               <div className='h-2 bg-white rounded-full '
               style={{
             width:(totalUsage/maxWords)*100+"%"
                } }>

               </div>
            </div>
            <h2 className='text-sm my-2'>{totalUsage}/{maxWords} Credit used"</h2>
            <Button onClick={billing} className='my-3 w-full text-black' variant={'secondary'}>Upgrade</Button>
        </div>
    </div>
  )
}

export default UsageTrack