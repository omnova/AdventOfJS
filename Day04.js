function part1(input) {
  return input.split("\r\n").reduce((result, card) => {    
    const winningNumbers = card.split(': ')[1].split(' | ')[0].split(' ').filter(number => number !== '');
    const numbers = card.split(': ')[1].split(' | ')[1].split(' ').filter(number => number !== '');
    
    const winCount = numbers.filter(number => winningNumbers.includes(number)).length;

    return result += Math.floor(Math.pow(2, winCount - 1));
  }, 0);
}


function part2(input) {
  const cardCopies = new Array();

  for (let i = 0; i < input.split("\r\n").length; i++) {
    cardCopies[i] = 1;
  }

  return input.split("\r\n").reduce((result, card, cardId) => {    
    const winningNumbers = card.split(': ')[1].split(' | ')[0].split(' ').filter(number => number !== '');
    const numbers = card.split(': ')[1].split(' | ')[1].split(' ').filter(number => number !== '');

    const winCount = numbers.filter(number => winningNumbers.includes(number)).length;

    for (let i = 1; i <= winCount; i++) {
      cardCopies[cardId + i] += cardCopies[cardId];
    }

    return result += cardCopies[cardId];
  }, 0);
}


// Boilerplate

const filename = require('path').basename(__filename);
const day = filename.substring(3, filename.length - 3);
const input = require('fs').readFileSync('Day' + day + '.txt', 'utf8');

console.log('Day ' + Number.parseInt(day));
console.log('Part 1: ' + part1(input));
console.log('Part 2: ' + part2(input));
