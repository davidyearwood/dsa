function removeDuplicates(list) {
    var buffer = new SList();
    var a = buffer.head;
    var b = list.head;

    if (a === null) {
        buffer.insertFront(b.item);
    }

    while (b !== null) {
        a = buffer.head;
        while (a !== null) {
            if (a.item === b.item) {
                break;
            }

            if (a.next === null) {
                buffer.insertFront(b.item);
            }

            a = a.next; 
        }
        b = b.next;
    }

    return buffer;
}

module.exports = removeDuplicates; 
