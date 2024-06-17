// setTimeout(function () {
//    const image = document.getElementsByTagName('img')[0];
//    image.src = 'assets/logo-techy.png';
//  }, 5000);
//
// const body = document.querySelector('body');
//
// const button = document.createElement('button');
//
// body.appendChild(button);
//
// button.textContent = 'Valider';
//
// document
//    .getElementsByTagName('button')[0]
//    .addEventListener('click', function () {
//  alert('Button ete apuie!');
//    });

function createImage(url, isFromInternet) {
  const container = document.querySelector('#container');
  const image = document.createElement('img');
  image.src = isFromInternet ? url : 'assets/' + url;

  container.appendChild(image);
}

createImage('logo-techy.png', false);
createImage('yummyYumPic.jpg', false);

//pour age >= 18
// let age;
// age = 18;

function getData(param1, param2) {
  return `${param1} + ${param2}`;
}

const add = (param1, param2) => param1 + ' ' + param2;

console.log(add(param1, param2));
