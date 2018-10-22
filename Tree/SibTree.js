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

class SibTree {
    constructor(root) {
        this.root = root;
        this.size = 0;
    }
}

function preorder(n, fn) {
    fn(n); 
    if (n.firstChild !== null) {
        preorder(n.firstChild, fn); 
    }

    if (n.nextSibling !== null) {
        preorder(n.nextSibling, fn); 
    }
}

var root = new SibTreeNode('~jrs/61b');
var hw = new SibTreeNode('hw');
var hw1 = new SibTreeNode('hw1');
var hw2 = new SibTreeNode('hw2');
var index = new SibTreeNode('index.html');
var lab = new SibTreeNode('lab');
var lec = new SibTreeNode('lect');

root.firstChild = hw;

hw.parent = root;
hw.nextSibling = index;
hw.firstChild = hw1;

hw1.parent = hw;
hw1.nextSibling = hw2;

hw2.parent = hw;

index.parent = root;
index.nextSibling = lab;

lab.parent = root;
lab.nextSibling = lec;

lec.parent = root;

// console.log(height(lec));
console.log(root.height());

root.preorder((n) => { console.log(n.item) });