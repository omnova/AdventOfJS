function part1(input) {
  const maxAmounts = {'red': 12, 'green': 13, 'blue': 14};  

  return input.split("\r\n").reduce((result, game, gameId) => {    

    for (const hand of game.split(': ')[1].split(/[;,]/)) {
      const amount = hand.trim().split(' ')[0];
      const color = hand.trim().split(' ')[1];

      if (amount > maxAmounts[color])
        return result;
    }

    return result += gameId + 1;
  }, 0);
}


function part2(input) {
  return input.split("\r\n").reduce((result, game) => {    
    const requiredAmounts = {'red': 0, 'green': 0, 'blue': 0};    

    for (const hand of game.split(': ')[1].split(/[;,]/)) {
      const amount = hand.trim().split(' ')[0];
      const color = hand.trim().split(' ')[1];

      requiredAmounts[color] = Math.max(requiredAmounts[color], amount);
    }

    return result + (requiredAmounts['red'] * requiredAmounts['green'] * requiredAmounts['blue']);
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