const Stack = require('./stack');
// My Way
function isDelimiterBalance(delimiters) {
    var stack = new Stack(delimiters.length);
    for (var i = 0; i < delimiters.length; i++) {
        if (isOpenDelimiter(delimiters[i])) {
            stack.push(delimiters[i]);
        }

        if (isCloseDelimiter(delimiters[i])) {
            if (!stack.isEmpty()) {
                if (!doesDelimitersMatch(stack.pop(), delimiters[i])) {
                    return false;
                }
            }
        }
    }

    if (!stack.isEmpty()) {
        return false;
    }

    return true;
}

function doesDelimitersMatch(openDelimiter, closeDelimiter) {
    switch (openDelimiter) {
        case "[":
            return closeDelimiter === "]";
        case "{":
            return closeDelimiter === "}"
        case "(":
            return closeDelimiter === ")";
    }
}

function isOpenDelimiter(d) {
    return d === "(" || d === "[" || d === "{";
}

function isCloseDelimiter(d) {
    return d === ")" || d === "]" || d === "}";
}

module.exports = isDelimiterBalance;