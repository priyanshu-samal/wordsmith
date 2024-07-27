import template from '@/app/(data)/Template'
import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'
import Template from '@/app/(data)/Template'

export interface TEMPLATE{
    name:string,
    icon:string,
    desc:string,
    category:string,
    slug:string,
    aiPromt:string,
    form?:FORM[]

}

export interface FORM{
    label:string,
    field:string,
    name:string,
    required?:boolean
}

const TemplateListSection = ({userSearchInput}:any) => {


  const [templateList,setTemplateList]=useState(Template)

  useEffect(()=>{
    if(userSearchInput){
        const filteredList=Template.filter((item:TEMPLATE)=>item.name.toLowerCase().includes(userSearchInput.toLowerCase()))
        setTemplateList(filteredList)
    }else{
        setTemplateList(Template)
    }
  },[userSearchInput])



  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10 '>
        {templateList.map((item:TEMPLATE,index:number)=>(
            
                 <TemplateCard {...item}/>
            
        ))}
    </div>
  )
}

export default TemplateListSection