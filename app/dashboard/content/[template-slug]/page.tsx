'use client'
import React, { useContext, useState } from 'react'
import FormSection from '../{components}/FormSection'
import OutputSection from '../{components}/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Template from '@/app/(data)/Template'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModel'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/Schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { TotalUsageContext } from '@/app/(context)/TotalusageContext'
import UsageTrack from '../../_components/UsageTrack'
import { useRouter } from 'next/navigation';
import { UserSubscriptionContext } from '@/app/(context)/TotalUsageSubscription'
import { UpdateCreditUsage } from '@/app/(context)/UpdateCreditUsage'


interface PROPS {
  params: {
    'template-slug': string,
  }
}

const CreateNewContent = (props: PROPS) => {
 
  const SelectedTemplate: TEMPLATE | undefined = Template?.find((item) => item.slug == props.params['template-slug'])
  const { user } = useUser()
  const [loading, setLoading] = useState(false)
  const [aiOutput, setAiOutput] = useState<string>('')
  const {totalUsage,setTotalUsage}=useContext(TotalUsageContext)
  const {userSubscription,setUserSubscription}=useContext(UserSubscriptionContext)
  const{updateCreditUsage,setCreditUsage}=useContext(UpdateCreditUsage)
  const router=useRouter()

  const GeneratedAiContent = async (FormData: any) => {
    
    if(totalUsage>=10000&&!userSubscription){
     router.push('/dashboard/billing')
      return
    }
    setLoading(true)
    const SelectedPrompt = SelectedTemplate?.aiPromt
    const FormValues = JSON.stringify(FormData) + ", " + SelectedPrompt

    const result = await chatSession.sendMessage(FormValues)

    const aiResponse = await result?.response.text()
    setAiOutput(aiResponse)
    await SaveInDb(JSON.stringify(FormData), SelectedTemplate?.slug, aiResponse)
    setLoading(false)
   
    setCreditUsage(Date.now())
  }

  const SaveInDb = async (formData: string, slug: string | undefined, aiResponse: string) => {
    if (slug && user?.primaryEmailAddress?.emailAddress) {
      const result=await db.insert(AIOutput).values({
        formData: formData,
        templateSlug: slug,
        aiResponse: aiResponse,
        createdBy: user.primaryEmailAddress.emailAddress,
        createdAt: moment().format('DD/MM/YYYY')
      })
      console.log(result)
    }
  }

  return (
    <div className='p-10'>
      <Link href={'/dashboard'}>
        <Button><ArrowLeft />Back</Button>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
        <FormSection loading={loading} userFormInput={(v: any) => GeneratedAiContent(v)} SelectedTemplate={SelectedTemplate} />
        <div className='col-span-2'>
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  )
}

export default CreateNewContent
