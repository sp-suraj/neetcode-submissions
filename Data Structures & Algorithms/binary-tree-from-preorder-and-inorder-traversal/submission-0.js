/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        if (preorder.length === 0 || inorder.length === 0) return null;
        let rootVal = preorder[0];

        let rootNode = new TreeNode(rootVal);

        let mid = inorder.indexOf(rootVal);

        let leftPreorder = preorder.slice(1, mid + 1);
        let rightPreorder = preorder.slice(mid + 1);

        let leftInorder = inorder.slice(0, mid);
        let rightInorder = inorder.slice(mid + 1);

        rootNode.left = this.buildTree(leftPreorder, leftInorder);
        rootNode.right = this.buildTree(rightPreorder, rightInorder);

        return rootNode;
    }
}
