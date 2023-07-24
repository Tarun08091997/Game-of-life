import { useContext, useState} from 'react';
import './App.css'
import Action from './component/Action';
import CanvasDisplay from './component/CanvasDisplay';
import Header from './component/Header';
import Used from './component/Used';
import appContext from './context/Context';
import RulesPopup from './component/RulesPopup';
function Main() {
  const theme = useContext(appContext).state.theme;
  const contextValue = useContext(appContext);
  const [showRules,setShowRules] = useState(false);

  const handlePopup =(x) =>{
    setShowRules(x);
    contextValue.setState({...contextValue.state,Play:false})
  }
  if(showRules){
    return(
      <RulesPopup setPopup={handlePopup} />
    )
  }
  return (
    <div className="App" style={
      {
        color:theme.fg,
        backgroundColor:theme.bg, height:'100vh' , width:'100vw',display:'flex',
        flexDirection:'column', transition: 'background-color 1s,color 0.5s'
      }
    }>
      <Header setPopup={setShowRules} />
      <Used />
      <Action />
      <CanvasDisplay />
      {/* <CanvasDisplay /> */}
    </div>
  );
}

export default Main;
