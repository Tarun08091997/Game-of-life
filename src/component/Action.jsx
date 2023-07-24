import React, { useContext, useRef} from 'react'
import appContext from '../context/Context'
import Button from '../sub-component/Button';
import Select from '../sub-component/Select';
export default function Action() {
  const contextValue = useContext(appContext);
  const handlePlay=()=>{
    const p = ! contextValue.state.Play;
    contextValue.setState(prev => ({...prev,Play:p}));
  }

  const handleRandom=() =>{
    const r = ! contextValue.state.random;
    contextValue.setState(prev => ({...prev,random:r,gen:0,Play:false,timeSpent:0}));
  }
  const handleReset=() =>{
    contextValue.setState(prev => ({...prev,gen:0,Play:false,timeSpent:0,reset:true}));
  }
  
  return (
    <div className='action-container'>
      <Button click={handlePlay} value={contextValue.state.Play ? "Pause" : "Play"}/>
      <Button value={"Random"} click={handleRandom}/>
      <Button value={"Reset"} click={handleReset}/>
      <Select />
    </div>
  )
}
