const neighbor_Mat = [];


// zeroMat -> create zero matrix of given size
export function zeroMat(mat,ROWS , COLUMNS){
    // create matrix of color
    for(let i=0;i<ROWS;i++){
      let r = [];
      for(let j=0;j<COLUMNS;j++){        
          r.push(0);
      }
      mat.push(r);
    }
    
}

export function isEmptyMat(mat) {
    let hasOne = false;
  
    for (let row of mat) {
      for (let val of row) {
        if (val === 1) {
          hasOne = true;
          break;
        }
      }
      if (hasOne) {
        break;
      }
    }
  
    return !hasOne;
}

// Create Page using given matrix
export function refreshPage(mat,ROWS,COLUMNS,canvasRef , size,gap,theme){
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = theme.bg2;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    for(let i=0;i<ROWS;i++){
        for(let j=0;j<COLUMNS;j++){
            ctx.fillStyle = mat[i][j] === 0 ? theme.bg:theme.fg;
            const x = j*(size + gap);
            const y = i*(size + gap);
            ctx.fillRect(x,y,size,size);
        }
    }
}


function getRandomZeroOrOne() {
    const probabilityOfOne = 0.45;
    if (Math.random() < probabilityOfOne) {
      return 1;
    } else {
      return 0;
    }
}

export function randomMatrix(mat,ROWS,COLUMNS){
    mat.length = 0;
    neighbor_Mat.length = 0;
    for(let i=0;i<ROWS;i++){
        let r = [];
        for(let j=0;j<COLUMNS;j++){        
            r.push(getRandomZeroOrOne());
        }
        mat.push(r);
    }
    
}

// Neighbor of a matrix-block
function findNeighbor(mat,i,j,ROWS,COLUMNS){
    let total = 0;
    // create 8 neighbours
    for(let x=-1;x<=1;x++){
        for(let y=-1;y<=1;y++){
            if(x===0 && y===0){
                continue;
            }
            const X = i+x;
            const Y = j+y;
            if((X >=0 && X < ROWS) && (Y>=0 && Y < COLUMNS)){
                if(mat[X][Y] === 1){
                    total++;
                }
            }
            else{
                if(mat[(X+ROWS) % ROWS][(Y + COLUMNS) % COLUMNS] === 1){
                    total++;
                }
            }
            
        }
    }

    return total;
}

//create neighbor MAtrix
export function neightbourMatrix(mat,ROWS,COLUMNS){
    neighbor_Mat.length = 0;
    for(let i=0;i<ROWS;i++){
        const r = [];
        for(let j=0;j<COLUMNS;j++){
            r.push(findNeighbor(mat,i,j,ROWS,COLUMNS));
        }
        neighbor_Mat.push(r);
    }
}


//Play the game

export function playGame(mat,ROWS,COLUMNS){
    neightbourMatrix(mat,ROWS,COLUMNS);
    for(let i=0;i<ROWS;i++){
        for(let j=0;j<COLUMNS;j++){
            const val = mat[i][j];
            const n = neighbor_Mat[i][j];
            // Apply Rules
            //1. if Alive
            if(val === 1){
                //neigh == 2 || 3 => remain Alive
                if(n < 2 || n > 3){
                    mat[i][j] =0;
                }
            }
            else{
                if(n===3){
                    mat[i][j] = 1;
                }
            }
        }
    }
}


