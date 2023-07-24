import React, { useContext, useState } from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {BsFillBrightnessHighFill} from 'react-icons/bs'
import {BiSolidUserCircle} from 'react-icons/bi'
import {MdDarkMode} from 'react-icons/md'

import appContext from '../context/Context'
import { THEME } from '../context/AppStates'

import './component.css'

export default function Header({setPopup}) {
    const [dark,setDark] = useState(true);
    const contextValue = useContext(appContext);

    const handleTheme=()=>{
      if(!dark){
        setDark(true);
        contextValue.setState({...contextValue.state,theme:THEME.dark})
      }
      else{
        contextValue.setState({...contextValue.state,theme:THEME.light})
        setDark(false);
      }
    }

    const handleGithub = () =>{
      window.open('https://github.com/Tarun08091997/Game-of-life','_blank');
    }
  return (
    <div className='header-container'>

      <BiSolidUserCircle className='user-icon'/>
      
      <span className='title'> Game Of Life</span>
      
      <div className='info-header'>
        <span className='game-rules' onClick={()=>setPopup(true)}> Rules </span>
        <AiFillGithub className='github-link' onClick={handleGithub}/>
        {dark ? <BsFillBrightnessHighFill className='theme-btn' onClick={handleTheme} /> : 
        <MdDarkMode className='theme-btn' onClick={handleTheme} />}
      </div>
    </div>
  )
}
