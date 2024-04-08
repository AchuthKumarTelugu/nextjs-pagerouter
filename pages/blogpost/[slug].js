import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
// import path from 'path'
// import fs from 'fs'
//find the document corresponding the slug
//iterate through them and display it
const Slug = (props) => {
  // const router = useRouter()
  // let { slug } = router.query
  let [Blog, setBlog] = useState({})
  useEffect(()=>{
    console.log('props.data',props.data)
    setBlog(props.data)
  },[props.data])

  useEffect(() => {
    console.log('Blog', Blog)
    console.log('object.keys', Object.keys(Blog))
  }, [Blog])
  function createMarkup(value) {
    return {__html:value}
  }
  return (
    <div>
      {Object.keys(Blog).length > 0 ? (<div className='w-1/2 mx-auto  mt-5 grid gap-5'>
        <h1 className='font-bold text-center text-3xl capitalize'>{Blog.title}</h1>
        <hr className='border-black' />
        <p className='text-lg' dangerouslySetInnerHTML={createMarkup(Blog.content)}>
          
          </p> </div>) : null}
    </div>
  )
}
// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { slug : "how-to-learn-html-css" } },
//       { params: { slug : "how-to-learn-javascript" } },
//       { params: { slug : "how-to-learn-python" } },
//     ],
//      fallback: false//allow paths only returned by getStaticPaths()
//   }
// }
// export async function getStaticProps(context) {
//   // console.log('context', context)
//   try {
//     let { slug } = context.params
//     const filePath = path.join(process.cwd(), `blogdata/${slug}.json`)
//     // console.log(`blogdata/${slug}.json`)
//     let data = await fs.promises.readFile(filePath, 'utf-8')
//     return {
//       props: { data:JSON.parse(data) }
//     }
//   } catch (error) {
    
//   }
 
// }
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
export default Slug
