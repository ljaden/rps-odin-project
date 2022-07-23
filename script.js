function getCpuChoice() {
  const choices = ['Rock','Paper','Scissor']
  const cpuChoice = choices[Math.floor(Math.random() * 3)] 

  return cpuChoice
}

function playRound(playerSelection){
  // cpu choice
  const cpuSelection = getCpuChoice()

  // check who won
  const winner = whoWon(playerSelection,cpuSelection)
  // keep score
  let cScore = Number(document.getElementById('cpuScore').textContent)
  let pScore = Number(document.getElementById('playerScore').textContent)
  if (winner.includes('Won')) {
    pScore++
  } else if (winner.includes('Lost')) {
    cScore++
  }

  // display results
  const result = document.getElementById('result')
  result.textContent = `${winner}`
  
  // update score
  let playerScore = document.getElementById('playerScore')
  let cpuScore = document.getElementById('cpuScore')

  playerScore.textContent = pScore
  cpuScore.textContent = cScore

  if(pScore === 5 || cScore === 5) {
    result.textContent = pScore===5? 'YOU WON!':'YOU LOST!'
    // reset score
    playerScore.textContent = 0
    cpuScore.textContent = 0
  } 

}

// function game(){
//   let score = {"YOU":0,"CPU":0}

//   for(let i=0; i<5;i++){
//     let game = playRound()
//     console.log(game)

//     if(game.includes('Won')) {
//       score['YOU']++
//     } else if(game.includes('Lost')) {
//       score['CPU']++
//     }
//     console.log('SCORE: ',score)
//   }
//   return score['YOU']>=3? "YOU ARE THE WINNER": score['CPU']>=3? "YOU LOST": "IT'S A TIE "
// }

// const choice = document.querySelectorAll('.choice')
// choice.forEach(btn => {
//   btn.addEventListener('click', (e) => {
//     let selection = btn.innerHTML
//     playRound(selection)
//     // console.log(`${btn.innerHTML}`)
//   })
// })

function whoWon(playerSelection, cpuSelection) {
  let wonStatement = `You Won, ${playerSelection} beats ${cpuSelection}`
  let lostStatement = `You Lost, ${cpuSelection} beats ${playerSelection}`
  let drawStatement = "It's a Draw"

  // Player pick 'Rock'
  if(playerSelection === 'Rock'){
    switch (cpuSelection){
      case 'Rock':
        return drawStatement
      case 'Paper':
        return lostStatement
      case 'Scissor':

        return wonStatement
    }
  }
  // Player picks 'Paper'
  if(playerSelection === 'Paper'){
    switch (cpuSelection){
      case 'Rock':
        return wonStatement
      case 'Paper':
        return drawStatement
      case 'Scissor':
        return lostStatement
    }
  }
  // Player picks 'Scissor'
  if(playerSelection === 'Scissor'){
    switch (cpuSelection){
      case 'Rock':
        return lostStatement
      case 'Paper':
        return wonStatement
      case 'Scissor':
        return drawStatement
    }
  }
}

const choice = document.querySelectorAll('.choices')
choice.forEach(btn => {
  btn.addEventListener('click', () => {
    playRound(btn.innerHTML)
  })
})