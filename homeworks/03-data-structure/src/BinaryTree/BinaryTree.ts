import { assertNever } from '../helpers/tsUtility';

export interface ITreeNode<T> {
  value: T;
  left: ITreeNode<T> | null;
  right: ITreeNode<T> | null;
}

export enum TraverseType {
  InOrder,
  PreOrder,
  PostOrder,
  Breadth,
}

export interface IBinaryTree<T> {
  setTree(value: ITreeNode<T>): this;
  traverse(traverseType: TraverseType): T[];
  getColumn(columnOrder: number): T[];
}

export class BinaryTree<T> implements IBinaryTree<T> {

  constructor(protected tree: ITreeNode<T>) { }

  setTree(tree: ITreeNode<T>): this {
    this.tree = tree;
    return this;
  }

  public traverse(traverseType: TraverseType): T[] {
    switch (traverseType) {
      case (TraverseType.InOrder):
        return this.traverseInOrder(this.tree);
      case (TraverseType.PreOrder):
        return this.traversePreOrder(this.tree);
      case (TraverseType.PostOrder):
        return this.traversePostOrder(this.tree);
      case (TraverseType.Breadth):
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

  public getColumn(columnOrder: number): T[] {
    return (
      function getStep( currentOrder: number, currentTree: ITreeNode<T> | null ): T[] {
        const orderedColumns: T[] = [];

        if ( currentTree !== null ) {
          const { value, right, left } = currentTree;

          if ( columnOrder === currentOrder  ) {
            orderedColumns.push(value);
          }

          const leftOrderedColumns = getStep(currentOrder - 1, left);
          const rightOrderedColumns = getStep(currentOrder + 1, right);

          orderedColumns.push(...leftOrderedColumns, ...rightOrderedColumns);
        }

        return orderedColumns;
      }
    )(0, this.tree);
  }

}
