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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {

        function isSame(node1, node2) {
            if((node1 && !node2) || (!node1 && node2)) return false;
            if(!node1 && !node2) return true;
            if(node1?.val != node2?.val) return false;

            let isLeftSame = isSame(node1.left, node2.left);
            let isRightSame = isSame(node1.right, node2.right);

            return isLeftSame && isRightSame;
        }

        return isSame(p, q)
    }
}
