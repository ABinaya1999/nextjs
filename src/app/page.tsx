import React from 'react'
import Link from 'next/link'


const page = () => {
  return (
    <>
    <div>page</div>
    <Link href="/login">Login</Link>
    <Link href="/register">Register</Link><br/>
    <Link href="/articles/cricket/?lang=hindi">Article in Hindi</Link><br/>
    <Link href="/articles/cricket/?lang=english">Article in english</Link>
    </>
  )
}

export default page