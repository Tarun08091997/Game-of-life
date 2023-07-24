import React, { useContext, useState} from 'react'
import appContext from '../context/Context'
import './subComponent.css'

export default function Select() {
   const contextValue = useContext(appContext);
   const theme = useContext(appContext).state.theme;
   const [enter,setEnter] = useState(false);
   const [value,setValue] = useState(10);

    const STYLE_ENTER={
        color: enter ? theme.bg : theme.fg,
        backgroundColor: enter ? theme.fg : theme.bg,
        transition: 'background-color 1s,color 0.5s'
    }

   const handleFPS =(event)=>{
       const fps = event.target.value;
       setValue(fps);
       contextValue.setState({...contextValue.state,FPS:fps});
   }

  return (
    <select style={{textAlign:'center',...STYLE_ENTER}} onChange={handleFPS} className='select'
    onMouseEnter={()=>setEnter(true)} onMouseLeave={()=>setEnter(false)} value={value}>
          <option value={5} >5fps</option>
          <option value={10}>10fps</option>
          <option value={20}>20fps</option>
          <option value={30}>30fps</option>
          <option value={50}>50fps</option>
      </select>
  )
}
