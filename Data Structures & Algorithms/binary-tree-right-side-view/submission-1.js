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
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root) return [];
        let visibleValues = [];
        let queue = [];
        queue.push(root);
        while(queue.length) {
            let levelSize = queue.length;
            visibleValues.push(queue[levelSize - 1]?.val);
            for(let i = 0; i < levelSize; i++) {
                let currNode = queue.shift();

                if(currNode.left) queue.push(currNode.left);
                if(currNode.right) queue.push(currNode.right);
            }
        }
        return visibleValues;
    }
}
