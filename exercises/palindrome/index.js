// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    let revStr = '';

    for(let character of str) {
        revStr = character + revStr;
    }

    let coolerAnswer = str.split('').every((char, i) => {
        return char == str.charAt(str.length - i - 1);
    } );

    console.log("coolerAnswer = " + coolerAnswer);

    return str == revStr;
}

module.exports = palindrome;
