import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

const Section = () => {
  const [pending , setPending] = useState([])
  const [progress , setProgress] = useState([])
  const [ completed , setCompleted] = useState([])
  const todos = useSelector((elem)=>elem.todos)
  useEffect(()=>{
    setPending(todos.filter((elem)=>elem.status==="Pending"))
    setProgress(todos.filter((elem)=>elem.status==="Progress"))
    setCompleted(todos.filter((elem)=>elem.status==="Completed"))
  }, [todos])
  return (
    <div className='w-4/5 mx-auto mt-4 flex gap-10'>
        <div className="w-1/3 h-screen bg-red-400 rounded-lg">
          <h1 className='text-xl font-bold border border-white w-64 mx-auto rounded-lg text-white py-1 mt-1'>Pending</h1>
          {pending.map((elem)=>(
            <Card details={elem}/>
          ))}
        </div>
        <div className="w-1/3 h-screen bg-yellow-400 rounded-lg">
          <h1 className='text-xl font-bold border border-white w-64 mx-auto rounded-lg text-white py-1 mt-1'>In Progress</h1>
          {progress.map((elem)=>(
            <Card details={elem}/>
          ))}
        </div>
        <div className="w-1/3 h-screen bg-green-400 rounded-lg">
          <h1 className='text-xl font-bold border border-white w-64 mx-auto rounded-lg text-white py-1 mt-1'>Completed</h1>
          {completed.map((elem)=>(
            <Card details={elem}/>
          ))}
        </div>
    </div>
  )
}

export default Section