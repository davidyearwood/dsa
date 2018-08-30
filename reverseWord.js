const Stack = require('./stack');

function reverseWord(word) {
    var stack = new Stack(word.length); 
    var reverseStr = ""; 

    for (var i = 0; i < word.length; i++) {
        stack.push(word[i]); 
    }

    while(!stack.isEmpty()) {
        reverseStr += stack.pop(); 
    }

    return reverseStr; 
}

module.exports = reverseWord; 