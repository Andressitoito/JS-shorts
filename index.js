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
var bestClosingTime = function (customers) {
  console.log(customers);

  let penalty = {
    0: 0,
  };

  console.log(penalty);

  for (let i = 0; i < customers.length; i++) {
    if (customers[i] === 'Y') {
      penalty[0]++;
    }
  }

  console.log(penalty);

  for (let i = 0; i < customers.length; i++) {
    let penal = 0;

    // penalty[i + 1] = 0;

    let time = i + 1;

    const open = customers[i];

    // console.log(penal)
    console.log('/////////////////////');
    console.log('Time Close ', time);

    for (let j = 0; j < customers.length; j++) {
      console.log('--------------------------------')
      const client = customers[j];
      // console.log(customers[j], 'open yes or no ', customers[i]);
      if(i === j) {
        console.log(
          'I === J ',
          open,
          'clients --->',
          customers[j],
          '          ',
          'client -->',
          client,
          'CLOSED ',
          open
        );
        penal--

      } 

      if (j >= i) {
        console.log(
          'CLOSED',
          open,
          'clients --->',
          customers[j],
          '          ',
          'client -->',
          client,
          'CLOSED ',
          open
        );
        if (open === 'Y' && client === 'Y') {
          penal++;
          console.log(`CLOSED? ${open} && client? ${client} ---> PENALTY`);
        }

      } else {
        console.log(
          'OPEN   ',
          open,
          'clients --->',
          customers[j],
          '          ',
          'client -->',
          client,
          'OPEN ',
          open
        );
        if (open === 'N' && client === 'Y') {
          penal++;
          console.log(`OPEN? ${open} && client? ${client} ---> PENALTY`);
        }
      }


    }

    penalty[`Time ${i + 1}`] = penal;
  }

  console.table(penalty);
};

bestClosingTime('YYNY');

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
