const images = document.getElementsByTagName('img');

const imagesCreta = ['images/kreta/kreta_1.JPG', 'images/kreta/kreta_2.JPG', 'images/kreta/kreta_3.JPG'];
const imagesEspania = ['images/hiszpania/hiszpania_1.JPG', 'images/hiszpania/hiszpania_2.JPG', 'images/hiszpania/hiszpania.JPG'];
const imagesPraha = ['images/praga/praga_1.JPG', 'images/praga/praga_2.JPG', 'images/praga/praga.JPG'];
const imagesRodos = ['images/rodos/rodos_1.JPG', 'images/rodos/rodos_2.jpg', 'images/rodos/rodos.JPG'];
let counter = 0;

setInterval(() => {
  counter++;
  if (counter < 3) {
    images[0].setAttribute('src', imagesCreta[counter]);
    images[1].setAttribute('src', imagesEspania[counter]);
    images[2].setAttribute('src', imagesPraha[counter]);
    images[3].setAttribute('src', imagesRodos[counter]);
  } else {
    counter = -1;
  }
}, 3000);

