import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
//find the document corresponding the slug
//iterate through them and display it
const slug = () => {
  const router = useRouter()
  let { slug } = router.query
  let [blog,setBlog]=useState({})
  useEffect(() => {
    if(slug) {
      console.log('entered useEffect')
    fetch(`http://localhost:3000/api/getBlogData?slug=${slug}`).then(value=>value.json()).then(response=>{
      setBlog(response)
      console.log('finished setting data')
    })
  }
  }, [slug])
  return (
    <div>
      
       { blog && Object.keys(blog)  > 0 ?( <div className='w-1/2 mx-auto text-center mt-5 grid gap-3'><h1 className='font-bold text-3xl'>{blog.title}</h1>
        <hr className='border-black' />
        <p className='text-xl'>{blog.content}</p> </div>):null}
      
    </div>
  )
}

export default slug
