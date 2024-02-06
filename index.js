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
// var groupAnagrams = function (strs) {
//   console.table(strs);

//   let groups = [];

//   const start = strs[0].split('').sort().join('');
//   const sortedStr = strs.map((str) => {
//     console.log(str.split('').sort().join(''));
//     const sorted = str.split('').sort().join('');
//     return sorted;
//   });

//   console.log();
//   const unique = [];
//   for (let i = 0; i < sortedStr.length; i++) {
//     if (!unique.includes(sortedStr[i])) {
//       unique.push(sortedStr[i]);
//     }
//   }

//   console.log(unique);

//   for (let i = 0; i < unique.length; i++) {
//     const uniq = [];
//     const uniqStr = unique[i];
//     console.log('unique string ', uniqStr);

//     for (let j = 0; j < strs.length; j++) {
//       const formedStr = strs[j].split('').sort().join('');
//       console.log('formedStr', formedStr);
//       if (uniqStr === formedStr) {
//         uniq.push(strs[j]);
//       }
//     }

//     console.log('group unique ', uniq);

//     groups.push(uniq);
//   }

//   console.log('%cFinal answer', 'color: yellow', groups);

//   console.table(groups)
// };

// groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);

// MEDIUM STRING
///////////////////////////////////////////////
// 1689. Partitioning Into Minimum Number Of Deci-Binary Numbers
///////////////////////////////////////////////
var minPartitions = function (n) {
  console.log(n);

  const arr_n = n.split('').reverse();
  console.log(arr_n);

  const binarys = [];
  let multiply = 1;

  for (let i = 0; i < arr_n.length; i++) {
    let num = arr_n[i];

    while (num > 0) {
      console.log('num');

      binarys.push(1 * multiply);

      num--;
      // break;
    }
    // binarys.push(num * multiply);

    multiply *= 10;
  }

  console.log(binarys);
};

// minPartitions('932');

///////////////////////////////////////////////
// SLIDING WINDOWS
///////////////////////////////////////////////
function maxSumArr(arr, k) {
  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < arr.length; i++) {
    console.log('///////////////////////////////////');
    for (let j = 0; j < k; j++) {
      console.log(i + j);

      const num = arr[i + j];

      if (num === undefined) {
        break;
      }

      tempSum += num;
    }

    if (tempSum > maxSum) {
      maxSum = tempSum;
      console.log(maxSum);
    }

    tempSum = 0;
  }

  console.log('response ', maxSum);
}

// maxSumArr([3, 5, 4, 5, 6, 2], 3);

///////////////////////////////////////////////
// 1805. Number of Different Integers in a String
///////////////////////////////////////////////
var numDifferentIntegers = function (word) {
  console.log(word);

  const numbers = [];
  let num = '';

  for (let i = 0; i < word.length; i++) {
    const char = word[i];

    if (!isNaN(char)) {
      console.log(char);
      num += char;
    }
    if (isNaN(word[i + 1])) {
      console.log('next one is a char', word[i + 1]);
      num != '' &&
        !numbers.includes(parseInt(num)) &&
        numbers.push(parseInt(num));
      num = '';
    }
  }

  console.log(numbers);

  console.log(numbers.includes('34'));

  const response = numbers.length;

  console.log(response);

  return response;
};

// numDifferentIntegers('a1b01c001');

///////////////////////////////////////////////
// 682. Baseball Game
///////////////////////////////////////////////
var calPoints = function (operations) {
  let record = [];

  for (let i = 0; i < operations.length; i++) {
    const op = operations[i];

    if (op == '+' && i === 0) {
      continue;
    }

    if (!isNaN(op)) {
      console.log('number', op);

      record.push(op * 1);
    } else {
      console.log('NO number', op);

      if (op === '+') {
        const num = record[record.length - 1] + record[record.length - 2];
        record.push(num);
      } else if (op === 'D') {
        const num = record[record.length - 1] * 2;
        record.push(num);
      } else if (op === 'C') {
        record.pop();
      }
    }
  }

  console.log(record);

  let sum = 0;

  for (let i = 0; i < record.length; i++) {
    sum += record[i];
  }

  console.log(sum)

  return sum
};

calPoints(["1","C"]);
