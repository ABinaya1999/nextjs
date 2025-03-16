import React from 'react'
import Link from 'next/link'
import { notFound,redirect } from 'next/navigation'

type Props = {
    params:Promise<{section:string}>;
    searchParams:Promise<{lang?:"english" | "hindi"}>
}

const page = async ({params, searchParams}:Props) => {
    const {section}= await params
    const {lang}= await searchParams
    if (parseInt(section)>100){
        // notFound()
        redirect("/")
    }
  return (
    <>
    <div>Article in {lang}---------------- {section}</div>
    <Link href={`/articles/${section}/?lang=english`}>english</Link>
    <Link href={`/articles/${section}/?lang=asdfasd`}>hindi</Link>
    </>
  )
}

export default page