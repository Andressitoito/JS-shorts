///////////////////////////////////////////////
// 2047. Number of Valid Words in a Sentence
///////////////////////////////////////////////
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

///////////////////////////////////////////////
// 2483. Minimum Penalty for a Shop
///////////////////////////////////////////////
// var bestClosingTime = function (customers) {
//   console.log(customers);

//   let penalty = {
//     // 0: 0,
//   };

//   // console.log(penalty);

//   // for (let i = 0; i < customers.length; i++) {
//   //   if (customers[i] === 'Y') {
//   //     penalty[0]++;
//   //   }
//   // }

//   console.log(penalty);

//   for (let i = 0; i < customers.length; i++) {
//     let penal = 0;

//     let time = i + 1;

//     const storeOpen = customers[i];

//     console.log('/////////////////////');
//     console.log('Time Close ', time);

//     for (let j = 0; j < customers.length; j++) {
//       console.log('--------------------------------');
//       const client = customers[j];
//       // console.log(customers[j], 'storeOpen yes or no ', customers[i]);

//       if (i === j) {
//       }

//       if (j <= i) {
//         console.log(
//           'CLOSED',
//           storeOpen,
//           'clients --->',
//           customers[j],
//           '          ',
//           'client -->',
//           client,
//           'CLOSED ',
//           storeOpen
//         );
//         if (storeOpen === 'Y' && client === 'Y') {
//           penal++;
//           console.log(
//             `CLOSED? ${storeOpen} && client? ${client} ---> %cPENALTY`,
//             'color: red; font-size: larger'
//           );
//         }
//       } else {
//         console.log(
//           'OPEN   ',
//           storeOpen,
//           'clients --->',
//           customers[j],
//           '          ',
//           'client -->',
//           client,
//           'OPEN ',
//           storeOpen
//         );
//         if (storeOpen === 'N' && client === 'Y') {
//           penal++;
//           console.log(
//             `OPEN? ${storeOpen} && client? ${client} ---> %cPENALTY`,
//             'color: yellow; font-size: larger'
//           );
//         }
//       }
//     }

//     penalty[`Time ${i + 1}`] = penal;
//   }

//   console.table(penalty);
// };

// bestClosingTime('YYNY');

///////////////////////////////////////////////
// 482. License Key Formatting
///////////////////////////////////////////////
// var licenseKeyFormatting = function (s, k) {
//   console.log(s, 'k ==>', k);

//   let count = 0;
//   const sentence = s.split('').reverse();

//   let str = '';

//   const key = [];

//   for (let i = 0; i < sentence.length; i++) {

//     if (count === k) {
//       count = 0;
//       key.push(str);
//       str = '';
//     } else {
//       if (sentence[i] !== '-') {
//         str += sentence[i].toUpperCase();

//         if (sentence[i + 1] === undefined) {
//           key.push(str);
//         }

//         count++;
//       }
//     }
//     console.log(str);
//   }

//   console.log(key);

//   for (let i = 0; i < key.length; i++) {
//     console.log(key[i])
//      key[i] = key[i].split('').reverse().join('')

//   }

//   console.log(key)
//   const license = key.reverse().join('-')

//   console.log(license)

//   return license
// };

// licenseKeyFormatting('5F3Z-2e-9-w', 4);

///////////////////////////////////////////////
// 824. Goat Latin
///////////////////////////////////////////////
// var toGoatLatin = function (sentence) {
//   const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

//   const splitted = sentence.split(' ');

//   let strArr = [];

//   for (let i = 0; i < splitted.length; i++) {
//     console.log(splitted[i]);

//     const isVowel = vowels.includes(splitted[i][0]);

//     console.log(isVowel);

//     const a = 'a'.repeat(i + 1);

//     if (isVowel) {
//       strArr.push(`${splitted[i]}ma${a}`);
//     } else {

//       const word = `${splitted[i].slice(1)}${splitted[i][0]}ma${a}`

//       console.log(word)

//       strArr.push(word)

//     }
//   }

//   console.log(strArr);

//   const response = strArr.join(' ')

//   console.log(response)

//   return response
// };

// toGoatLatin('The quick brown fox jumped over the lazy dog');

///////////////////////////////////////////////
// 49. Group Anagrams
///////////////////////////////////////////////
var groupAnagrams = function (strs) {
  console.table(strs);

  let groups = [];

  const start = strs[0].split('').sort().join('');
  const sortedStr = strs.map((str) => {
    console.log(str.split('').sort().join(''));
    const sorted = str.split('').sort().join('');
    return sorted;
  });

  console.log()
  const unique = []
  for (let i = 0; i < sortedStr.length; i++) {
    if(!unique.includes(sortedStr[i])) {
      unique.push(sortedStr[i])
    }
    
  }

  console.log(unique)

  for (let i = 0; i < unique.length; i++) {
    const uniq = []

    for (let j = 0; j < strs.length; j++) {

      const formedStr = strs[j].split('').sort().join('')
      console.log(formedStr)


    }


  }
};

groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
