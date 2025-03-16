"use client"
import React from 'react'
import { useRouter } from 'next/navigation'


const Register = () => {
  const router = useRouter();
  const handleRegister = ()=>{
    console.log("Registration successfull!!!!!!!!!!!")
    router.push("/");
  }
  return (
    <>
    <h1>Register here......</h1>
    <button onClick={handleRegister} className='bg-amber-900'>Register</button>
    </>
  
  )
}

export default Register