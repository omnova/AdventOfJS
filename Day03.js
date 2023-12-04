function part1(input) {
  let partNumberTotal = 0;
  const lines = input.split("\r\n");

  //input.split(/\D/).filter((element) => element.length > 0).forEach(element => partNumberTotal += Number.parseInt(element));
  for (let i = 0; i < input.split("\r\n").length; i++) {
    for (let j = 0; j < input.indexOf("\r"); j++) {
      
      let currentNumber = '';
      let hasAdjacentSymbol = false;

      while (j < input.indexOf("\r") && !Number.isNaN(Number.parseInt(lines[i][j]))) {
        for (let x = Math.max(0, i - 1); x < Math.min(input.split("\r\n").length, i + 2); x++) {
          for (let y = Math.max(0, j - 1); y < Math.min(input.indexOf("\r"), j + 2); y++) {
            if (!(x === i && y === j) && Number.isNaN(Number.parseInt(lines[x][y])) && lines[x][y] !== '.')
              hasAdjacentSymbol = true;
          }
        }

        currentNumber += lines[i][j++];
      }

      if (currentNumber !== '' && hasAdjacentSymbol)
        partNumberTotal += Number.parseInt(currentNumber);
    }
  }

  return partNumberTotal;
}


function part2(input) {
  
}


// Boilerplate

const filename = require('path').basename(__filename);
const day = filename.substring(3, filename.length - 3);
const input = require('fs').readFileSync('Day' + day + '.txt', 'utf8');

console.log('Day ' + Number.parseInt(day));
console.log('Part 1: ' + part1(input));
console.log('Part 2: ' + part2(input));
