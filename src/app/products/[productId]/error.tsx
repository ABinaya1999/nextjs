"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { startTransition } from 'react'

const error = ({error, reset}:{
    error:Error;
    reset:()=>void;
}) => {
    const router = useRouter()
    const reload = ()=>{
        startTransition(()=>{
            router.refresh()
            reset()
        })
    }
  return (
    <>
    <div>{error.message}</div>
    <button className="bg-red-500" onClick={reload}>Try Again</button>
    </>
  )
}

export default error