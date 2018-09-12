function insertionSort(arr) {
    var itemToInsert;
    for (var i = 1; i < arr.length; i++) {
        itemToInsert = a[i];
        for (var j = i - 1; j >= 0 && itemToInsert < arr[j]; j--) {
            arr[j + 1] = arr[j];
        }

        arr[++j] = itemToInsert;
    }

    return arr;
}

module.exports = insertionSort; 