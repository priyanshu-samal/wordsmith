import React, { useEffect, useReducer, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface Props{
  aiOutput:string
}

const OutputSection = ({aiOutput}:Props) => {
  const editorReference:any=useRef()


  useEffect(()=>{
    const editorInstace=editorReference.current.getInstance()
    editorInstace.setMarkdown(aiOutput)
  },[aiOutput]
  )

  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className='flex justify-between items-center p-5'>
      <h2 className='font-medium text-lg '>Your Result</h2>
      <Button onClick={()=>navigator.clipboard.writeText(aiOutput)} className='flex gap-2'><Copy className='w-4 h-4'/>Copy</Button>
      
      </div>
       <Editor
       ref={editorReference}
    initialValue="Output Result"
    initialEditType="wysiwyg"
    height="600px"
    useCommandShortcut={true}
    onChange={()=>console.log(editorReference.current.getInstance().getMarkdown())}
  />
    </div>
  )
}

export default OutputSection