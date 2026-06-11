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

    inOrderTraverse(node, largest) {
        if (node === null) return 0;

        let count = 0
        if(node.val >= largest) {
            largest = node.val;
            count = 1;
        };
        let leftGoodNode = this.inOrderTraverse(node.left, largest);
        let rightGoodNode = this.inOrderTraverse(node.right, largest);

        return count + leftGoodNode + rightGoodNode;
    }

    goodNodes(root) {
        if(!root) return 0;
        let largestVal = root.val;
        let num = this.inOrderTraverse(root, largestVal)
        return num;
    }
}
