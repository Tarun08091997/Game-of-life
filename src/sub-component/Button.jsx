import React, { useContext, useEffect, useState } from 'react'
import appContext from '../context/Context'
import './subComponent.css'

export default function Button({click, value ,st}) {
  const theme = useContext(appContext).state.theme;
  const [enter,setEnter] = useState(false);

  const STYLE_ENTER={
    color: enter ? theme.bg : theme.fg,
    backgroundColor: enter ? theme.fg : theme.bg,
    transition: 'background-color 1s,color 0.5s'

  }

  return (
    <button onClick={click} onMouseEnter={()=>setEnter(true)} onMouseLeave={()=>setEnter(false)} 
    style={STYLE_ENTER} className='btn'>
        {value}
    </button>
  )
}
