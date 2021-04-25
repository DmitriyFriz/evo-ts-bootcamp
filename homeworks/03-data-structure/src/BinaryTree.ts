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

  public traverse(traverseType: TraverseType): T[] {
    switch (traverseType) {
      case (TraverseType.inOrder):
        return this.traverseInOrder(this.tree);
      case (TraverseType.preOrder):
        return this.traversePreOrder(this.tree);
      case (TraverseType.postOrder):
        return this.traversePostOrder(this.tree);
      case (TraverseType.breadth):
        return this.traverseBreadth();
      default:
        return assertNever(traverseType);
    }
  }

  protected traverseInOrder(currentTree: ITreeNode<T> | null): T[] {
    const traversedTree: T[] = [];

    if (currentTree !== null) {
      const { value, right, left } = currentTree;
      const leftTraversedTree = this.traverseInOrder(left);
      const rightTraversedTree = this.traverseInOrder(right);
      traversedTree.push(...leftTraversedTree, value, ...rightTraversedTree)
    }

    return traversedTree;
  }

  protected traversePreOrder(currentTree: ITreeNode<T> | null): T[] {
    const traversedTree: T[] = [];

    if (currentTree !== null) {
      const { value, right, left } = currentTree;
      const leftTraversedTree = this.traversePreOrder(left);
      const rightTraversedTree = this.traversePreOrder(right);
      traversedTree.push(value, ...leftTraversedTree, ...rightTraversedTree)
    }

    return traversedTree;
  }

  protected traversePostOrder(currentTree: ITreeNode<T> | null): T[] {
    const traversedTree: T[] = [];

    if ( currentTree !== null ) {
      const { value, right, left } = currentTree;
      const leftTraversedTree = this.traversePostOrder(left);
      const rightTraversedTree = this.traversePostOrder(right);
      traversedTree.push(...leftTraversedTree, ...rightTraversedTree, value)
    }

    return traversedTree;
  }

  protected traverseBreadth(): T[] {
    const traversedTree: T[] = [];
    const queue: ITreeNode<T>[] = [];
    queue.push(this.tree);

    while ( queue.length > 0 ) {
      const currentTree = queue.shift()!;

      traversedTree.push(currentTree.value);

      if ( currentTree.left !== null ) {
        queue.push(currentTree.left);
      }

      if ( currentTree.right !== null ) {
        queue.push(currentTree.right);
      }
    }

    return traversedTree;
  }

}

function assertNever(arg: never): never {
  throw new Error(`Unexpected argument: ${arg}`);
}
