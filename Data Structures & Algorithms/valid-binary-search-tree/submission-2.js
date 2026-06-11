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
     * @return {boolean}
     */

    validate(node, min, max) {
        if(!node) return true;

        if((min !== null && min >= node.val) || (max !== null && max <= node.val)) {
            return false;
        }
        
        let isLeftValid = this.validate(node.left, min, node.val);
        let isRightValid = this.validate(node.right, node.val, max);

        return isLeftValid && isRightValid;
    }

    isValidBST(root) {
        return this.validate(root, null, null);
    }
}
