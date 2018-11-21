
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