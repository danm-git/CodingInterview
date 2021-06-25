// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {}; 
    let maxValue = 0;
    let maxChar = '';

    for(let char of str) {
        if(!charMap[char]) {
            charMap[char] = 1;
        } else {
            charMap[char]++;
        }
    }

    console.log(charMap);
    
    for(let char in charMap) {
        if(charMap[char] > maxValue) {
            maxValue = charMap[char];
            maxChar = char;
        }
    }

    //console.log('maxChar=' + maxChar);
    //console.log('maxValue=' + maxValue);

    return maxChar;
}

module.exports = maxChar;
