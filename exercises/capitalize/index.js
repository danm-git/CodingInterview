// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let returnString = '';

    //Loop through each letter - If space before it then cap
    for(let word of str.split(' ')) {
        console.log(word);
        returnString += word.charAt(0).toUpperCase() + word.slice(1) + ' ';
        console.log(returnString);
    }

    return returnString.trim();
}

module.exports = capitalize;
