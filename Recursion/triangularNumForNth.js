function triangularNumForNth(n) {
    if (n === 1) {
        return 1;
    }

    return triangularNumForNth(n - 1) + n;
}

module.exports = triangularNumForNth;