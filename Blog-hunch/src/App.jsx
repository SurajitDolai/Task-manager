import React, { useEffect, useState } from "react"
import Add_user from "./part/Add_user"
import axios from "axios"
import { BsThreeDotsVertical } from "react-icons/bs";


function App() {
  const [data, setdata] = useState()
  const [show, sethide] = useState(null)
  const [add, setshow] = useState(false)
  const [complete,setcomplete]=useState()


  useEffect(() => {
    axios.get("http://localhost:3001/user-details")
      .then((res) => {
        setdata(res.data)
        console.log(res.data)
      })
  }, [])
  
  const dlt = (id) => {
    axios.delete("http://localhost:3001/delete" + id)
      .then((res) => {
        window.location.reload()
      })
      .catch((err) => console.log(err));
  };

  const status = (id) => {
    sethide(prevId => (prevId === id ? null : id)); 
  };

const sts = (e, id) => {
  const value = e.target.value;
  axios.put("http://localhost:3001/update-status/" + id, { complete: value })
    .then(() => {
      setdata(prevData =>
        prevData.map(item =>
          item._id === id ? { ...item, complete: value } : item
        )
      );
      console.log("Updated to:", value);
    })
    .catch(err => console.log(err));
};

  return (
    <div>
      <div className="bg-[#102E50] ">
        <p className="text-2xl p-3 font-extrabold text-white text-end me-4" onClick={() => setshow(true)}>Add Task</p>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-6">
        {data && data.map((data) => {
          return (
            <div className="bg-amber-100 m-2 p-4" key={data._id}>
              <div className="flex justify-between  my-4">
                <div className="text-3xl font-serif not-first:">{data.task} </div>
                <BsThreeDotsVertical onClick={(e) => status(data._id)} className="cursor-pointer" />
              </div>
              {
                show === data._id && (
                  <div className="absolute">
                    <div className="relative start-55 bottom-7 bg-white z-10 w-[200px] p-2">
                      <ul className="cursor-pointer text-[15px]">
                        <li onClick={(e) => dlt(data._id)}><span  className="bg-red-800 rounded-3xl py-0.5 px-2 text-white">Delete</span></li>
                        <li className="my-2"><span className="bg-green-700 rounded-3xl py-0.5 px-2 text-white ">Status:</span> 
                          <select name="" id="" className="outline-0" onChange={(e) => sts(e, data._id)} value={data.complete}>
                              <option value="0" >incomplate</option>
                              <option value="1" >complete</option>
                          </select>
                          
                        </li>
                      </ul>
                    </div>
                  </div>
                )
              }
              <div className="text-2xl"> {data.descripton} </div>
              <div className="flex justify-between p-2">
                <div>Start: {data.startTime}</div>
                <div>End: {data.endTime}</div>
              </div>
            </div>
          )
        })}
      </div>
      <Add_user click={add} hid={()=>setshow(false)} />
    </div>
  )
}

export default App
