'use client';

import { Button } from '@/components/ui/button';
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Loader2Icon } from 'lucide-react';
import { db } from '@/utils/db';
import { UserSubscription } from '@/utils/Schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { UserSubscriptionContext } from '@/app/(context)/TotalUsageSubscription';

const Page = () => {
  const [loading, setLoading] = useState(false);
  const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);
  const { user } = useUser();

  const onPayment = async () => {
    setLoading(true);
    try {
      const response = await axios.post('/api/create-subscription', {});
      console.log(response.data);
      onPaymentComplete(response.data.id);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const onPaymentComplete = (subId: string) => {
    const options = {
      key: process.env.NEXT_PUBLIC_KEY_ID,
      subscription_id: subId,
      name: 'Priyanshu',
      description: 'Monthly subscription',
      handler: async (resp: any) => {
        console.log(resp);
        if (resp?.razorpay_payment_id) {
          await subscription(resp.razorpay_payment_id);
        }
        setLoading(false);
      },
    };
    // @ts-ignore
    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  const subscription = async (paymentId: string) => {
    try {
      const result = await db.insert(UserSubscription)
        .values({
          email: user?.primaryEmailAddress?.emailAddress ?? '',
          userName: user?.fullName ?? '',
          active: true,
          paymentId,
          joindate: moment().format('YYYY-MM-DD'),
        });
      console.log(result);
      if (result) {
        window.location.reload();
      }
    } catch (error) {
      console.error('Subscription error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#1E1E1E]">
      <script src='https://checkout.razorpay.com/v1/checkout.js'></script>
      <div className="bg-[#D4D0CD] p-10 shadow-2xl rounded-lg w-1/2 h-3/4 flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-800">Premium Subscription</h1>
        <p className="text-lg mb-8 text-center text-gray-600">
          Unlock all features and stay ahead with our monthly premium subscription.
          Experience the best we have to offer!
        </p>
        <h2 className="text-4xl font-extrabold text-[#9D4700] mb-4">Price: ₹100</h2>
        <Button className="bg-[#9D4700] hover:bg-green-600 text-white py-3 px-8 rounded-full text-lg font-bold shadow-lg" disabled={loading} onClick={onPayment}>
          {loading && <Loader2Icon className='animate-spin mr-2' />}
          {userSubscription ? 'Active Plan' : 'Subscribe Now'}
        </Button>
        <div className="absolute bottom-5 text-gray-500 text-sm">
          Cancel anytime. 100% money-back guarantee.
        </div>
      </div>
    </div>
  );
};

export default Page;
