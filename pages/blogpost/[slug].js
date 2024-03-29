import { useRouter } from 'next/router'
import React from 'react'

const slug = () => {
    const router=useRouter()
    const {slug}=router.query
    console.log(slug)
  return (
    <div>
      <h1>title name:{slug}</h1>
    </div>
  )
}

export default slug
