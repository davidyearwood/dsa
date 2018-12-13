// function BinaryHeap() {} // creates a new empty binary heap
// function insert() {} // adds a new item to the heap 
// function findMin() {} // returns the item with the minimum key value, but doesn't remove it from the heap
// function delMin() {} // returns the item with the minimum key value, removing the item from the heap
// function isEmpty() {} // returns true if the heap is empty, false otherwise
// function size() {} // returns the number of items in the heap 
// function buildHeap(list) {} // builds a new heap from a list of keys 

/*
 * What I know before learning how to implement the binary heap: 
 * Binary heaps are conceptually a tree data structure, but is implemented with an array. 
 * The tree is always a complete tree, each level is filled from left to right before going to a new level
 * It takes O(1), constant time, 
 * Insert is logarthmic 
 * The direct children value must be less than its parent
 * When inserting a new entry, you insert it at the bottom, and then perculate up until it is placed in its 
 * right position
 * When removing the min value, you swap it with the descendant at the bottom, and then perculate the new "min" down 
 * until it finds its right position 
 * Each subtree is a binary heap, so it is recursive
 * Binary heap is used to create priority queues
 * The current position of any node is n
 * To find the n node's parent = Math.roundDownToNearest1(n / 2) 
 * To find the n node's left child = 2n 
 * To find the n node's right child = 2n + 1 
 * The binary heap is a complete tree which makes the operation logarathmic 
 */

class BinaryHeap {
  constructor() {
    this.heap = [0];
    this.currentSize = 0;
  }

  insert(item) {
    this.heap.push(item);
    this.currentSize++;
    this.percUp(this.currentSize); 
  }

  percUp(pos) {
    while (Math.floor(pos / 2) > 0) {
      let parentPos = Math.floor(pos / 2);
      if (this.heap[pos] < this.heap[parentPos]) {
        let temp = this.heap[parentPos];
        this.heap[parentPos] = this.heap[pos];
        this.heap[pos] = temp;
      }
      pos = Math.floor(pos / 2);
    }
  }

  findMin() {
    return this.heap[1];
  }
}


let bh = new BinaryHeap();
bh.insert(5);
bh.insert(9);
bh.insert(11);
bh.insert(14);
bh.insert(18);
bh.insert(19);
bh.insert(21);
bh.insert(33);
bh.insert(17);
bh.insert(27);
bh.insert(2);
console.log(bh.findMin());