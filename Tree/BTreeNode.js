class BTreeNode {
    constructor(item, parent = null, leftChild = null, rightChild = null) {
        this.item = item; 
        this.parent = parent; 
        this.leftChild = leftChild;
        this.rightChild = rightChild; 
    }
}

function noSibs(T) {
    printNoSibs(T);
    if (T.leftChild !== null) {
        noSibs(T.leftChild); 
    }

    if (T.rightChild !== null) {
        noSibs(T.rightChild); 
    } 
}

function printNoSibs(T) {
    if (T.leftChild !== null && T.rightChild === null) {
        console.log(T.leftChild.item);
    }

    if (T.rightChild !== null && T.leftChild === null) {
        console.log(T.rightChild.item);
    }
}

var root = new BTreeNode(0);
var one = new BTreeNode(1);
var two = new BTreeNode(2);
var three = new BTreeNode(3);
var six = new BTreeNode(6);
var four = new BTreeNode(4);
var five = new BTreeNode(5);
var seven = new BTreeNode(7);
var eight = new BTreeNode(8); 

root.leftChild = one;
root.rightChild = two;

one.leftChild = three;
one.rightChild = four;

two.leftChild = five;

five.rightChild = seven;

three.rightChild = six;
six.rightChild = eight; 

noSibs(root);