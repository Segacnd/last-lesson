const firstDogImage = document.querySelector(".firstDog");
const secondDogImage = document.querySelector(".secondDog");
const thirdDogImage = document.querySelector(".thirdDog");
const fourthDogImage = document.querySelector(".fourthDog");
const fifthDogImage = document.querySelector(".fifthDog");
const sixthDogImage = document.querySelector(".sixthDog");
const seventhDogImage = document.querySelector(".seventhDog");
const eighthDogImage = document.querySelector(".eighthDog");
const ninthDogImage = document.querySelector(".ninthDog");

const changePositionButton = document.querySelector("#changePositionButton");

/* console.log((Math.random() * 101).toFixed()); */

function dogSetRandomPosition(dogImage) {
  let posx = (Math.random() * 85).toFixed();
  let posy = (Math.random() * 85).toFixed();

  dogImage.style.top = posy + "%";
  dogImage.style.right = posx + "%";
}

changePositionButton.addEventListener("click", () => {
  dogSetRandomPosition(firstDogImage);
  dogSetRandomPosition(secondDogImage);
  dogSetRandomPosition(thirdDogImage);
  dogSetRandomPosition(fourthDogImage);
  dogSetRandomPosition(fifthDogImage);
  dogSetRandomPosition(sixthDogImage);
  dogSetRandomPosition(seventhDogImage);
  dogSetRandomPosition(eighthDogImage);
  dogSetRandomPosition(ninthDogImage);
});
