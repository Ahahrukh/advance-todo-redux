import React from 'react'
import { useDispatch } from 'react-redux'
import { editStatus } from '../redux/action'

const Card = ({details}) => {
    const dispatch = useDispatch()
    const handleEditStatus = (value) => {
        console.log(value , details.title)
        dispatch(editStatus({status:value , title:details.title}))
    }
  return (
    <div className='w-4/5 border h-44 mx-auto mt-4 rounded-lg bg-gray-600'>
        <h1 className='text-xl font-bold border border-white w-64 mx-auto rounded-lg text-white py-1 mt-1'>{details.title}</h1>
        <div className='w-5/6 border mx-auto mt-2 h-20 text-white'>{details.description}</div>
        <div className='w-5/6 mx-auto mt-2 h-8 flex justify-between'>
            <h1 className='text-left text-white rounded-md border px-2'>{details.status}</h1>
            <select name="" onChange={(e)=>handleEditStatus(e.target.value)} className='border focus:outline-none h-8 focus:border-blue-400 rounded-md'>
                <option value="">Edit Status</option>
                <option value="Pending">Pending</option>
                <option value="Progress">Progress</option>
                <option value="Completed">Completed</option>
            </select>
        </div>
    </div>
  )
}

export default Card