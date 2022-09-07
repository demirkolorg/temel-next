import Link from 'next/link'
import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function NotFound() {

    const router=useRouter()
    useEffect(()=>{
        setTimeout(()=>{
            // router.push('/')
            router.back()
        },1000)
    },[])


  return (


    <div>
      <h1 className="title">Not Found</h1>
      <Link href="/">Anasayfa</Link>
    </div>
  )
}
