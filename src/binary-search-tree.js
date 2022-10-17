const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  root() {
    return this.head
  }

  add(data) {
    this.head = addElem(this.head, data);

    function addElem(node, data){

      if(!node) {
        return new Node(data)
      }
      
      if(node.data === data) {
        return node
      }

      if(data < node.data) {
        node.left = addElem(node.left, data)
      } else {
        node.right = addElem(node.right, data)
      }

      return node
    }
  }

  has(data) {
    return seachElem(this.head, data)

    function seachElem(node, data) {
      if(!node) {
        return false;
      }

      if(node.data === data) {
        return true;
      }

      return (data < node.data) ?
        seachElem(node.left, data) :
        seachElem(node.right, data);
    }

  }

  find(data) {
    return findElem(this.head, data)

    function findElem(node, data) {
      if(!node) {
        return null;
      }

      if(node.data === data) {
        return node;
      }

      return (data < node.data) ?
        findElem(node.left, data) :
        findElem(node.right, data);
    }
  }

  remove(data) {
    this.head = removeElem(this.head, data)

    function removeElem(node, data) {
      if(!node) {
        return null;
      }

      if(data < node.data) {
        node.left = removeElem(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeElem(node.right, data);
        return node;
      } else {
        if(!node.left && !node.right) {
          return null
        }

        if(!node.left) {
          node = node.right;
          return node;
        }

        if(!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while(minFromRight.left) {
          minFromRight = minFromRight.left
        }

        node.data = minFromRight.data

        node.right = removeElem(node.right, minFromRight.data)

        return node
      }
    }
  }

  min() {
    if(!this.head) {
      return null
    }

    let minNnode = this.head;

    while(minNnode.left) {
      minNnode = minNnode.left
    }

    return minNnode.data
  }

  max() {
    if(!this.head) {
      return null
    }

    let maxNode = this.head;

    while(maxNode.right) {
      maxNode = maxNode.right
    }

    return maxNode.data
  }
}

module.exports = {
  BinarySearchTree
};