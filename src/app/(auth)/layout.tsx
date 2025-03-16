"use client"

import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { useState } from "react";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const navLinks = [
  {name:"Register", href:"/register"},
  {name:"Login", href:"/login"},
]
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [input, setInput] = useState("")
  return (
        <>
        <h1>ICT Lab</h1>
        <h1 className="text-2xl">{input}</h1>
        <input className="bg-amber-300" value={input} onChange={(e)=> setInput(e.target.value)}/><br/>
        {
          navLinks.map((link)=>{
            return (
              <Link href={link.href} key={link.name}>{link.name}</Link>
            )
          })
        }
        {children}
        </>


  );
}