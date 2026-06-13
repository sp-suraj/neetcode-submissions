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
     * @return {number}
     */
    constructor() {
        this.maxSum = -Infinity;
    }

    maxGain(node) {
        if(!node) return 0;

        let leftGain = Math.max(this.maxGain(node.left), 0);
        let rightGain = Math.max(this.maxGain(node.right), 0);

        let priceNewPath = node.val + leftGain + rightGain;

        this.maxSum = Math.max(priceNewPath, this.maxSum);

        return node.val + Math.max(leftGain, rightGain);
    }

    maxPathSum(root) {
        this.maxGain(root);
        return this.maxSum;
    }
}
