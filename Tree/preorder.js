function preorder(n, fn) {
    fn(n); 
    if (n.firstChild !== null) {
        preorder(n.firstChild, fn); 
    }

    if (n.nextSibling !== null) {
        preorder(n.nextSibling, fn); 
    }
}