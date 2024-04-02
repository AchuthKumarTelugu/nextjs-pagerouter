import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
//find the document corresponding the slug
//iterate through them and display it
const slug = (props) => {
  // const router = useRouter()
  // let { slug } = router.query
  let [blog, setBlog] = useState(props.data)
  
  useEffect(() => {
    console.log('blog', blog)
    console.log('object.keys', Object.keys(blog))
  }, [blog])
  return (
    <div>
      {Object.keys(blog).length > 0 ? (<div className='w-1/2 mx-auto  mt-5 grid gap-5'>
        <h1 className='font-bold text-center text-3xl capitalize'>{blog.title}</h1>
        <hr className='border-black' />
        <p className='text-lg'>{blog.content}</p> </div>) : null}
    </div>
  )
}
export async function getServerSideProps(context) {
  console.log('context',context.query)
  // const router = useRouter()
  let { slug } = context.query
  const response=await fetch(`http://localhost:3000/api/getBlogData?slug=${slug}`)
  const data=await response.json()
  return {
    props:{data}
  }
}
export default slug
