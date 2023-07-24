import React, { useEffect, useRef, useContext} from 'react';
import { refreshPage, zeroMat , randomMatrix, playGame, isEmptyMat, copyMat, areEqual } from './CanvasDisHelper';
import './component.css'
import appContext from '../context/Context';

const COLUMNS = 62;
const ROWS = 31;
const gap = 1;
const size = 15;
const mat = [];

export default function CanvasDisplay() {
  const canvasRef = useRef(null);
  const animationFrameIDRef = useRef(null);
  const lastSecondRef = useRef(null);
  const lastFrameTimeRef  = useRef(null);
  const lastMatrix = useRef([null,null,null,0]);

  const contextVal = useContext(appContext);
  const state = contextVal.state;
  
  
  
  

  const handleGame = () =>{
    if(isEmptyMat(mat)){
      contextVal.setState({...state, Play:false,timeSpent:0,gen:0});
    }
    else{  
      playGame(mat,ROWS,COLUMNS);
      refreshPage(mat,ROWS, COLUMNS ,canvasRef , size, gap,state.theme);
      contextVal.setState(prev => ({...prev,gen:prev.gen+1}));
    }
  }
 
  useEffect(()=>{
    zeroMat(mat,ROWS , COLUMNS);
    refreshPage(mat,ROWS, COLUMNS ,canvasRef , size , gap,state.theme);
  },[])
  
  useEffect(()=>{
    if(state.random){
      randomMatrix(mat,ROWS,COLUMNS);
      lastMatrix.current = [null,null,null,0];
      contextVal.setState({...state,random:false,timeSpent:0,gen:0});
      refreshPage(mat,ROWS, COLUMNS ,canvasRef , size, gap,state.theme);
    }
  },[state.random])

  useEffect(() => {
    // Game loop
    const gameLoop = (timestamp) => {
      if (state.Play) {
        // Time counter
        if(lastSecondRef.current != null){
          // check if one scond has passed
          if(timestamp-lastSecondRef.current > 1000){             
            contextVal.setState(prev => ({...prev, timeSpent: prev.timeSpent+1})); // Log the updated timeSpent value
            lastSecondRef.current = timestamp;
          } 
        }
        else{
          lastSecondRef.current = timestamp;
        }

        // Frames
        if(lastFrameTimeRef.current != null){
          if(timestamp - lastFrameTimeRef.current > (1000 / state.FPS)){
            lastFrameTimeRef.current = timestamp;
            // Run game
            handleGame();
          }
        }
        else{
          lastFrameTimeRef.current = timestamp;
        }

        contextVal.setState(prev => ({...prev}));
        animationFrameIDRef.current = requestAnimationFrame(gameLoop);
      }
    };


    // start Game Loop
    if (state.Play) {
      animationFrameIDRef.current = requestAnimationFrame(gameLoop);
    } else {
      lastSecondRef.current = null;
      cancelAnimationFrame(animationFrameIDRef.current);
    }

    if(state.reset){
      contextVal.setState(prev => ({...prev,reset:false}));
      mat.length = 0;
      zeroMat(mat,ROWS , COLUMNS);
      refreshPage(mat,ROWS, COLUMNS ,canvasRef , size , gap,state.theme);
    }

    // Clean up the animation frame on unmount
    return () => {
      cancelAnimationFrame(animationFrameIDRef.current);
    };
  }, [state.Play,state.FPS,state.theme,state.reset]);


  const handleClick = (event) =>{
    if(!state.Play){
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const x = parseInt(parseInt(event.clientY - rect.top)/(size+gap));
      const y = parseInt(parseInt(event.clientX - rect.left)/(size+gap));
      mat[x][y] = Math.abs(mat[x][y] -1);
      refreshPage(mat,ROWS, COLUMNS ,canvasRef , size, gap,state.theme)
    }
  }


  return (
    <div className='canvas-container'>
      
      <canvas
        id="myCanvas" ref={canvasRef} width={990} height={495} onClick={handleClick}
      ></canvas>
    </div>
  );
}