// the length of the path from n to its deepest descendant
function height(p) { 
    var h = -1; 
    while (p !== null) {
        h = Math.max(h, 1 + height(p.firstChild));
        p = p.nextSibling; 
    }
    
    return h; 
}