import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/action'

const Header = () => {
  const [title , setTitle] = useState("")
  const [description , setDescription] = useState("")
  const dispatch = useDispatch()
  const handleSubmit = () => {
    let obj = {
      title:title || "Title",
      description:description || "This is the description",
      status:"Pending"
    }
    dispatch(addTodo(obj))
    setTitle("")
    setDescription("")
  }
  return (
    <div className=''>
        <h1 className='text-2xl font-bold mt-4'>Todo With Status</h1>
        <input type="text" value={title} placeholder='Enter Todo Title Here' onChange={(e)=>setTitle(e.target.value)} className='mt-8 hover:bg-gray-400 border border-black focus:outline-none rounded-lg px-2 focus:border-blue-500 py-1 w-1/4'/>
        <br />
        <input type="text" value={description} placeholder='Enter Todo Description Here' onChange={(e)=>setDescription(e.target.value)} className='mt-8 hover:bg-gray-400 border border-black focus:outline-none rounded-lg px-2 focus:border-blue-500 py-1 w-1/4'/>
        <br />
        <button onClick={handleSubmit} className='border rounded-lg px-4 p-1 mt-8 bg-blue-500 text-white w-1/4 hover:bg-blue-900'>Add Your Todo</button>
    </div>
  )
}

export default Header