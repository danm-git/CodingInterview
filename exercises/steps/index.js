// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
    /*let outputString = '';

    //console.log('steps(' + n + ')');
    for(let i = 0; i < n; i++) {
        for(let x = 0; x < n; x++) {
            if(x <= i) {
                outputString += '#';
            } else {
                outputString += ' ';
            }
        }

        //console.log('"' + outputString + '"');
        console.log(outputString);
        outputString = '';
    }*/

    if (n === row) {
        return;
    }

    if (n == stair.length) {
        console.log(stair);
        return steps(n, row +1);
    }

    if(stair.length <= row) {
        stair += '#';
    } else {
        stair += ' ';
    }

    steps(n, row, stair);
}

module.exports = steps;
