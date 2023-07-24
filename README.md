# Game-of-life

![image](https://github.com/Tarun08091997/Game-of-life/assets/61690911/a2564653-71fb-4a3a-a3dc-357b8cc37ded)

Website : https://game-of-life-evz7.onrender.com

# Installation

1. Clone the Project
2. Open terminal and go to project Directory
3. run command to install all packages -> npm i
4. run command to start the game-> npm start

# Rules

1.  Any live cell with two or three live neighbours survives.<br>
2.  Any dead cell with three live neighbours becomes a live cell.<br>
3.  All other live cells die in the next generation. Similarly, all other dead cells stay dead.<br>

# Block diagram for project

![blackDiagram_GameOfLife](https://github.com/Tarun08091997/Game-of-life/assets/61690911/95a8809c-e454-4dcb-ba6f-d8d9bd59cbb4)

# Explainaton of each file

<h3>Context Folder<br></h3>
&nbsp;&nbsp; <h6>Context.jsx</h6> &nbsp;&nbsp;&nbsp;&nbsp; Create ‘appContext’ to save states<br>
&nbsp;&nbsp; <h6>App State</h6> &nbsp;&nbsp;&nbsp;&nbsp; Hold all states used by different files<br>

<h4>States List and Working</h4>
State Name	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;    Initial Value	 &nbsp;&nbsp;	&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;    Working	        &nbsp;&nbsp;	&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;            Effected by<br>

&nbsp; Play &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; FALSE &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; If game has started &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; Play/pause , reset , rendom btns in Action.jsx<br>

&nbsp; reset &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; FALSE &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; Reset Everything &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; Reset btn in Action.jsx<br>

&nbsp; FPS &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 10 &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; FPS limit &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; FPS Select in Action.jsx file<br>

&nbsp; theme &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; THEME.dark &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; Changes Theme &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; Theme btn in Header.jsx file<br>

&nbsp; gen &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; Changes Genration &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; Reset btn , The game Loop<br>

&nbsp; timeSpent &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 0 &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; Count time &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; Reset btn , The game Loop<br>

<h4>App.js </h4>&nbsp;&nbsp;&nbsp;&nbsp; wrap all the files in app context   <br>
<h4> Main.jsx </h4> &nbsp;&nbsp;&nbsp;&nbsp; Combine all the files for frontEnd Main page<br>

<h3>Subcomponents Folder </h3>
   &nbsp;&nbsp;&nbsp;&nbsp; Contain all the sub-Components like button or selector or Rules Popup. <br>

<h3>Components Folder</h3>
  &nbsp;&nbsp;&nbsp;&nbsp;  Header.jsx -> Contain btn to go to gitRepo , change Theme or rules Popup<br>
   &nbsp;&nbsp;&nbsp;&nbsp; Action.jsx -> Contain btns for <br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; •	Play/pause -> toggle the state Play <br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; •	Random -> create random pattern and changes state of <br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; o	Random : true<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	gen : 0<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; o	Play : false<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; o	timeSpent : 0<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•	Reset -> reset everything and changes state of<br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	gen : 0<br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	Play : false<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	timeSpent : 0<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	reset: true<br>
  <h6>Used.jsx</h6> &nbsp;&nbsp;&nbsp;&nbsp; shows output like time Spent and generation<br>
  <h6>CanvasDisplay </h6>&nbsp;&nbsp;&nbsp;&nbsp;Display canvas and create game loop and conditions for states when they changes<br>
  <h6>CanvasDishelper</h6> &nbsp;&nbsp;&nbsp;&nbsp; helper function for game Loop<br>
