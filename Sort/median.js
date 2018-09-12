const insertionSort = require('./insertionSort'); 

function median(arr) {
    arr = insertionSort(arr); 
    var medianPosition = (arr.length + 1) / 2 - 1; 

    return (arr.length % 2 === 0) 
            ? (arr[Math.floor(medianPosition)] + arr[Math.ceil(medianPosition)]) / 2 
            : arr[medianPosition]; 
}
