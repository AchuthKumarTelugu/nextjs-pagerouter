import { useRouter } from 'next/router'
import React from 'react'
//find the document corresponding the slug
//iterate through them and display it
const slug = () => {
    const router=useRouter()
    const {slug}=router.query
    console.log(slug)
  return (
    <div>
      <div className='w-1/2 mx-auto text-center mt-5 grid gap-3'>
      <h1 className='font-bold text-3xl'>Title name:{slug}</h1>
      <hr className='border-black'/>
      <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam enim expedita maxime quae quas exercitationem ratione molestias temporibus, nam reprehenderit?</p>
      </div>
    </div>
  )
}

export default slug
