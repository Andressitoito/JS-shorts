// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// // 2047. Number of Valid Words in a Sentence
// var countValidWords = function (sentence) {
//   console.log(sentence);

//   const array = sentence.split(' ');
//   console.log(array);
//   const regex = /[a-z]/g;

//   let valids = 0;

//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//     const word = array[i];
//     if (word === '') continue;
//     const str = word.match(regex).join('');

//     if (word === str) {
//       valids++;
//     }
//   }

//   console.log(valids);
// };

// countValidWords('alice and  bob are playing stone-game10');
