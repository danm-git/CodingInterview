// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {

    const midpoint = Math.floor((2 * n - 1)/2);

    //console.log('steps(' + n + ')');
    for(let row = 0; row < n; row++) {
        let outputString = '';

        for(let char = 0; char < 2 * n -1 ; char++) {
            if(midpoint - row <= char && midpoint + row >= char) {
                outputString += '#';
            } else {
                outputString += ' ';
            }
        }

        console.log(outputString);
    }


}

module.exports = pyramid;
