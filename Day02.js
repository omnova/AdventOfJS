function part1(input) {
  let gameId = 0;

  return input.split("\r\n").reduce((result, game) => {    
    gameId++;

    const hands = game.split(': ')[1].split(/[;,]/)

    for (let i = 0; i < hands.length; i++) {
      const amount = hands[i].trim().split(' ')[0];
      const color = hands[i].trim().split(' ')[1];

      if ((color == 'red' && amount > 12) || (color == 'green' && amount > 13) || (color == 'blue' && amount > 14))
        return result;
    }

    return result += gameId;
  }, 0);
}


function part2(input) {
  return input.split("\r\n").reduce((result, game) => {    
    
    const valueMap = new Map();
    valueMap.set('red', 0);
    valueMap.set('green', 0);
    valueMap.set('blue', 0);
    
    const hands = game.split(': ')[1].split(/[;,]/)

    for (let i = 0; i < hands.length; i++) {
      const amount = hands[i].trim().split(' ')[0];
      const color = hands[i].trim().split(' ')[1];

      valueMap.set(color, Math.max(valueMap.get(color), amount));
    }

    return result + (valueMap.get('red') * valueMap.get('green') * valueMap.get('blue'));
  }, 0);
}


// Boilerplate

const filename = require('path').basename(__filename);
const day = filename.substring(3, filename.length - 3);
const input = require('fs').readFileSync('Day' + day + '.txt', 'utf8');

console.log('Day ' + Number.parseInt(day));
console.log('Part 1:');
console.log(part1(input));
console.log('Part 2:');
console.log(part2(input));