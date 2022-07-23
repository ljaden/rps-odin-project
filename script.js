function getCpuChoice() {
  const choices = ['Rock','Paper','Scissor']
  const cpuChoice = choices[Math.floor(Math.random() * 3)] 

  return cpuChoice
}

function getUserChoice() {
  let choice

  while(!(choice === 'R' ||choice === 'P' ||choice === 'S')) {
    choice = prompt("Pick One: [R]ock // [P]aper [S]cissor").toUpperCase()
  }
  
  switch (choice){
    case 'R':
      return 'Rock'
    case 'P':
      return 'Paper'
    case 'S':
      return 'Scissor'  
  }
}

function playRound(){
  let playerSelection = getUserChoice(),cpuSelection =getCpuChoice()

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

function game(){
  let score = {"YOU":0,"CPU":0}

  for(let i=0; i<5;i++){
    let game = playRound()
    console.log(game)

    if(game.includes('Won')) {
      score['YOU']++
    } else if(game.includes('Lost')) {
      score['CPU']++
    }
    console.log('SCORE: ',score)
  }
  return score['YOU']>=3? "YOU ARE THE WINNER": score['CPU']>=3? "YOU LOST": "IT'S A TIE "
}