/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) {
      return "Error";
    }

    if (!this.head) {
      return null;
    }

    // head of first node in linkedlist
    let current = this.head;
    // we set previous = to null for first run through
    let previous = null;

    // current.next is the next node
    while (current.next) {
      // we set previous to our current head then set the next node to our current until we reach the end of the linkedlist where current.next is null
      previous = current;
      current = current.next;
    }
    // we then set the tail to the previous node we set in our while loop, removing our current
    this.tail = previous;

    // the value would be the current node we are on
    const value = current.val;

    // if previous is null, we set head to null and the linkedlist has no more elements

    // else we set previous.next to null as there is still a head left.
    if (!previous) {
      this.head = null;
    } else {
      previous.next = null;
    }
    this.length--;

    return value;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) {
      return "Error";
    }

    const old = this.head;
    this.head = old.next;
    old.next = null;
    this.length--;
    if (!this.head) {
      this.tail = null;
    }
    return old.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let counter = 0;
    let current = this.head;
    while (current) {
      if (counter === idx) {
        return current.val;
      }
      counter++;
      current = current.next;
    }
    return "Error";
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let counter = 0;
    let current = this.head;
    while (current) {
      if (counter === idx) {
        current.val = val;
        return current.val;
      }
      counter++;
      current = current.next;
    }
    return "Error";
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0) {
      return "error";
    }
    if (idx === 0) {
      this.head = new Node(val, this.head);
      // if this is the first element in the list
      if (!this.tail) {
        this.tail = this.head;
      }
      this.length++;
      return;
    }
    // creates the new node
    const newNode = new Node(val);

    // current node we are on is current, prev is null since this is the first element
    let current = this.head;
    let prevNode = null;
    let count = 0;

    // if current is not the element after the tail or before the head and the count is less than the idx, we keep iterating through the linkedlists

    while (current && count < idx) {
      prevNode = current;
      current = current.next;
      count++;
    }

    // once count is equal to the index, we set the prev node to our new node and the next node to the node that  we are currently on, effectievly pushing the whole list one over to the right

    if (count === idx) {
      prevNode.next = newNode;
      newNode.next = current;
    }

    // if current doesent exist, it means we are at the end of the list so we just set the tail to newNode
    if (!current) {
      this.tail = newNode;
    }

    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      return "Error";
    }

    // keep track of the node we remove
    let removedNode;

    // only 1 element in the linkedlist
    if (this.length === 1) {
      removedNode = this.head;
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      let prevNode = null;
      let count = 0;
      while (count < idx) {
        prevNode = current;
        current = current.next;
        count++;
      }
      removedNode = current;
      if (current === this.head) {
        this.head = current.next;
      } else if (current === this.tail) {
        prevNode.next = null;
        this.tail = prevNode;
      } else {
        prevNode.next = current.next;
      }
    }

    this.length--;
    return removedNode.val;
  }

  /** average(): return an average of all values in the list */

  average() {}
}

function example() {
  const list = new LinkedList([5, 10]);
  console.log(list);
  console.log("****************");
  console.log(list.getAt(0));
}

console.log(example());

module.exports = LinkedList;
