import { ITreeNode } from '../BinaryTree/BinaryTree';

/*
            15
           /  \
         10     24
        / \     / \
       3   11  18  30
             \     / \
             12   28  42
 */

export const firstNodeTree: ITreeNode<number> = {
  value: 15,
  left: {
    value: 10,
    left: {
      value: 3,
      left: null,
      right: null
    },
    right: {
      value: 11,
      left: null,
      right: {
        value: 12,
        left: null,
        right: null
      }
    }
  },
  right: {
    value: 24,
    left: {
      value: 18,
      left: null,
      right: null
    },
    right: {
      value: 30,
      left: {
        value: 28,
        left: null,
        right: null
      },
      right: {
        value: 42,
        left: null,
        right: null
      }
    }
  }
}

/*
            23
           /  \
         9     32
 */

export const secondNodeTree: ITreeNode<number> = {
  value: 23,
  left: {
    value: 9,
    left: null,
    right: null
  },
  right: {
    value: 32,
    left: null,
    right: null,
  }
}
