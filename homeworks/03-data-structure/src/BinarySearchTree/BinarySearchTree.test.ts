import { BinarySearchTree } from './BinarySearchTree';
import { firstNodeTree } from '../helpers/collectionTrees';

describe('Binary Search Tree', () => {
  const binarySearchTree = new BinarySearchTree(firstNodeTree);

  it('should return true for value containing in tree', () => {
    const result = binarySearchTree.has(28);
    expect(result).toEqual(true);
  });

  it('should return false for value not containing in tree', () => {
    const result = binarySearchTree.has(70);
    expect(result).toEqual(false);
  })
})
