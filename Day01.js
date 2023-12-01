function part1(input) {
  return input.split("\r\n").reduce((result, line) => {
    let lineResult = 0;

    for (let i = 0; i < line.length; i++) {
      let index = '0123456789'.indexOf(line.charAt(i));

      if (index > -1) {
        lineResult = index * 10;
        break;
      }
    }

    for (let i = line.length - 1; i >= 0; i--) {
      let index = '0123456789'.indexOf(line.charAt(i));

      if (index > -1) {
        lineResult += index;
        break;
      }
    }

    return result + lineResult;
  }, 0);
}


function part2(input) {
  const values = Array('zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine')

  return input.split("\r\n").reduce((result, line) => {
    let lineResult = 0;

    for (let i = 0; i < line.length; i++) {
      let index = '0123456789'.indexOf(line.charAt(i));

      if (index > -1) {
        lineResult = index * 10;
        break;
      }
      else {
        let found = false;

        for (let j = 0; j < 10; j++) {
          if (line.indexOf(values[j]) === i) {
            lineResult = j * 10;
            found = true;
            break;
          }
        }

        if (found)
          break;
      }
    }

    for (let i = line.length - 1; i >= 0; i--) {
      let index = '0123456789'.indexOf(line.charAt(i));

      if (index > -1) {
        lineResult += index;
        break;
      }
      else {
        let found = false;

        for (let j = 0; j < 10; j++) {
          if (line.lastIndexOf(values[j]) > -1 && line.lastIndexOf(values[j]) + values[j].length - 1 === i) {
            lineResult += j;
            found = true;
            break;
          }
        }

        if (found)
          break;
      }
    }

    return result + lineResult;
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