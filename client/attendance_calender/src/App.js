import {Calendar} from 'react-calendar';
import  './App.css';

import Card from './Card'
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  const [checkdate,setCheckdate]=useState();
  const[load,setload]=useState(false);
  const [check,setcheck]=useState(false);
  const date=new Date();

  let presetarr=[];
  let absentarr=[];
  let test=["2023-10-20","2023-10-13"];
  let test_2=["2023-10-24","2023-10-7"];

  let data="";
  
async function fetchdata()
{
  presetarr=[];
  absentarr=[];
  data="";
  await axios.get("http://localhost:5000/api/v1/getData")
  .then((res)=>{
    console.log(res);
    data=res.data.allData;
    res.data.allData.map((item)=>{

      if(item.status==='present')
      {
        presetarr.push(item.date);
        console.log(item.date)
      }
      else if(item.status==='absent')
      {
        absentarr.push(item.date);
      }
    })
  })

  console.log(presetarr)
  setload(true);

}

useEffect(()=>{
  fetchdata();
 
},[setcheck])



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
   <div className='m-10 w-11/10'>
       
      {/* <Calendar className="h-11/10" value={date} onChange={getDate} tileClassName={(date)=>{let temp=date.date.getFullYear()+"-"+(date.date.getMonth()+1)+"-"+date.date.getDate() ;if(presetarr.includes(temp)){return 'highlight_1'} else if(absentarr.includes(temp)){return 'highlight_2'} else{return 'highlight_3'}}}/> */}

       <Calendar className="h-11/10" value={date} onChange={getDate} tileClassName={(date)=>{let temp=date.date.getFullYear()+"-"+(date.date.getMonth()+1)+"-"+date.date.getDate(); console.log(test);console.log(data); if(presetarr.includes(temp)){return 'highlight_1'} else if(test_2.includes(temp)){return 'highlight_2'} else{return 'highlight_3'}}}/> 
      
   </div>
}
   <div style={{position:"absolute",top:"10%",left:"40%"}}>
    {check && <Card  selDate={checkdate} checkupdate={changeCheck}/>}
   </div>
   
   
   
   </>
  );
}

export default App;
