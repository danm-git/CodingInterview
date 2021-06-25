// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {

    //console.log('In array:' + array );
    //console.log('In size:' + size );

    let arrayOfSize = [];
    let arrayStartIndex = 0;

    while (arrayStartIndex < array.length) {
        arrayOfSize.push(array.slice(arrayStartIndex, arrayStartIndex + size));
        arrayStartIndex += size;
    }

    console.log(arrayOfSize);

    //Loop through array and add to currentArray until size is met 
    //Check limit -> If < size then add to array
    //               if size is met then save off the array into array of arrays and create a new one
    /*for(let char of array) {

        if(arrayCnt < size ) {
            currentArray.push(char);
            arrayCnt++;
        } else {
            arrayOfSize.push(currentArray);
            currentArray = [];
            currentArray.push(char);
            arrayCnt = 1;
        } 
    }

    if(arrayCnt > 0) {
        arrayOfSize.push(currentArray);
    }*/

    //console.log(arrayOfSize);

    return arrayOfSize;
}

module.exports = chunk;
