import Link from 'next/link'
import React, { useEffect, useState } from 'react'
// import path from 'path'
// import fs from 'fs'

const Blog = (props) => {
  //get all data from blogdata directory
  //iterate throught them and display them
  // console.log(props.allBlogs)
  let [Blogs, setBlogs] = useState(props.allBlogs)
  function createMarkup(c) {
    return {__html:c}
  }
  return (
    <div className='grid place-content-center '>
      <div className="w-1/2 m-auto" >
        <h1 className="font-bold text-3xl pt-8 pb-4 text-center">Latest Blogs</h1>
        {
          Blogs.length > 0 ? (
            <div className="blog-section flex flex-col overflow-auto gap-4 py-5">
              {
                Blogs.map((item, index) => {
                  return (
                    <div className="blog" key={index}>
                      <h2 className="font-bold text-xl"> <Link href={`/blogpost/${item.slug}`} > {item.title} ? </Link></h2>
                      <p className='w-full h-44 overflow-hidden' dangerouslySetInnerHTML={createMarkup(item.content)}>
                        
                      </p>
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
// export async function getStaticProps(context) {
//   const filePath = path.join(process.cwd(), 'blogdata')
//   let allBlogs = []
//   try {
//     const files = await fs.promises.readdir(filePath)
//     for (let file of files) {
//       let newPath = path.join(filePath, file)
//       const obj = await fs.promises.readFile(newPath, "utf-8")
//       // console.log(obj)
//       allBlogs.push(JSON.parse(obj))
//     }
//   }
//   catch (error) {
//     console.log(error)
//   }
//   return {
//     props: { allBlogs }
//   }
// }
export async function getServerSideProps(context) {
  let data= await fetch('http://localhost:3000/api/blogs')
  let allBlogs=await data.json()
  return {
    props: { allBlogs }
  }
}

export default Blog
