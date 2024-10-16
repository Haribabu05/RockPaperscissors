// Online Javascript Editor for free
let computer = ['rock','paper','scissor']
const a = computer.length
let q = Math.floor(Math.random()*a)
let player = 'paper'
console.log(`${player} - ${computer[q]}`)
 const answer = player == computer[q] ? console.log("Tie!") : computer[q] == 'scissor' ? console.log("player Wins") : computer[q] == 'rock' ? console.log("computer Wins") : console.log("Not Tie")

