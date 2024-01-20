'use strict';
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// Coding Challenge #4
// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs):
// underscoreCase
// ✅
// firstName
// ✅✅
// someVariable
// ✅✅✅
// calculateAge
// ✅✅✅✅
// delayedDeparture
// ✅✅✅✅✅

// const word = 'first_name';
// console.log(word[word.indexOf('_') + 1]);
// console.log(word.replace());

document.querySelector('button').addEventListener('click', function () {
  const testData = document.querySelector('textarea').value;

  const corectFormat = function (testData) {
    const arrayOfWords = testData.split(' ').filter(value => value);
    const arrayOfFormatedWords = [];
    let padCount = 24;
    for (const [index, word] of arrayOfWords.entries()) {
      const lowerCaseWord = word.toLowerCase().trim();
      const formatedWord =
        lowerCaseWord.split('_')[0] +
        lowerCaseWord
          .split('_')[1]
          .replace(
            lowerCaseWord.split('_')[1].slice(0, 1),
            lowerCaseWord.split('_')[1].slice(0, 1).toUpperCase()
          );
      arrayOfFormatedWords.push(
        `\n${formatedWord.padEnd(20)}${'✅'.repeat(index + 1)}`
      );
      padCount = 25;
    }
    return arrayOfFormatedWords.join('');
  };
  console.log(corectFormat(testData));
});
