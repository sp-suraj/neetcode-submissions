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
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */

    preOrder(node, k, arr) {
        if(node == null) return;

        this.preOrder(node.left, k, arr);
        if(arr.length == k) return;
        else arr.push(node.val);
        this.preOrder(node.right, k, arr);
    }

    kthSmallest(root, k) {
        if(root == null) return 0;

        let minWindow = [];

        this.preOrder(root, k, minWindow)
        return minWindow[minWindow.length - 1]
    }
}
