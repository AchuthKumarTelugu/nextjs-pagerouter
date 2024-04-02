import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const blog = (props) => {
  //get all data from blogdata directory
  //iterate throught them and display them
  console.log(props.allBlogs)
  let [blogs, setBlogs] = useState(props.allBlogs)
  
  return (
    <div className='grid place-content-center '>
      <div className="w-1/2 m-auto" >
        <h1 className="font-bold text-3xl pt-8 pb-4 text-center">Latest Blogs</h1>
        {
          blogs.length > 0 ? (
            <div className="blog-section flex flex-col overflow-auto gap-4 py-5">
              {
                blogs.map((item, index) => {
                  return (
                    <div className="blog" key={index}>
                      <h2 className="font-bold text-xl"> <Link href={`/blogpost/${item.slug}`} > {item.title} ? </Link></h2>
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
export async function getServerSideProps(context) {
  let data= await fetch('http://localhost:3000/api/blogs')
  let allBlogs=await data.json()
  return {
    props: { allBlogs }
  }
}

export default blog
