'use client';

import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/Schema';
import { useUser } from '@clerk/nextjs';
import React, { useContext, useEffect, useState, useCallback } from 'react';
import { HISTORY } from '../history/page';
import { TotalUsageContext } from '@/app/(context)/TotalusageContext';
import { UserSubscriptionContext } from '@/app/(context)/TotalUsageSubscription';
import { UpdateCreditUsage } from '@/app/(context)/UpdateCreditUsage';

const UsageTrack = () => {
    const { user } = useUser();
    const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
    const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);
    const [maxWords, setMaxWords] = useState(10000);
    const { updateCreditUsage } = useContext(UpdateCreditUsage);

    const GetData = useCallback(async () => {
        try {
            const result: HISTORY[] = await db.select().from(AIOutput)
            //@ts-ignore 
                .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));
            getTotalUsage(result);
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    }, [user]);

    const IsUserSubscribe = useCallback(async () => {
        try {
            const result = await db.select().from(userSubscription)
            //@ts-ignore 
                .where(eq(userSubscription.email, user?.primaryEmailAddress?.emailAddress));
            if (result.length > 0) {
                setUserSubscription(true);
                setMaxWords(1000000);
            }
        } catch (error) {
            console.error('Failed to check user subscription:', error);
        }
    }, [user, setUserSubscription, userSubscription]);

    useEffect(() => {
        if (user) {
            GetData();
            IsUserSubscribe();
        }
    }, [user, GetData, IsUserSubscribe]);

    useEffect(() => {
        if (updateCreditUsage && user) {
            GetData();
        }
    }, [updateCreditUsage, user, GetData]);

    const getTotalUsage = (result: HISTORY[]) => {
        let total = 0;
        result.forEach(element => {
            total += Number(element.aiResponse?.length || 0);
        });
        setTotalUsage(total);
    };

    const billing = () => {
        window.location.href = '/dashboard/billing';
    };

    return (
        <div className='m-5'>
            <div className='bg-[#363F4F] text-white p-3 rounded-lg'>
                <h2 className='font-medium'>Credits</h2>
                <div className='h-2 bg-[#9981f9] rounded-full mt-3'>
                    <div className='h-2 bg-white rounded-full'
                        style={{
                            width: `${(totalUsage / maxWords) * 100}%`
                        }}>
                    </div>
                </div>
                <h2 className='text-sm my-2'>{totalUsage}/{maxWords} Credit used</h2>
                <Button onClick={billing} className='my-3 w-full text-black' variant='secondary'>
                    Upgrade
                </Button>
            </div>
        </div>
    );
};

export default UsageTrack;