import React, { useState } from 'react'
const contact = () => {
  let[formData,setFormData]=useState({
    username:'',
    email:'',
    phone:'',
    description:''
  })
const handleSubmit=(e) => {
  e.preventDefault()
  console.log('form data',formData)
}
const handleChange =(value) => {
  setFormData({...formData,[value.currentTarget.name]:value.currentTarget.value})
}


  return (
    <div className=' '>
      <div className='w-1/2 mx-auto bg-black color-white py-4 mt-10 rounded shadow-lg' >
        <h1 className='text-center text-4xl text-pink-400 p-4 font-bold uppercase my-5'>This is contact page</h1>
        <form  onSubmit={handleSubmit}
        className=' flex-col w-[70%] flex mx-auto gap-5 text-white '>
          <input type='text' name='username' value={formData.username} onChange={(e)=>handleChange(e)} placeholder='Enter your classname' className='bg-transparent px-4 py-2 text-xl  border-b-2 border-white rounded outline-none' />
          <input type='text' name='email' value={formData.email}  onChange={(e)=>handleChange(e)} placeholder='Enter your Email' className='bg-transparent px-4 py-2 text-xl  border-b-2 border-white rounded outline-none' />
          <input type='text' name='phone' value={formData.phone}  onChange={(e)=>handleChange(e)} placeholder='phone numer' className='bg-transparent px-4 py-2 text-xl  border-b-2 border-white rounded outline-none' />
          <input type='text' name='description' value={formData.description}  onChange={(e)=>handleChange(e)} placeholder='description' className='bg-transparent px-4 py-2 text-xl  border-b-2 border-white rounded outline-none' />
          <button type='submit' className='bg-pink-400 text-white px-4 py-2 rounded text-xl '>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default contact
