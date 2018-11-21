class SibTreeNode {
    constructor(item, parent = null, firstChild = null, nextSibling = null) {
        this.item = item;
        this.parent = parent;
        this.firstChild = firstChild;
        this.nextSibling = nextSibling;
    }

    preorder(visit) {
        visit(this); 
        if (this.firstChild !== null) {
            this.firstChild.preorder(visit); 
        }

        if (this.nextSibling !== null) {
            this.nextSibling.preorder(visit); 
        }
    }

    // the length of the path from n to root 
    depth() {
        if (this.isRoot()) {
            return 0;
        } else {
            return 1 + this.parent.depth();
        }
    }

    // the length of the path from n to its deepest descendant
    height() {
        var h = 0;
        var c = this.firstChild;

        while (c !== null) {
            h = Math.max(h, c.height() + 1)
            c = c.firstChild;
        }

        return h;
    }

    isRoot() {
        return this.parent === null;
    }
}
