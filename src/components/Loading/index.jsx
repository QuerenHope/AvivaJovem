import './style.css'
import { useEffect, useState } from 'react';
import Progressbar from './useLoading';

const Loading = () => {

    const[progress,setProgress]= useState(0);

    useEffect(()=>{
     setInterval( ()=>{ 
      setProgress( (val)=>val+1);
     },100); 
    },[]);
    
    if(progress == 100){
        window.location = "/home";
    }

  return (
    <div className="loading">
        <h1>Loading...</h1>  
        <Progressbar value={progress} />
    </div>
  )
}

export default Loading
