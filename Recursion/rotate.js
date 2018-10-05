function rotate(str) {
    var temp = str.charAt(0);
    var rotatedStr = ""; 
    for (var i = 1; i < str.length; i++) {
        rotatedStr += str.charAt(i);
    }

    return rotatedStr + temp; 
}

