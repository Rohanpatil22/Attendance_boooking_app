import {Calendar} from 'react-calendar';
import  './App.css';

import Card from './Card'
import { useEffect, useState } from 'react';
import axios from 'axios';
import AttendanceTable from './AttendanceTable';
import { ToastContainer } from 'react-toastify';



function App() {

  const [checkdate,setCheckdate]=useState();
  const[load,setload]=useState(false);
  const [check,setcheck]=useState(false);
  const [presetarr,setpresentarr]=useState([]);
  const[absentarr,setabsentarr]=useState([]);
  const[tableData,settableData]=useState();
  const date=new Date();

   const BASE_URL="http://localhost:5000"; 
  // const BASE_URL="https://attendance-booking-backend.onrender.com"; 
async function fetchdata()
{
  setpresentarr([]);
  setabsentarr([]);

  

  // await axios.get("http://localhost:5000/api/v1/getData")
 
   await axios.get(`${BASE_URL}/api/v1/getData`)
  .then((res)=>{
    
     const resData= res.data.allData;
     settableData(resData);
    console.log(resData);

    resData.map((item)=>{

      console.log(item.date);
      let curr_date=item.date;
    if(item.status==='present')
    {
      // presetarr.push(item.date);
      
      console.log(presetarr);
      setpresentarr((current)=>[...current,curr_date]);
      console.log(presetarr)
      
    }
    else if(item.status==='absent')
    {
      setabsentarr((current)=>[...current,curr_date]);
    }
  });
  
  })
  
  console.log(presetarr)
  setload(true);
 

}

useEffect(()=>{
  fetchdata();
 
},[check])


function getDate(date,e)
{
  console.log(date);
  console.log(e);
  let formdate=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
  setCheckdate(formdate);
  setcheck(true);

}

function changeCheck()
{
  setcheck(!check);
}


  return (
   <>
   { load &&
   <div className=' w-11/10 mt-20'>
       
      {/* <Calendar className="h-11/10" value={date} onChange={getDate} tileClassName={(date)=>{let temp=date.date.getFullYear()+"-"+(date.date.getMonth()+1)+"-"+date.date.getDate() ;if(presetarr.includes(temp)){return 'highlight_1'} else if(absentarr.includes(temp)){return 'highlight_2'} else{return 'highlight_3'}}}/> */}

       <Calendar className="h-11/10" value={date} onChange={getDate} tileClassName={(date)=>{let temp=date.date.getFullYear()+"-"+(date.date.getMonth()+1)+"-"+date.date.getDate();console.log(temp);console.log(absentarr);console.log(presetarr); if(presetarr.includes(temp)){return 'highlight_1'} else if(absentarr.includes(temp)){return 'highlight_2'}}}/> 
      
   </div>
}
   <div style={{position:"absolute",top:"10%",left:"40%"}}>
    {check && <Card  selDate={checkdate} checkupdate={changeCheck} baseUrl={BASE_URL}/>}
   </div>

   <div>
    { <AttendanceTable Info={tableData}/>}
   </div>
   
   
   <ToastContainer/>
   
   </>
  );
}

export default App;
