// // Online Javascript Editor for free
// let computer = ['rock','paper','scissors']
// const a = computer.length
// let q = Math.floor(Math.random()*a)
// let player = prompt("enter your prompt")
// if(player)
// {
//     console.log(player ?? "enter input");
    
// }

// if(player === "paper")
// {
// console.log(`${player} - ${computer[q]}`)
//  const answer = player == computer[q] ? console.log("Tie!") : computer[q] == 'rock' ? console.log("player Wins") : computer[q] == 'scissors' ? console.log("computer Wins") : console.log("Not Tie")
// }
// else if(player === "scissors")
// {
    
// console.log(`${player} - ${computer[q]}`)
// const answer = player == computer[q] ? console.log("Tie!") : computer[q] == 'paper' ? console.log("player Wins") : computer[q] == 'rock' ? console.log("computer Wins") : console.log("Not Tie")
// }
// else{
//       //rock
// console.log(`${player} - ${computer[q]}`)
// const answer = player == computer[q] ? console.log("Tie!") : computer[q] == 'scissors' ? console.log("player Wins") : computer[q] == 'paper' ? console.log("computer Wins") : console.log("Not Tie")
// }
document.body.style.backgroundColor = "black";
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")


let n = 0; // Player's points
let m = 0; // Computer's points

const display = () =>{
    //console.log(player)
    
   // count.textContent = `Points : ${n}`
   
const countp = document.getElementById("countp")
const countc = document.getElementById("countc")
    console.log(countp)
    let computer = ['rock','paper','scissors']
    const a = computer.length
    let q = Math.floor(Math.random()*a)
    let player = "paper"
    if(player === "paper")
        {
        console.log(`${player} - ${computer[q]}`)
        if (player == computer[q]) {
            // Case when it's a tie
            countp.textContent = `Points : Tie`;
            countc.textContent = `Points : Tie`
        } 
        else if (computer[q] == 'rock') {
            countp.textContent = `Points : ${n }`;
            countc.textContent = `Points : ${m }`;
             n +=1
            // Case when computer chooses rock
            countp.textContent = `Points : ${n }`;
        } 
        else if (computer[q] == 'scissors') {
            countp.textContent = `Points : ${n }`;
            countc.textContent = `Points : ${m }`;
             m += 1
            // Case when computer chooses scissors
            countc.textContent = `Points : ${m }`;
        } 
        else {
            // Case when none of the above conditions are met
            console.log("Not Tie");
        }
        }
    
}

const display1 = () =>{
    //console.log(player)
    
   // count.textContent = `Points : ${n}`
   
const countp = document.getElementById("countp")
const countc = document.getElementById("countc")
    console.log(countp)
    let computer = ['rock','paper','scissors']
    const a = computer.length
    let q = Math.floor(Math.random()*a)
    let player = "scissors"
    if(player === "scissors")
        {
        console.log(`${player} - ${computer[q]}`)
        if (player == computer[q]) {
            // Case when it's a tie
            countp.textContent = `Points : Tie`;
            countc.textContent = `Points : Tie`
        } 
        else if (computer[q] == 'paper') {
            countp.textContent = `Points : ${n }`;
            countc.textContent = `Points : ${m }`;
             n +=1
            // Case when computer chooses rock
            countp.textContent = `Points : ${n }`;
        } 
        else if (computer[q] == 'rock') {
            countp.textContent = `Points : ${n }`;
            countc.textContent = `Points : ${m }`;
             m += 1
            // Case when computer chooses scissors
            countc.textContent = `Points : ${m }`;
        } 
        else {
            // Case when none of the above conditions are met
            console.log("Not Tie");
        }
        }
    
}


const display2 = () =>{
    //console.log(player)
    
   // count.textContent = `Points : ${n}`
   
const countp = document.getElementById("countp")
const countc = document.getElementById("countc")
    console.log(countp)
    let computer = ['rock','paper','scissors']
    const a = computer.length
    let q = Math.floor(Math.random()*a)
    let player = "rock"
    if(player === "rock")
        {
        console.log(`${player} - ${computer[q]}`)
        if (player == computer[q]) {
            // Case when it's a tie
            countp.textContent = `Points : Tie`;
            countc.textContent = `Points : Tie`
        } 
        else if (computer[q] == 'scissors') {
            countp.textContent = `Points : ${n }`;
            countc.textContent = `Points : ${m }`;
             n +=1
            // Case when computer chooses rock
            countp.textContent = `Points : ${n }`;
        } 
        else if (computer[q] == 'paper') {
            countp.textContent = `Points : ${n }`;
            countc.textContent = `Points : ${m }`;
             m += 1
            // Case when computer chooses scissors
            countc.textContent = `Points : ${m }`;
        } 
        else {
            // Case when none of the above conditions are met
            console.log("Not Tie");
        }
        }
    
}
//syntax : .addEventListener(event,function,useCapture)
paper.addEventListener("click",display,false)
scissors.addEventListener("click",display1,false)
rock.addEventListener("click",display2,false)
