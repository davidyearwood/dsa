function depth(n) {
    if (n.parent === null) {
        return 0; 
    }

    return depth(n.parent) + 1; 
}