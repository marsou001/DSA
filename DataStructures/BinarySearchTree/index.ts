class TreeNode {
  data: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(data: number, left: TreeNode | null = null, right: TreeNode | null  = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  private root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  add(data: number): void {
    if (this.root === null) {
      this.root = new TreeNode(data);
      return;
    }

    return this.searchAdd(this.root, data);
  }

  findMin(): number | null {
    if (this.root === null) return null;

    let currentNode = this.root;

    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  findMax(): number | null {
    if (this.root === null) return null;

    let currentNode = this.root;

    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }

    return currentNode.data;
  }

  find(data: number): number | null {
    if (this.root === null) return null;

    let currentNode = this.root;

    while (data !== currentNode.data) {
      if (data < currentNode.data) {
        if (currentNode.left === null) return null;
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        if (currentNode.right === null) return null;
        currentNode = currentNode.right;
      }
    }

    return currentNode.data;
  }

  isPresent(data: number): boolean {
    if (this.root === null) return false;

    let currentNode = this.root;

    while (data !== currentNode.data) {
      if (data < currentNode.data) {
        if (currentNode.left === null) return false;
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        if (currentNode.right === null) return false;
        currentNode = currentNode.right;
      }
    }

    return true;
  }

  remove(data: number): void {
    this.root = this.searchRemove(this.root, data);
  }

  isBalanced(): boolean {
    return this.findMaxHeight(this.root) - this.findMinHeight(this.root) <= 1;
  }

  findMinHeight(node: TreeNode | null = this.root): number {
    if (node === null) return - 1;

    const left = this.findMinHeight(node.left);
    const right = this.findMinHeight(node.right);

    if (left < right) {
      return 1 + left;
    } else {
      return 1 + right;
    }
  }

  findMaxHeight(node: TreeNode | null = this.root): number {
    if (node === null) return - 1;

    const left = this.findMaxHeight(node.left);
    const right = this.findMaxHeight(node.right);

    if (left > right) {
      return 1 + left;
    } else {
      return 1 + right;
    }
  }

  inOrder(): number[] {
    const result: number[] = [];
    
    if (this.root === null) return result;

    this.traverseInOrder(this.root, result);
    return result;
  }

  preOrder(): number[] {
    const result: number[] = [];
    
    if (this.root === null) return result;

    this.traversePreOrder(this.root, result);
    return result;
  }

  postOrder(): number[] {
    const result: number[] = [];
    
    if (this.root === null) return result;

    this.traversePostOrder(this.root, result);
    return result;
  }

  levelOrder(): number[] {
    const result: number[] = [];
    const queue: TreeNode[] = [];
    
    if (this.root === null) return result;

    queue.push(this.root);

    while (queue.length > 0) {
      const node = queue.shift()!;
      result.push(node.data)

      if (node.left !== null) {
        queue.push(node.left)
      }

      if (node.right !== null) {
        queue.push(node.right)
      }
    }

    return result;
  }

  private searchAdd(node: TreeNode, data: number): void {
    if (data < node.data) {
      if (node.left === null) {
        node.left = new TreeNode(data);
        return;
      } else {
        return this.searchAdd(node.left, data);
      }
    } else if (data > node.data) {
      if (node.right === null) {
        node.right = new TreeNode(data);
        return;
      } else {
        return this.searchAdd(node.right, data);
      }
    } else {
      return;
    }
  }

  private searchRemove(node: TreeNode | null, data: number): TreeNode | null {
    if (node === null) return null;

    if (data < node.data) {
      node.left = this.searchRemove(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.searchRemove(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        return null;
      } else {
        if (node.left === null) {
          return node.left;
        }

        if (node.right === null) {
          return node.right;
        }

        let tempNode = node.right;

        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }

        node.data = tempNode.data;
        this.searchRemove(node.right, tempNode.data);
        return node;
      }
    }
  }

  private traverseInOrder(node: TreeNode, result: number[]): void {
    node.left && this.traverseInOrder(node.left, result);
    result.push(node.data);
    node.right && this.traverseInOrder(node.right, result);
  }

  private traversePreOrder(node: TreeNode, result: number[]): void {
    result.push(node.data);
    node.left && this.traversePreOrder(node.left, result);
    node.right && this.traversePreOrder(node.right, result);
  }

  private traversePostOrder(node: TreeNode, result: number[]): void {
    node.left && this.traversePostOrder(node.left, result);
    node.right && this.traversePostOrder(node.right, result);
    result.push(node.data);
  }
}