// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {

    const matrix = [];
    let cnt = 1;
    let startRow = 0;
    let startColumn = 0;
    let endRow = n-1;
    let endColumn = n-1;

    for(let row = 0; row <n; row++) {
        matrix.push([]);
    }

    while(startColumn <= endColumn && startRow <= endRow) {

        // TOP ROW
        for(let currCol = startColumn; currCol <= endColumn ; currCol++) {
            matrix[startRow][currCol] = cnt++;
        }

        startRow++;

        // RIGHT COLUMN
        for(let currRow = startRow; currRow <= endRow ; currRow++) {
            matrix[currRow][endColumn] = cnt++;
        }

        endColumn--;

        // BOTTOM ROW
        for(let currCol = endColumn; currCol >= startColumn ; currCol--) {
            matrix[endRow][currCol] = cnt++;
        }

        endRow--;

        // START COLUMN
        for(let currRow = endRow; currRow >= startRow; currRow--) {
            matrix[currRow][startColumn] = cnt++;
        }

        startColumn++;
    }

    console.log(matrix);

    return matrix;
}

module.exports = matrix;
