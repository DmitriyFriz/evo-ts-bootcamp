interface ITreeNode<T> {
  value: T;
  left?: ITreeNode<T> | null;
  right?: ITreeNode<T> | null;
}

enum TraverseType {
  inOrder,
  preOrder,
  postOrder,
  breadth
}

interface IBinaryTree<T> {
  setTree(value: ITreeNode<T>): this;
  // traverse(traverseType): T[];
  // getColumn(columnOrder: number): T[];
}

class BinaryTree<T> implements IBinaryTree<T> {

  constructor(private tree: ITreeNode<T>) { }

  setTree(tree: ITreeNode<T>): this {
    this.tree = tree;
    return this;
  }

  traverse(currentTraverse: TraverseType) {
    switch (currentTraverse) {
      case (TraverseType.inOrder):
        return 0;
      case (TraverseType.preOrder):
        return 1;
      case (TraverseType.postOrder):
        return 2;
      case (TraverseType.breadth):
        return 3;
      default:
        return assertNever(currentTraverse);
    }
  }
}

function assertNever(arg: never): never {
  throw new Error(`Unexpected argument: ${arg}`);
}
