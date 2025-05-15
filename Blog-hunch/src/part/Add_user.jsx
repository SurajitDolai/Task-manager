import React, { useState } from 'react'
import axios from 'axios'
import { RxCross1 } from "react-icons/rx";

export default function Add_user({click,hid}) {

const [task,settask]=useState()
const [descripton,setdesc]=useState()
const [startTime,setStime]=useState()
const [endTime,setEtime]=useState()
    
const submit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3001/User-task',{task,descripton,startTime,endTime})
    .then(()=>{
        console.log('Data successfully Saved....')
        window.location.reload();
    })
    .catch((err)=>{
      console.log(err)
    })
}

  return (
    <div>
      
        <div className={`h-[450px] w-md border-[1px] bg-lime-50 rounded-2xl absolute top-[-60%] start-[35%] ${click?'top-[20%] transform-stroke duration-700 ':'transform-stroke duration-700'} `}>
           <div className='w-[90%] m-auto mt-4 text-2xl mb-7 flex justify-between'>
                <h1 className='font-serif'>Add New Task</h1>
                <RxCross1 onClick={hid}/>
           </div>
           <div className='w-[90%] m-auto text-2xl'>
            <label htmlFor="" >Task:</label><br />
             <input type="text" placeholder='Enter Your Task' className='w-[100%] p-2 text-[20px] mt-1 border-2 rounded-2xl' required onChange={(e)=>settask(e.target.value)}  />
           </div>
            <div className='w-[90%]  m-auto mt-4 text-2xl'>
            <label htmlFor="" >Description:</label><br />
             <input type="text" placeholder='Enter Your Task' className='w-[100%] p-2 text-[20px] mt-1  border-2 rounded-2xl' onChange={(e)=>setdesc(e.target.value)} required/>
           </div>
            <div className='w-[90%]  m-auto mt-4 text-2xl flex justify-between'>
                <div className=' ms-4'>
                    <label>Start Time</label>
                    <input type="time" name="" id="" onChange={(e)=>setStime(e.target.value)}  required />
                </div>
                <div className='text-end me-4'>
                    <label>End Time</label>
                    <input type="time" name="" id="" onChange={(e)=>setEtime(e.target.value)} required/>
                </div>
           </div>
           <div className='w-[90%] m-auto mt-4 text-2xl'>
                <button className='bg-green-600 p-3 font-bold rounded-2xl cursor-pointer' onClick={submit}>Add task</button>
           </div>
        </div>
    </div>
  )
}
