console.log("Hello JavaScript")

const computerWeapon = "scissors"
const userWeapon = prompt("Choose from rock, paper and scissors")

console.log("Userweapon:", userWeapon)

if (computerWeapon === userWeapon) {
  console.log("It's a tie!")
} else if (computerWeapon === "scissors" && userWeapon === "rock") {
  console.log("You win!")
} else if (computerWeapon === "scissors" && userWeapon === "paper") {
  console.log("The computer wins")
} else {
  console.log("I don't know who won")
}

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