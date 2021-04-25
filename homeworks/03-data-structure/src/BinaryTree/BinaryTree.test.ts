import { TraverseType, BinaryTree } from './BinaryTree';
import { firstNodeTree, secondNodeTree } from '../helpers/collectionTrees';

describe('Binary Tree', () => {

  const binaryTree = new BinaryTree(firstNodeTree);

  describe('Traverse', () => {
    it('should return array after in-order traversing tree', () => {
      const result = binaryTree.traverse(TraverseType.inOrder);
      expect(result).toEqual([3, 10, 11, 12, 15, 18, 24, 28, 30, 42]);
    });

    it('should return array after pre-order traversing tree', () => {
      const result = binaryTree.traverse(TraverseType.preOrder);
      expect(result).toEqual([15, 10, 3, 11, 12, 24, 18, 30, 28, 42]);
    });

    it('should return array after post-order traversing tree', () => {
      const result = binaryTree.traverse(TraverseType.postOrder);
      expect(result).toEqual([3, 12, 11, 10, 18, 28, 42, 30, 24, 15]);
    });

    it('should return array after breadth traversing tree', () => {
      const result = binaryTree.traverse(TraverseType.breadth);
      expect(result).toEqual([15, 10, 24, 3, 11, 18, 30, 12, 28, 42]);
    });
  });

  describe('Get column', () => {
    it('should return array for 0 column', () => {
      const result = binaryTree.getColumn(0);
      expect(result).toEqual([15, 11, 18]);
    });

    it('should return array for -2 column', () => {
      const result = binaryTree.getColumn(-2);
      expect(result).toEqual([3]);
    });

    it('should return empty array for not existing column', () => {
      const result = binaryTree.getColumn(1000);
      expect(result).toEqual([]);
    });
  });

  describe('Set tree', () => {
    it('should return array after setting new tree and traversing', () => {
      binaryTree.setTree(secondNodeTree);
      const result = binaryTree.traverse(TraverseType.breadth);
      expect(result).toEqual([23, 9, 32]);
    });
  });

});
