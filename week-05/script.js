const userChoice = document.getElementById('userWeapon')
const computerChoice = document.getElementById('computerWeapon')
const result = document.getElementById('result')
const button = document.getElementById('button')

let computerWeapon
let userWeapon



const getUserWeapon = () => {
  // userWeapon = prompt("Choose from rock, paper and scissors").toLowerCase()

  userWeapon = document.querySelector('input[name="weapon"]:checked').value

  // const form = document.getElementById('gameForm')
  // userWeapon = form.elements['weapon'].value

  console.log(userWeapon)


  userChoice.innerText = `You chose ${userWeapon}`

}




const getComputerWeapon = () => {
  // set the computerWeapon randomly
  const randomNumber = Math.floor(Math.random() * 3)
  console.log(randomNumber)
  switch (randomNumber) {
    case 0:
      computerWeapon = 'rock'
      break
    case 1:
      computerWeapon = 'paper'
      break
    case 2:
      computerWeapon = 'scissors'
      break
  }


  computerChoice.innerText = `Computer chose ${computerWeapon}`
}





const getWinner = () => {
  // compare thge weapons and show the winner
  if (computerWeapon === userWeapon) {
    // console.log("It's a tie!")
    result.innerText = "It's a tie!"
  } else if (computerWeapon === "scissors" && userWeapon === "rock") {
    // console.log("You win!")
    result.innerText = "You win!"
  } else if (computerWeapon === "scissors" && userWeapon === "paper") {
    // console.log("The computer wins")
    result.innerText = "The computer wins"
  } else {
    // console.log("I don't know who won")
    result.innerText = "I don't know who won"
  }
}


const playGame = () => {
  getUserWeapon()
  getComputerWeapon()
  getWinner()
}



button.addEventListener('click', playGame)




/*
if (computerWeapon === userWeapon) {
  //user and computer has the same
  console.log("It's a tie!")
} else if (computerWeapon === "scissors") {
  //computer has scissors
  if (userWeapon === "rock") {
    //user has rock, computer has scissors
    console.log("User won")
  } else {
    //computer has scissors, user has paper
    console.log("Computer won")
  }
}
  */