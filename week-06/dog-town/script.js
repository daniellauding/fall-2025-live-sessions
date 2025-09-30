const DOGS = [
  {
    name: 'Alfons',
    img: 'assets/dog1.jpg',
    fur: 'Brown',
    puppy: false,
  },
  {
    name: 'Bingo',
    img: 'assets/dog2.jpg',
    fur: 'Brown',
    puppy: false,
  },
  {
    name: 'Cecilia',
    img: 'assets/dog3.jpg',
    fur: 'miXed',
    puppy: true,
  },
  {
    name: 'Doggo',
    img: 'assets/dog4.jpg',
    fur: 'black',
    puppy: true,
  },
  {
    name: 'Eddie',
    img: 'assets/dog5.jpg',
    fur: 'grey',
    puppy: true,
  },
  {
    name: 'Flora',
    img: 'assets/dog6.jpg',
    fur: 'mixed',
    puppy: true,
  },
  {
    name: 'Gullan',
    img: 'assets/dog7.jpg',
    fur: 'black',
    puppy: false,
  }
]

const container = document.getElementById('container')

const showDogs = (dogsArray) => {
  container.innerHTML = '' // resetting the container before filling it

  dogsArray.forEach(dog => {
    container.innerHTML += `
      <div class="card">
        <p>${dog.name}</p>
        <img src=${dog.img} alt=${dog.name} />
        <p>${dog.fur}</p>
        <p>${dog.puppy ? '🐶' : '🐕'}</p>
      </div>
    `
  })
}

showDogs(DOGS)

// const showDogs = () => DOGS.map((dog) => {
//   return `
//     <div class="card">
//       <img src=${dog.img} />
//       <p>${dog.name}</p>
//       <p>${dog.fur}</p>
//       <p>${dog.puppy}</p>
//     </div>
//   `
// });

// console.log(showDogs);

showDogs(DOGS.filter(dog => dog.name === 'Cecilia'));

// container.innerHTML = showDogs(DOGS);

// console.log(showDogs(DOGS));