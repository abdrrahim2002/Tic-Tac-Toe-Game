//basics values
let win = 0;
let lose = 0;
let tie = 0;

const winCase = document.querySelector('.win');
const loseCase = document.querySelector('.lose');
const tieCase = document.querySelector('.tie');
//this array represent the game burder
let bordGame = [
"","","",
"","","",
"","",""];

let gameOver = false;
let player = 'X';

let checkWinResult = false;


//function to the player move
function playerMove(cell){
  if(player === 'X' && bordGame[cell] === '' && !gameOver){
    document.querySelector(`.c${cell+1}`).innerText = player;
    bordGame[cell] = player;
    setTimeout(()=>{
    player = "O";
  },10)

  new Audio('sound/player-click.mp3').play();
  console.log(bordGame);
  }

  checkWin('X');
  setTimeout(()=>aiPlayer(),200);

  setTimeout(()=>{
    if(!bordGame.includes('') && !checkWinResult){
    gameOver = true;
    new Audio('sound/TIE-sound.mp3').play();
    player = 'X';
    tie++;
    tieCase.innerText = `Tie: ${tie}`;
  }
  },250)
  
  
}


//function to check if there is win
function checkWin(playerr){
  if(playerr === 'O') {
    //for horizontal win
    if(bordGame[0] ==='O' && bordGame[0] === bordGame[1] && bordGame[1] === bordGame[2]){
      console.log('PC win!!');
      gameOver = true;
      new Audio('sound/pc-win-sound.mp3').play();

      lose++;
      loseCase.innerText = `Lose: ${lose}`;

      checkWinResult = true;
    }else if(bordGame[3] === 'O' && bordGame[3] === bordGame[4] && bordGame[4] === bordGame[5]){
      console.log('PC win!!');
      gameOver = true;
      new Audio('sound/pc-win-sound.mp3').play();

      lose++;
      loseCase.innerText = `Lose: ${lose}`;

      checkWinResult = true;
    }else if(bordGame[6] === 'O' && bordGame[6] === bordGame[7] && bordGame[7] === bordGame[8]){
      console.log('PC win!!');
      gameOver = true;
      new Audio('sound/pc-win-sound.mp3').play();

      lose++;
      loseCase.innerText = `Lose: ${lose}`;

      checkWinResult = true;
    }
    
    //for vertical win
    else if(bordGame[0] === 'O' && bordGame[0] === bordGame[3] && bordGame[3] === bordGame[6]){
      console.log('PC win!!');
      gameOver = true;
      new Audio('sound/pc-win-sound.mp3').play();

      lose++;
      loseCase.innerText = `Lose: ${lose}`;

      checkWinResult = true;
    }else if(bordGame[1] === 'O' && bordGame[1] === bordGame[4] && bordGame[4] === bordGame[7]){
      console.log('PC win!!');
      gameOver = true;
      new Audio('sound/pc-win-sound.mp3').play();

      lose++;
      loseCase.innerText = `Lose: ${lose}`;

      checkWinResult = true;
    }else if(bordGame[2] === 'O' && bordGame[2] === bordGame[5] && bordGame[5] === bordGame[8]){
      console.log('PC win!!');
      gameOver = true;
      new Audio('sound/pc-win-sound.mp3').play();

      lose++;
      loseCase.innerText = `Lose: ${lose}`;

      checkWinResult = true;

    }

    //for curved win
    else if(bordGame[0] === 'O' && bordGame[0] === bordGame[4] && bordGame[4] === bordGame[8]){
      console.log('PC win!!');
      gameOver = true;
      new Audio('sound/pc-win-sound.mp3').play();

      lose++;
      loseCase.innerText = `Lose: ${lose}`;

      checkWinResult = true;

    }else if(bordGame[2] === 'O' && bordGame[2] === bordGame[4] && bordGame[4] === bordGame[6]){
      console.log('PC win!!');
      gameOver = true;
      new Audio('sound/pc-win-sound.mp3').play();

      lose++;
      loseCase.innerText = `Lose: ${lose}`;

      checkWinResult = true;

    }

  }else if(playerr === 'X'){
    //for horizontal win
    if(bordGame[0] ==='X' && bordGame[0] === bordGame[1] && bordGame[1] === bordGame[2]){
      console.log('you win!!');
      gameOver = true;
      new Audio('sound/player-win-sound.mp3').play();

      win++;
      winCase.innerText = `Win: ${win}`;

      checkWinResult = true;
    }else if(bordGame[3] === 'X' && bordGame[3] === bordGame[4] && bordGame[4] === bordGame[5]){
      console.log('you win!!');
      gameOver = true;
      new Audio('sound/player-win-sound.mp3').play();

      win++;
      winCase.innerText = `Win: ${win}`;

      checkWinResult = true;
    }else if(bordGame[6] === 'X' && bordGame[6] === bordGame[7] && bordGame[7] === bordGame[8]){
      console.log('you win!!');
      gameOver = true;
      new Audio('sound/player-win-sound.mp3').play();

      win++;
      winCase.innerText = `Win: ${win}`;

      checkWinResult = true;
    }
    
    //for vertical win
    else if(bordGame[0] === 'X' && bordGame[0] === bordGame[3] && bordGame[3] === bordGame[6]){
      console.log('you win!!');
      gameOver = true;
      new Audio('sound/player-win-sound.mp3').play();

      win++;
      winCase.innerText = `Win: ${win}`;

      checkWinResult = true;
    }else if(bordGame[1] === 'X' && bordGame[1] === bordGame[4] && bordGame[4] === bordGame[7]){
      console.log('you win!!');
      gameOver = true;
      new Audio('sound/player-win-sound.mp3').play();

      win++;
      winCase.innerText = `Win: ${win}`;

      checkWinResult = true;
    }else if(bordGame[2] === 'X' && bordGame[2] === bordGame[5] && bordGame[5] === bordGame[8]){
      console.log('you win!!');
      gameOver = true;
      new Audio('sound/player-win-sound.mp3').play();

      win++;
      winCase.innerText = `Win: ${win}`;

      checkWinResult = true;
    }

    //for curved win
    else if(bordGame[0] === 'X' && bordGame[0] === bordGame[4] && bordGame[4] === bordGame[8]){
      console.log('you win!!');
      gameOver = true;
      new Audio('sound/player-win-sound.mp3').play();

      win++;
      winCase.innerText = `Win: ${win}`;

      checkWinResult = true;
    }else if(bordGame[2] === 'X' && bordGame[2] === bordGame[4] && bordGame[4] === bordGame[6]){
      console.log('you win!!');
      gameOver = true;
      new Audio('sound/player-win-sound.mp3').play();

      win++;
      winCase.innerText = `Win: ${win}`;

      checkWinResult = true;
    }
  }
  
}

//function to make computer play
let checkAiBlock = false;
let checkWinAiwork = false;

function aiPlayer(){
  if(player === 'O' && !gameOver){
    //first step we have to know what is the cell we can play on it
    let playOption = [];

    for(let x = 0; x<=bordGame.length; x++){
      if(bordGame[x]===""){
        playOption.push(x);
      }
    }

    //moves block or win

    console.log(playOption);

    //second step play randomly

    if(playOption.length>0){
      //for AI to win
      aiWin();
      
      //for AI to block
      if(!checkAiBlock){
        aiBlock();
      }
      
      if(!checkWinAiwork && !checkAiBlock){
        const randomMove = Math.floor(Math.random()*playOption.length);
        console.log(randomMove);
        bordGame[playOption[randomMove]] = 'O';
        document.querySelector(`.c${playOption[randomMove]+1}`).innerText = 'O';
        console.log(bordGame);

      }

      checkWin('O');

      setTimeout(()=>{
        player = "X";
      },10)

      checkAiBlock = false;
      checkWinAiwork = false;
      new Audio('sound/PC-click.mp3').play();
    }

  }

}

//function AI win
function aiWin(){
  let playOption = [];

  for(let x = 0; x<=bordGame.length; x++){
    if(bordGame[x]===""){
      playOption.push(x);
    }
  }
  //horizentall lines
  //first line AI win
  if(bordGame[0]==="O" && bordGame[1]=== 'O' && playOption.includes(2)){
    console.log('yes');
    checkAiBlock = true;
    checkWinAiwork = true;

    bordGame[2] = 'O';
    document.querySelector(`.c${2+1}`).innerText = 'O';

  }else if(bordGame[1]==="O" && bordGame[2]=== 'O' && playOption.includes(0)){
    console.log('yes');
    checkAiBlock = true;
    checkWinAiwork = true;

    bordGame[0] = 'O';
    document.querySelector(`.c${0+1}`).innerText = 'O';
  }else if(bordGame[0]==="O" && bordGame[2]=== 'O' && playOption.includes(1)){
    console.log('yes');
    checkAiBlock = true;
    checkWinAiwork = true;

    bordGame[1] = 'O';
    document.querySelector(`.c${1+1}`).innerText = 'O';
  }

  //second line AI win
  else if(bordGame[3]==="O" && bordGame[4]=== 'O' && playOption.includes(5)){
    console.log('yes');
    checkAiBlock = true;
    checkWinAiwork = true;

    bordGame[5] = 'O';
    document.querySelector(`.c${5+1}`).innerText = 'O';
  }else if(bordGame[3]==="O" && bordGame[5]=== 'O' && playOption.includes(4)){
    console.log('yes');
    checkAiBlock = true;
    checkWinAiwork = true;

    bordGame[4] = 'O';
    document.querySelector(`.c${4+1}`).innerText = 'O';
  }else if(bordGame[4]==="O" && bordGame[5]=== 'O' && playOption.includes(3)){
    console.log('yes');
    checkAiBlock = true;
    checkWinAiwork = true;

    bordGame[3] = 'O';
    document.querySelector(`.c${3+1}`).innerText = 'O';
  }

  //third line AI win
  else if(bordGame[6]==="O" && bordGame[7]=== 'O' && playOption.includes(8)){
    console.log('yes');
    checkAiBlock = true;
    checkWinAiwork = true;

    bordGame[8] = 'O';
    document.querySelector(`.c${8+1}`).innerText = 'O';
  }else if(bordGame[6]==="O" && bordGame[8]=== 'O' && playOption.includes(7)){
    console.log('yes');
    checkAiBlock = true;
    checkWinAiwork = true;

    bordGame[7] = 'O';
    document.querySelector(`.c${7+1}`).innerText = 'O';
  }else if(bordGame[7]==="O" && bordGame[8]=== 'O' && playOption.includes(6)){
    console.log('yes');
    checkAiBlock = true;
    checkWinAiwork = true;

    bordGame[6] = 'O';
    document.querySelector(`.c${6+1}`).innerText = 'O';
  }

  //vertical lines
  else if(bordGame[0]==="O" && bordGame[3]=== 'O' && playOption.includes(6)){
    console.log('yes');
    checkAiBlock = true;
    checkWinAiwork = true;

    bordGame[6] = 'O';
    document.querySelector(`.c${6+1}`).innerText = 'O';

  }else if(bordGame[0]==="O" && bordGame[6]=== 'O' && playOption.includes(3)){
    console.log('yes');
    checkAiBlock = true;
    checkWinAiwork = true;

    bordGame[3] = 'O';
    document.querySelector(`.c${3+1}`).innerText = 'O';
  }else if(bordGame[3]==="O" && bordGame[6]=== 'O' && playOption.includes(0)){
    console.log('yes');
    checkAiBlock = true;
    checkWinAiwork = true;

    bordGame[0] = 'O';
    document.querySelector(`.c${0+1}`).innerText = 'O';
  }

  //second line AI win
  else if(bordGame[1]==="O" && bordGame[4]=== 'O' && playOption.includes(7)){
    console.log('yes');
    checkAiBlock = true;
    checkWinAiwork = true;

    bordGame[7] = 'O';
    document.querySelector(`.c${7+1}`).innerText = 'O';
  }else if(bordGame[1]==="O" && bordGame[7]=== 'O' && playOption.includes(4)){
    console.log('yes');
    checkAiBlock = true;
    checkWinAiwork = true;

    bordGame[4] = 'O';
    document.querySelector(`.c${4+1}`).innerText = 'O';
  }else if(bordGame[4]==="O" && bordGame[7]=== 'O' && playOption.includes(1)){
    console.log('yes');
    checkAiBlock = true;
    checkWinAiwork = true;

    bordGame[1] = 'O';
    document.querySelector(`.c${1+1}`).innerText = 'O';
  }

  //third line AI win
  else if(bordGame[2]==="O" && bordGame[5]=== 'O' && playOption.includes(8)){
    console.log('yes');
    checkAiBlock = true;
    checkWinAiwork = true;

    bordGame[8] = 'O';
    document.querySelector(`.c${8+1}`).innerText = 'O';
  }else if(bordGame[2]==="O" && bordGame[8]=== 'O' && playOption.includes(5)){
    console.log('yes');
    checkAiBlock = true;
    checkWinAiwork = true;

    bordGame[5] = 'O';
    document.querySelector(`.c${5+1}`).innerText = 'O';
  }else if(bordGame[5]==="O" && bordGame[8]=== 'O' && playOption.includes(2)){
    console.log('yes');
    checkAiBlock = true;
    checkWinAiwork = true;

    bordGame[2] = 'O';
    document.querySelector(`.c${2+1}`).innerText = 'O';
  }

  //for curved line AI win
  else if(bordGame[0]==="O" && bordGame[4]=== 'O' && playOption.includes(8)){
    console.log('yes');
    checkAiBlock = true;
    checkWinAiwork = true;

    bordGame[8] = 'O';
    document.querySelector(`.c${8+1}`).innerText = 'O';
  }else if(bordGame[4]==="O" && bordGame[8]=== 'O' && playOption.includes(0)){
    console.log('yes');
    checkAiBlock = true;
    checkWinAiwork = true;

    bordGame[0] = 'O';
    document.querySelector(`.c${0+1}`).innerText = 'O';
  }else if(bordGame[0]==="O" && bordGame[8]=== 'O' && playOption.includes(4)){
    console.log('yes');
    checkAiBlock = true;
    checkWinAiwork = true;

    bordGame[4] = 'O';
    document.querySelector(`.c${4+1}`).innerText = 'O';
  }

  else if(bordGame[2]==="O" && bordGame[4]=== 'O' && playOption.includes(6)){
    console.log('yes');
    checkAiBlock = true;
    checkWinAiwork = true;

    bordGame[6] = 'O';
    document.querySelector(`.c${6+1}`).innerText = 'O';
  }else if(bordGame[2]==="O" && bordGame[6]=== 'O' && playOption.includes(4)){
    console.log('yes');
    checkAiBlock = true;
    checkWinAiwork = true;

    bordGame[4] = 'O';
    document.querySelector(`.c${4+1}`).innerText = 'O';
  }else if(bordGame[4]==="O" && bordGame[6]=== 'O' && playOption.includes(2)){
    console.log('yes');
    checkAiBlock = true;
    checkWinAiwork = true;

    bordGame[2] = 'O';
    document.querySelector(`.c${2+1}`).innerText = 'O';
  }
}

//function AI block
function aiBlock(){
  let playOption = [];

  for(let x = 0; x<=bordGame.length; x++){
    if(bordGame[x]===""){
      playOption.push(x);
    }
  }

  //horizontall line
  //block first line
  if(bordGame[0] === 'X' && bordGame[1] === 'X' && playOption.includes(2)){
    console.log('block it');

    bordGame[2] = 'O';
    document.querySelector(`.c${2+1}`).innerText = 'O';
    checkAiBlock = true;
  }else if(bordGame[0] === 'X' && bordGame[2] === 'X' && playOption.includes(1)){
    console.log('block it');

    bordGame[1] = 'O';
    document.querySelector(`.c${1+1}`).innerText = 'O';
    checkAiBlock = true;
  }else if(bordGame[1] === 'X' && bordGame[2] === 'X' && playOption.includes(0)){
    console.log('block it');

    bordGame[0] = 'O';
    document.querySelector(`.c${0+1}`).innerText = 'O';
    checkAiBlock = true;
  }

  //block second line
  else if(bordGame[3] === 'X' && bordGame[4] === 'X' && playOption.includes(5)){
    console.log('block it');

    bordGame[5] = 'O';
    document.querySelector(`.c${5+1}`).innerText = 'O';
    checkAiBlock = true;
  }else if(bordGame[3] === 'X' && bordGame[5] === 'X' && playOption.includes(4)){
    console.log('block it');

    bordGame[4] = 'O';
    document.querySelector(`.c${4+1}`).innerText = 'O';
    checkAiBlock = true;
  }else if(bordGame[4] === 'X' && bordGame[5] === 'X' && playOption.includes(3)){
    console.log('block it');

    bordGame[3] = 'O';
    document.querySelector(`.c${3+1}`).innerText = 'O';
    checkAiBlock = true;
  }

  //block third line
  else if(bordGame[6] === 'X' && bordGame[7] === 'X' && playOption.includes(8)){
    console.log('block it');

    bordGame[8] = 'O';
    document.querySelector(`.c${8+1}`).innerText = 'O';
    checkAiBlock = true;
  }else if(bordGame[6] === 'X' && bordGame[8] === 'X' && playOption.includes(7)){
    console.log('block it');

    bordGame[7] = 'O';
    document.querySelector(`.c${7+1}`).innerText = 'O';
    checkAiBlock = true;
  }else if(bordGame[7] === 'X' && bordGame[8] === 'X' && playOption.includes(6)){
    console.log('block it');

    bordGame[6] = 'O';
    document.querySelector(`.c${6+1}`).innerText = 'O';
    checkAiBlock = true;
  }


  //vertical line
    //block first line
    else if(bordGame[0] === 'X' && bordGame[3] === 'X' && playOption.includes(6)){
    console.log('block it');

    bordGame[6] = 'O';
    document.querySelector(`.c${6+1}`).innerText = 'O';
    checkAiBlock = true;
  }else if(bordGame[0] === 'X' && bordGame[6] === 'X' && playOption.includes(3)){
    console.log('block it');

    bordGame[3] = 'O';
    document.querySelector(`.c${3+1}`).innerText = 'O';
    checkAiBlock = true;
  }else if(bordGame[3] === 'X' && bordGame[6] === 'X' && playOption.includes(0)){
    console.log('block it');

    bordGame[0] = 'O';
    document.querySelector(`.c${0+1}`).innerText = 'O';
    checkAiBlock = true;
  }

  //block second line
  else if(bordGame[1] === 'X' && bordGame[4] === 'X' && playOption.includes(7)){
    console.log('block it');

    bordGame[7] = 'O';
    document.querySelector(`.c${7+1}`).innerText = 'O';
    checkAiBlock = true;
  }else if(bordGame[1] === 'X' && bordGame[7] === 'X' && playOption.includes(4)){
    console.log('block it');

    bordGame[4] = 'O';
    document.querySelector(`.c${4+1}`).innerText = 'O';
    checkAiBlock = true;
  }else if(bordGame[4] === 'X' && bordGame[7] === 'X' && playOption.includes(1)){
    console.log('block it');

    bordGame[1] = 'O';
    document.querySelector(`.c${1+1}`).innerText = 'O';
    checkAiBlock = true;
  }

  //block third line
  else if(bordGame[2] === 'X' && bordGame[5] === 'X' && playOption.includes(8)){
    console.log('block it');

    bordGame[8] = 'O';
    document.querySelector(`.c${8+1}`).innerText = 'O';
    checkAiBlock = true;
  }else if(bordGame[2] === 'X' && bordGame[8] === 'X' && playOption.includes(5)){
    console.log('block it');

    bordGame[5] = 'O';
    document.querySelector(`.c${5+1}`).innerText = 'O';
    checkAiBlock = true;
  }else if(bordGame[5] === 'X' && bordGame[8] === 'X' && playOption.includes(2)){
    console.log('block it');

    bordGame[2] = 'O';
    document.querySelector(`.c${2+1}`).innerText = 'O';
    checkAiBlock = true;
  }


  //block curved line
  else if(bordGame[0] === 'X' && bordGame[4] === 'X' && playOption.includes(8)){
    console.log('block it');

    bordGame[8] = 'O';
    document.querySelector(`.c${8+1}`).innerText = 'O';
    checkAiBlock = true;
  }else if(bordGame[0] === 'X' && bordGame[8] === 'X' && playOption.includes(4)){
    console.log('block it');

    bordGame[4] = 'O';
    document.querySelector(`.c${4+1}`).innerText = 'O';
    checkAiBlock = true;
  }else if(bordGame[4] === 'X' && bordGame[8] === 'X' && playOption.includes(0)){
    console.log('block it');

    bordGame[0] = 'O';
    document.querySelector(`.c${0+1}`).innerText = 'O';
    checkAiBlock = true;
  }

  else if(bordGame[2] === 'X' && bordGame[4] === 'X' && playOption.includes(6)){
    console.log('block it');

    bordGame[6] = 'O';
    document.querySelector(`.c${6+1}`).innerText = 'O';
    checkAiBlock = true;
  }else if(bordGame[2] === 'X' && bordGame[6] === 'X' && playOption.includes(4)){
    console.log('block it');

    bordGame[4] = 'O';
    document.querySelector(`.c${4+1}`).innerText = 'O';
    checkAiBlock = true;
  }else if(bordGame[4] === 'X' && bordGame[6] === 'X' && playOption.includes(2)){
    console.log('block it');

    bordGame[2] = 'O';
    document.querySelector(`.c${2+1}`).innerText = 'O';
    checkAiBlock = true;
  }
}

//functon to restart the game
let boardNum = 0;
let turnPlay = 0 ;
//function to know the number of bord we click
function restartGame(){
  //resart the arry
  bordGame = [
    "","","",
    "","","",
    "","",""
  ];

  //restrat the innerText
  for(let i = 1; i<=9; i++){
      document.querySelector(`.c${i}`).innerText = '';
    }

  checkWinResult = false;
  gameOver = false;
  

  //for pc play first
  if(turnPlay%2 === 0){

    let playOption = [];

    for(let x = 0; x<=bordGame.length; x++){
      if(bordGame[x]===""){
        playOption.push(x);
      }
    }

    const randomMove = Math.floor(Math.random()*playOption.length);
    console.log(randomMove);
    bordGame[playOption[randomMove]] = 'O';
    document.querySelector(`.c${playOption[randomMove]+1}`).innerText = 'O';
    console.log(bordGame);

    setTimeout(()=>{
        player = "X";
      },10)

  }else{player='X';}
  //player play first    
  
  turnPlay++;
}
