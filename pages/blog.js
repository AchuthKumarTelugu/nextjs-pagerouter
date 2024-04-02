import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const blog = () => {
    //get all data from blogdata directory
    //iterate throught them and display them
    let[blogs,setBlogs]= useState([])
    useEffect(()=>{
  console.log('useEffect is running')
     fetch('http://localhost:3000/api/blogs').then((data)=>{
     return  data.json()
     }).then((response)=>{
      console.log('data',response)
      setBlogs(response)
     })
    },[])
  return (
    <div className='grid place-content-center '>
     <div className="w-1/2 m-auto" >
        <h1 className="font-bold text-3xl pt-8 pb-4 text-center">Latest Blogs</h1>
        {
          blogs.length > 0 ? (
            <div className="blog-section flex flex-col overflow-auto gap-4 py-5">
              {
                blogs.map((item,index)=>{
                  return (
                    <div className="blog" key={index}>
                       <h2 className="font-bold text-xl"> <Link href={`/blogpost/${item.title}`} > {item.title} ? </Link></h2>
            <p>{item.content}</p>
                    </div>
                  )
                })
              }
              </div>
          ) : null
        }
        
      </div>
    </div>
  )
}

export default blog
