const SList = require('./SList');

module.exports = function(a, b) {
    var stack = []; 
    var totalAsList = new SList(); 
    var sumOfA = "";
    var sumOfB = "";
    
    while(a.first() !== null) {
        stack.push(a.deleteFront()); 
        sumOfA = stack.pop() + sumOfA; 
    }

    while(b.first() !== null) {
        stack.push(b.deleteFront());
        sumOfB = stack.pop() + sumOfB; 
    }

    var total = (parseInt(sumOfA, 10) + parseInt(sumOfB, 10)).toString();

    for (var i = 0; i < total.length; i++) {
        totalAsList.insertFront(parseInt(total.charAt(i), 10));
    }

    return totalAsList; 
};
