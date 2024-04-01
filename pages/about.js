import React from 'react'
import styles from '../components/about.module.css'
const about = () => {
  return (
    <div className={`${styles.backgroundImage} text-white grid place-content-center`}>
      <div className="">
        <div className='grid gap-4 border-2 border-white rounded p-4'>
          <h1 className='text-center font-bold text-5xl'>About me</h1>
          <h3 className='text-center font-bold text-3xl'>Name:Achuth Kumar.Telugu</h3>
          <h3 className='text-center font-bold text-3xl'>Profession:Full Stack Developer.</h3>

        </div>
      </div>
    </div>
  )
}

export default about
