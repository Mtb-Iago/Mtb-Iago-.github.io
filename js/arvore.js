const $ = selector => document.querySelector(selector);

const RED = true;
const BLACK = false;

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
    this.color = RED;
  }
}

class RBT {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  isRed(node) {
    return !node ? BLACK : node.color;
  }

  // Left rotation right red left black
  leftRotate(node) {
    let tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    tmp.color = node.color;
    node.color = RED;

    return tmp;
  }

  // Right rotation left red left sub red
  rightRotate(node) {
    let tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    tmp.color = node.color;
    node.color = RED;

    return tmp;
  }

  // Color reversal
  flipColors(node) {
    node.color = RED;
    node.left.color = BLACK;
    node.right.color = BLACK;
  }

  add(key, value) {
    this.root = this.addRoot(this.root, key, value);
    this.root.color = BLACK; // Root node is always black
  }

  addRoot(node, key, value) {
    if (!node) {
      this.size++;
      this.root = new Node(key, value)

      return this.root;
    } else {

      if (key < node.key) {
        node.left = this.addRoot(node.left, key, value);
      } else if (key > node.key) {
        node.right = this.addRoot(node.right, key, value);
      } else {
        node.value = value;
      }
      if (this.isRed(node.right) && !this.isRed((node.left))) {
        node = this.leftRotate(node);
      }
      if (this.isRed(node.left) && this.isRed((node.left.left))) {
        node = this.rightRotate(node);
      }
      if (this.isRed(node.left) && this.isRed(node.right)) {
        this.flipColors(node);
      }

      return node;
    }
  }

  isEmpty() {
    return this.size == 0;
  }

  getSize() {
    return this.size;
  }

  contains(key) {
    let ans = '';

    !(function getNode(node, key) {
      if (!node || key == node.key) {
        ans = node;
        return node;
      } else if (key > node.key) {
        return getNode(node.right, key);
      } else {
        return getNode(node.right, key);
      }
    })(this.root, key);

    return !!ans;
  }

  // bst preamble traversal (recursive version)
  preOrder(node = this.root) {
    if (node != null) {
      console.log(node.key);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  preOrderNR() {
    if (this.root != null) {
      let stack = [];
      stack.push(this.root);
      while (stack.length > 0) {
        let curNode = stack.pop();
        console.log(curNode.key);
        if (curNode.right != null) stack.push(curNode.right);
        if (curNode.left != null) curNode.push(curNode.left);
      }
    }
  }

  // bst middle order traversal
  inOrder(node = this.root) {
    if (node != null) {
      this.inOrder(node.left);
      console.log(node.key);
      this.inOrder(node.right);
    }
  }

  // bst subsequent traversal
  postOrder(node = this.root) {
    if (node != null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.key);
    }
  }

  // The way of bsf + queue to realize hierarchical traversal
  generateDepthString1() {
    let queue = [];

    if (this.root) {
      queue.unshift(this.root);
    }

    while (queue.length > 0) {
      let tmpqueue = [];
      let ans = [];

      queue.forEach(item => {
        ans.push(item.key);
        item.left ? tmpqueue.push(item.left) : '';
        item.right ? tmpqueue.push(item.right) : '';
      });
      console.log(...ans);
      queue = tmpqueue;
    }
  }

  minimun(node = this.root) {
    return node.left == null ? node : this.minimun(node.left);
  }

  maximum(node = this.root) {
    return node.right == null ? node : this.maximum(node.right);
  }
}

let btins = new RBT();
let arvore = [];

$("#send").addEventListener("click", e => { // CLICANDO EM INSERIR ITEM
  var opcao = document.getElementById("name").value

  if (!opcao) {
    alert("ENTRE COM UM DADO..")
  } else {  // NÃO PERMITIR ENTRADA DE DADOS VAZIA     
    arvore.unshift(opcao)
    document.getElementById("name").value = ''
  }

  generateTree()
  alert("Visualize no console.log de seu navegador...")
})

$("#remover").addEventListener("click", e => { // CLICANDO EM INSERIR ITEM
  var opcao = document.getElementById("name").value

  if (!arvore.length) {
    alert("Árvore vazia")
  } else if (!opcao) {  // NÃO PERMITIR ENTRADA DE DADOS VAZIA  
    alert("ENTRE COM UM NÚMERO..")
  } else {
    arvore = arvore.filter(number => number != opcao)
    document.getElementById("name").value = ''
  }

  generateTree()
  alert("Visualize no console.log de seu navegador...");
})

function generateTree() {
  btins = new RBT()
  arvore.forEach((value, index) => btins.add(value, index));
  btins.generateDepthString1();
  console.log('mínimo: ' + btins.minimun().key);
  console.log('máximo: ' + btins.maximum().key);
}