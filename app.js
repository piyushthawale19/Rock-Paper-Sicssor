let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const userScorepara =document.querySelector("#user-score");
const compScorepara =document.querySelector("#comp-score");


const playgame=(userChoice)=>{
     //genreted compurter choice
    const CompChoice =genCompChoice();
    

    if(userChoice===CompChoice){
        //Draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            //scissor,paper
            userWin =CompChoice ==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin =CompChoice ==="scissor"?false:true;
        }
        else {
            userWin =CompChoice ==="rock"?false:true;
        }
        showWinner(userWin,userChoice,CompChoice );
    }
};

const genCompChoice =() =>{
    //rock,paper,scissors
    const options=["rock","paper","scissor"];
     const randIdx=Math.floor(Math.random()*3);
     return options[randIdx];
}
const drawGame =() =>{
      
    msg.innerText="Game Was Draw.Play Again?";
    msg.style.backgroundColor ="gray";
}

 const showWinner=(userWin ,userChoice,CompChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor ="green";
    }
    else{
        compScore++;
        compScorepara.innerText = compScore;
         
        msg.innerText=`You Lose. ${CompChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
 }


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
         playgame(userChoice);
    });
});