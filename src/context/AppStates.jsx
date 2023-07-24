import { useState } from "react";
import appContext from "./Context";

export const THEME = {
    dark:{
        fg:'white',
        bg:'black',
        bg2:'rgba(255,255,255,0.1)'
        },
    light:{
        fg:'black',
        bg:'white',
        bg2:'rgba(0,0,0,0.1)'
    }
}


export function AppState(params){
    const [state,setState] = useState({
        Play:false,
        FPS:10,
        theme:THEME.dark,
        random:false,
        gen:0,
        timeSpent:0,
        reset:false
    })
    return(
        <appContext.Provider value={{state,setState}}>
            {params.children}
        </appContext.Provider>

    )
}



