function binarySearch(arr, value) {
    if (arr.length === 1) {
        return arr[0] === value;
    }
    
    var mid = Math.ceil(arr.length / 2); 
    
    if (value === arr[mid]) {
        return true; 
    }

    return (value > arr[mid]) ? binarySearch(arr.slice(mid), value) : binarySearch(arr.slice(0, mid), value);
}