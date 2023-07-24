import React from 'react'
import './subComponent.css'
import {GrClose} from 'react-icons/gr';
const ruleImg = require('../Images/Rules.PNG');

export default function RulesPopup({setPopup}) {
  return (
    <div style={
        {
            width:'100vw' , height:'100vh', backgroundColor:'rgba(0,0,0,0.5)'
        }
    }>
        <div style={
            {
                width:'900px' , height:'575px', backgroundColor:'white', boxShadow:'0px 3px 5px 7px rgba(255,255,255,0.4)',
                position:'absolute', left:'50%', top:'50%', transform:'translate(-50%,-50%)'
            }
        }>
            <GrClose className='close-popup' onClick={()=>{setPopup(false)}}/>
            <img src={ruleImg} alt="Rules" style={
                {
                    position:'absolute', left:'50%', top:'50%', transform:'translate(-50%,-50%)', border:'1px solid black', borderRadius:'15px'
                }
            }/>
        </div>

    </div>
  )
}
