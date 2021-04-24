interface ITreeNode<T> {
  value: T;
  left: ITreeNode<T> | null;
  right: ITreeNode<T> | null;
}

enum TraverseType {
  inOrder,
  preOrder,
  postOrder,
  breadth,
}

interface IBinaryTree<T> {
  setTree(value: ITreeNode<T>): this;
  traverse(traverseType: TraverseType): T[];
  // getColumn(columnOrder: number): T[];
}

class BinaryTree<T> implements IBinaryTree<T> {

  constructor(private tree: ITreeNode<T>) { }

  setTree(tree: ITreeNode<T>): this {
    this.tree = tree;
    return this;
  }

  traverse(traverseType: TraverseType): T[] {
    switch (traverseType) {
      case (TraverseType.inOrder):
        return this.traverseInOrder(this.tree);
      case (TraverseType.preOrder):
        return this.traversePreOrder(this.tree);
      case (TraverseType.postOrder):
        return this.traversePostOrder(this.tree);
      case (TraverseType.breadth):
        return [];
      default:
        return assertNever(traverseType);
    }
  }

  traverseInOrder(currentTree: ITreeNode<T> | null): T[] {
    const traversedTree: T[] = [];

    if (currentTree !== null) {
      const { value, right, left } = currentTree;
      const leftTraversedTree = this.traverseInOrder(left);
      const rightTraversedTree = this.traverseInOrder(right);
      traversedTree.push(...leftTraversedTree, value, ...rightTraversedTree)
    }

    return traversedTree;
  }

  traversePreOrder(currentTree: ITreeNode<T> | null): T[] {
    const traversedTree: T[] = [];

    if (currentTree !== null) {
      const { value, right, left } = currentTree;
      const leftTraversedTree = this.traversePreOrder(left);
      const rightTraversedTree = this.traversePreOrder(right);
      traversedTree.push(value, ...leftTraversedTree, ...rightTraversedTree)
    }

    return traversedTree;
  }

  traversePostOrder(currentTree: ITreeNode<T> | null): T[] {
    const traversedTree: T[] = [];

    if (currentTree !== null) {
      const { value, right, left } = currentTree;
      const leftTraversedTree = this.traversePostOrder(left);
      const rightTraversedTree = this.traversePostOrder(right);
      traversedTree.push(...leftTraversedTree, ...rightTraversedTree, value)
    }

    return traversedTree;
  }

}

function assertNever(arg: never): never {
  throw new Error(`Unexpected argument: ${arg}`);
}
