import React, { useContext, useEffect, useState } from 'react'
import './component.css'
import appContext from '../context/Context';
export default function Used() {
  const contextVal = useContext(appContext);
  const state = contextVal.state;
  const gen = state.gen;
  const [time,setTime] = useState(" 0 M : 0 S");


  useEffect(()=>{
    if(state.timeSpent === 0){
      setTime(" 0 M : 0 S");
    }

    let s = state.timeSpent;
    const m = parseInt(s/60);
    const sec = parseInt(s%60);
    setTime(` ${m} M : ${sec} S`);
  },[state.timeSpent])

  return (
    <div className='used-container'>
        <span>Genration : {gen} </span>
        <span style={{marginLeft:'5px'}}> | Time utilized :{time}</span>
    </div>
  )
}
