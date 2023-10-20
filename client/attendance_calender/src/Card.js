import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



function Card(props) {

  const[info,setInfo]=useState({bookingDate:props.selDate,bookingStatus:""})
 
  function getStatus(val)
  {
    console.log(val);
    info.bookingStatus=val;
    setInfo({...info});
  }

  async function markData()
  {
      console.log(info);

      if(info.bookingStatus!="")
      {
        await axios.post("http://localhost:5000/api/v1/addata",info)
        .then((res)=>{
          console.log(res);

          
          if(res.data.msg==="new data added" || res.data.msg==="Data updated successfully")
          {
            console.log("Ok");
           
            toast.success(res.data.msg);
          }
        });

        props.checkupdate();
      }
  }
  return (
    <>
    <div style={{width:"500px",height:"350px",}} className="bg-slate-400 rounded-2xl border-none">
      <div className='text-right p-2'><button className='bg-red-600 w-10 p-2 rounded-xl text-white font-bold' onClick={props.checkupdate}>X</button></div>
        <div className='text-2xl text-center font-bold pt-10 '>Booking Date: {props.selDate}</div>
        <div className='text-2xl text-center mt-10'>
            <label htmlFor='present'>Present</label>
            <input className='w-4 h-4' type="radio" id="present" name="status" value="present" onChange={(e)=>getStatus(e.target.value)}/>

            <label style={{marginLeft:"30px"}} htmlFor='absent' >Absent</label>
            <input className='w-4 h-4 m-2' type="radio" id="absent" name="status" value="absent"  onChange={(e)=>getStatus(e.target.value)}/>

        </div>
        <div className='text-center mt-10'>
            <button className='w-28 bg-teal-800 p-2 text-white text-lg font-bold rounded-xl' onClick={markData}  >Submit</button>
           
        </div>
        
    </div>
    
  
    </>
  )
}

export default Card