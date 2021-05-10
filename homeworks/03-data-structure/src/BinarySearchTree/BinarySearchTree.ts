import { ITreeNode ,IBinaryTree, BinaryTree } from '../BinaryTree/BinaryTree';

interface IBinarySearchTree extends IBinaryTree<number> {
  has(value: number): boolean;
}

export class BinarySearchTree extends BinaryTree<number> implements IBinarySearchTree {
  public has(value: number): boolean {
    let currentTree: ITreeNode<number> | null = this.tree;
    while (currentTree.value !== value) {

      if (currentTree.value > value) {
        currentTree = currentTree.left;
      } else {
        currentTree = currentTree.right;
      }

      if (currentTree === null) {
        return false;
      }
    }
    return true;
  }
}
