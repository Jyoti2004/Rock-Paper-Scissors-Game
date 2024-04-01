let userScore =0;
let compScore =0;
//step 1
const choices = document.querySelectorAll(".choice");
//step 9
const msg = document.querySelector("#msg");

//step 11
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//step 3
//computer random choice code
const genCompChoice=()=>{
    const options =["rock", "paper", "scissors"];
    //Math.random generates a random number between 0 and 1
    //koi bhi number agr 0 se 1 ki range mein h and 3 se multiply ho jata h toh voh 0 se 2 ki range mein values deta h means 2.something types ki range tk value dega 
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}

//step 5
const drawGame = ()=>{
    console.log("Game was Draw");
    //step 10
    msg.innerText = "Game was Draw. Play Again.";
    msg.style.backgroundColor = "#081b31";
};
//step 8
const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        //step 12
        userScore++;
        userScorePara.innerText = userScore;

        console.log("You Win !!");
        //step 10
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        //step 12
        compScore++;
        compScorePara.innerText = compScore;

        console.log("You Lose !!");
        //step 10
        msg.innerText =`You Lost! Computer ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

//step 4
const playGame = (userChoice)=>{
console.log("user Choice =" , userChoice)
//generate computer choice 
const compChoice= genCompChoice();
console.log("comp Choice =" , compChoice);

if(userChoice === compChoice){
    //Draw Game
    drawGame();
}else{ //step6
    let userWin = true;
    if(userChoice=== "rock"){
        // computer choice can either be paper or scissors
        userWin = compChoice ==="paper" ? false :true;
    }else if(userChoice==="paper"){
        //computer choice can either be rock or scissors
        // userWin = compChoice ==="rock" ? true : false;
        userWin = compChoice ==="scissors" ? false : true;
    }else{
       //userchoice -- scissors , computer choice can either be paper or rock
        userWin = compChoice ==="rock" ? false : true;
    }//step7 
    showWinner(userWin, userChoice, compChoice);
}
}

//step2 
// user choice ready
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
})  