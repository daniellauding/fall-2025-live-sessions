// THIS IS THE VERSION WIHOUT GLOBAL SCOPE, USING RETURN IN THE FUNCTIONS INSTEAD!!

const result = document.getElementById('result')
const button = document.getElementById('button')


const getUserWeapon = () => {
  userWeapon = document.querySelector('input[name="weapon"]:checked').value

  return userWeapon
}


const getComputerWeapon = () => {
  const randomNumber = Math.floor(Math.random() * 3)

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

  return computerWeapon
}





const getWinner = (computerWeapon, userWeapon) => {
  if (computerWeapon === userWeapon) {
    return "It's a tie!"
  } else if (
    (computerWeapon === "scissors" && userWeapon === "rock") ||
    (computerWeapon === "rock" && userWeapon === "paper") ||
    (computerWeapon === "paper" && userWeapon === "rock")
  ) {
    return "You win!"
  }
  else {
    return "The computer wins"
  }
}


const playGame = () => {
  const userWpn = getUserWeapon()
  const computerWpn = getComputerWeapon()
  const winnerResult = getWinner(userWpn, computerWpn)

  result.innerHTML = `
    <p>The user chose: ${userWpn}</p>
    <p>The computer chose: ${computerWpn}</p>
    <p>${winnerResult}</p>
  `
}



button.addEventListener('click', playGame)
