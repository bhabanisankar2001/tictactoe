let boxElement=document.querySelectorAll('.box');
let rstBtn=document.querySelector('#reset-btn');
let newBtn=document.querySelector('#newgame-btn');
let msgcontainer=document.querySelector('.msgcontainer');
let msg=document.querySelector('#msg');
let choice=true;
let count=0;
let winPattern=[[0,1,2],[0,3,6],[0,4,8],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[2,4,6]];

boxElement.forEach((box)=>{
 box.addEventListener("click",()=>{
 if(choice)
 {
  box.innerText="X";
  choice=false;
 }
 else{
  box.innerText="O";
  choice=true;
 }
 box.disabled=true;
 count++;
 let isWinner=checkWinner();
 if(count===9 && !isWinner)
 {
  gameDraw();
 }
 })
});

const checkWinner=()=>{
  for(let pattern of winPattern)
  {
   
   let pos1=boxElement[pattern[0]].innerText;
   let pos2=boxElement[pattern[1]].innerText;
   let pos3=boxElement[pattern[2]].innerText;
if(pos1!="" && pos2!="" && pos3!=""){
  if(pos1===pos2 && pos2===pos3)
  {
    showWinner(pos1);
    return true;
  }
}

  }
}

const showWinner=(winner)=>{
msg.innerText=`Congratulation winner is ${winner}`;
msgcontainer.classList.remove('hide');
disabledBoxes();
}
const disabledBoxes=()=>{
  for(let box of boxElement)
  {
    box.disabled=true;
  }
}
const resetGame = () => {
  choice = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};
const enableBoxes=()=>{
  for(let box of boxElement)
  {
    box.disabled=false;
    box.innerText="";
  }
}
const gameDraw=()=>{
 msg.innerText="Game was drawn";
 msgcontainer.classList.remove('hide');
 disabledBoxes();
}

newBtn.addEventListener("click",resetGame);
rstBtn.addEventListener("click",resetGame);