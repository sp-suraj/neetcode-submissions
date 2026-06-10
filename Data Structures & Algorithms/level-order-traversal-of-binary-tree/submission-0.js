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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return [];
        let queue = [], res = [];
        queue.push(root);
        while (queue.length) {
            let levelSize = queue.length;
            let temp = [];
            for(let i = 0; i < levelSize; i++) {
                let currNode = queue.shift();
                temp.push(currNode.val);

                if (currNode.left) queue.push(currNode.left);
                if (currNode.right) queue.push(currNode.right);
            }

            res.push(temp)
        }
        return res;
    }
}
