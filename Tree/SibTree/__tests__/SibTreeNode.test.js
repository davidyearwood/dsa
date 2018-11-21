const SibTreeNode = require("../SibTreeNode");
const assert = require("chai").assert;

const intializeTree = function intializeTree() {
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

  return root;
}


test('Tree root has a value of ~jrs/61b', () => {
  var tree = intializeTree();
  assert.strictEqual(tree.item, "~jrs/61b");
});

describe('Initialize Tree method', () => {

  test('Tree root has a value of ~jrs/61b', () => {
    var tree = intializeTree();
    assert.strictEqual(tree.item, "~jrs/61b");
  });

});

describe('Tree Traversals', () => {
  var tree;
  var itemsInTree;

  function concatToArray(node) {
    itemsInTree.push(node.item);
  }

  beforeEach(() => {
    tree = intializeTree();
    itemsInTree = [];
  });

  /* ~jrs/61b hw hw1 hw2 index.html lab lec */
  test('preorder should return tree items in a preorder order', () => {
    var expected = '~jrs/61b hw hw1 hw2 index.html lab lect';

    tree.preorder(concatToArray);

    var actual = itemsInTree.join(' ');
    assert.strictEqual(actual, expected);
  });

  test('inorder should return tree items in inorder', () => {});
  test('postorder should return tree items in postorder', () => {});
});