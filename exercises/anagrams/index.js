// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    //let stringAIndex = [];
    //let stringBIndex = [];

    /*let strippedA = stringA.toLowerCase().replace(/[^a-z0-9]/gi,'');
    let strippedB = stringB.toLowerCase().replace(/[^a-z0-9]/gi,'');

    for(let char of strippedA) {
        if(!stringAIndex[char]) {
            stringAIndex[char] = 1;
        } else {
            stringAIndex[char]++;
        }
    }

    for(let char of strippedB) {
        if(!stringBIndex[char]) {
            stringBIndex[char] = 1;
        } else {
            stringBIndex[char]++;
        }
    }
    stringAIndex.sort();
    stringBIndex.sort();*/

    let stringAIndex = buildCharMap(stringA);
    let stringBIndex = buildCharMap(stringB);

    //console.log(stringAIndex);
    //console.log(stringBIndex);

    let isSame = (Object.keys(stringAIndex).length == Object.keys(stringBIndex).length);
    for(char in stringAIndex) {
        if(stringAIndex[char] != stringBIndex[char]) {
            isSame = false;
            break;
        }
    }

    console.log(isSame);

    return isSame;

}

function buildCharMap(str) {
    const charMap = {};

    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    
    return charMap;
}


module.exports = anagrams;
