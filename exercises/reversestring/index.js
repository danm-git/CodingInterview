// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reverseString = '';

    //Option 1
    //for( i = str.length -1 ; i >= 0 ; i--)
    for (let character of str) {
        //console.log ('character = ' + character);
        //console.log('reverseString = ' + reverseString);
        reverseString = character + reverseString;
    }

    //Option 2
    let option2 = str.split('').reverse().join('');
    console.log('option2: ' + option2);

    //Option 3
    let option3 = str.split('').reduce((rev, char) =>  char + rev, '');
    console.log('option3 = ' + option3);

    return reverseString;
}

module.exports = reverse;
