import React from 'react'
import styles from '../components/about.module.css'
const about = () => {
  return (
    <div className={`  grid place-content-center`}>
      <div className="">
        <h1 className=' font-bold text-6xl text-center mb-5 lg:text-4xl sm:mt-5'>About us</h1>
        <div className='grid gap-4 border-2 border-white rounded p-4 w-1/2 lg:w-2/3 sm:w-[90%] mx-auto overflow-auto'>

          <div className="">
            <h2 className='font-bold text-3xl lg:text-xl'>Introduction</h2>
            <p className='text-lg lg:text-base'>Lorem ipsum dolor sit amet consecte Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consequuntur pariatur voluptates ullam recusandae quae voluptate ducimus maiores officiis iste! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, laboriosam. tur, adipisicing elit. Consequuntur maxime facere id voluptatibus voluptatem repudiandae cum quis laboriosam perspiciatis qui unde, amet beatae maiores consequatur quam saepe ipsam animi accusamus!</p>
          </div>
          <div className="">
            <h2 className='font-bold text-3xl lg:text-xl'>Services Offered</h2>
            <p className='text-lg lg:text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur maxime facere id voluptatibus voluptatem repudiandae cum quis laboriosam perspiciatis qui unde, amet beatae maiores consequatur quam saepe ipsam animi accusamus!</p>
          </div>
          <div className="">
            <h2 className='font-bold text-3xl lg:text-xl'>Contact us</h2>
            <p className='text-lg lg:text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur maxime facere id voluptatibus voluptatem repudiandae cum quis laboriosam perspiciatis qui unde, amet beatae maiores consequatur quam saepe ipsam animi accusamus!</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default about
