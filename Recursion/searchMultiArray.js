function locate(arr, value) {
    var found = false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }

        if (Array.isArray(arr[i])) {
            found = locate(arr[i], value);
        }
    }
    return found;
}


var locate = function (arr, v) {
    return arr.some(function (e) {
        return Array.isArray(e) ? locate(e, v) : e === v;
    });
}