import React, { useState } from 'react'
import Head from 'next/head';
import axios from 'axios';
const Contact = () => {
  let [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    description: ''
  })
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let response = await axios.post('http://localhost:3000/api/postContact', formData)
      console.log('api call success', response.data)
    } catch (error) {
      console.log(error)
    }
    console.log('form data', formData)
    setFormData({
      username: '',
      email: '',
      phone: '',
      description: ''
    })
  }
  const handleChange = (value) => {
    setFormData({ ...formData, [value.currentTarget.name]: value.currentTarget.value })
  }


  return (
    <div className=' h-[90vh] flex flex-col'>
      <Head>
        <title>Hunting Coder-Contact</title>
      </Head>
      <div className=' flex flex-col flex-grow justify-center'>

      <div className='w-1/2 lg:w-2/3 mx-auto bg-black color-white py-4  rounded shadow-lg ' >
        <h1 className='text-center text-4xl lg:text-2xl text-pink-400 p-4 font-bold uppercase my-5'>This is contact page</h1>
        <form onSubmit={handleSubmit}
          className=' flex-col w-[70%] lg:w-[90%] flex mx-auto gap-5 text-white '>
          <input type='text' name='username' value={formData.username} onChange={(e) => handleChange(e)} placeholder='Enter your classname' className='bg-transparent px-4 py-2 text-xl lg:text-base   border-b-2 border-white rounded outline-none' />
          <input type='text' name='email' value={formData.email} onChange={(e) => handleChange(e)} placeholder='Enter your Email' className='bg-transparent px-4 py-2 text-xl lg:text-base   border-b-2 border-white rounded outline-none' />
          <input type='text' name='phone' value={formData.phone} onChange={(e) => handleChange(e)} placeholder='phone numer' className='bg-transparent px-4 py-2 text-xl lg:text-base   border-b-2 border-white rounded outline-none' />
          <input type='text' name='description' value={formData.description} onChange={(e) => handleChange(e)} placeholder='description' className='bg-transparent px-4 py-2 text-xl lg:text-base   border-b-2 border-white rounded outline-none' />
          <button type='submit' className='bg-pink-400 text-white px-4 py-2 rounded text-xl lg:text-base mb-10 '>Submit</button>
        </form>
      </div>
       </div>
    </div>
  )
}

export default Contact
