import Link from 'next/link'
import React from 'react'

const blog = () => {
    //get all data from blogdata directory
    //iterate throught them and display them
  return (
    <div className='grid place-content-center '>
     <div className="w-1/2 m-auto" >
        <h1 className="font-bold text-3xl pt-8 pb-4 text-center">Latest Blogs</h1>
        <div className="blog-section grid grid-cols-2  gap-4 py-5">
          <div className="blog">
            <h2 className="font-bold text-xl"> <Link href={'/blogpost/how-to-learn-javascript'} > How to learn javascript ? </Link></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum tenetur possimus dolore eos quo atque eum. Vero, enim. Impedit.</p>
          </div>
          <div className="blog">
            <h2 className="font-bold text-xl">How to learn javascript ?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum tenetur possimus dolore eos quo atque eum. Vero, enim. Impedit.</p>
          </div>
          <div className="blog">
            <h2 className="font-bold text-xl">How to learn javascript ?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum tenetur possimus dolore eos quo atque eum. Vero, enim. Impedit.</p>
          </div>
          <div className="blog">
            <h2 className="font-bold text-xl">How to learn javascript ?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum tenetur possimus dolore eos quo atque eum. Vero, enim. Impedit.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default blog
