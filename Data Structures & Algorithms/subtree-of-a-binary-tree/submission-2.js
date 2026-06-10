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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */

    isSameTree = (node1, node2) => {
        if((node1 && !node2) || (!node1 && node2)) return false;
            if(!node1 && !node2) return true;
            if(node1?.val != node2?.val) return false;

            let isLeftSame = this.isSameTree(node1.left, node2.left);
            let isRightSame = this.isSameTree(node1.right, node2.right);

            return isLeftSame && isRightSame;
    }

    isSubtree(root, subRoot) {
        const queue = [];
        queue.push(root);

        while(queue.length) {
            let currNode = queue.shift();
            // if(currNode.val === subRoot.val) // start checking that if after that the trees are same.
            if(currNode.val === subRoot.val) {
                let isSame = this.isSameTree(currNode, subRoot)
                if(isSame)return isSame;
            }
            if(currNode.left) queue.push(currNode.left)
            if(currNode.right) queue.push(currNode.right)
        }

        return false;
    }
}
