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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */

    recSerialize(node, str) {
        if(!node) return str += "null,";

        str+= node.val + ",";
        str = this.recSerialize(node.left, str);
        str = this.recSerialize(node.right, str);

        return str;
    }

    serialize(root) {
        return this.recSerialize(root, "");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */

    recDeserialize(str) {
        let val = str.shift();
        if(val === "null"){
            return null;
        }

        let root = new TreeNode(Number(val));
        root.left = this.recDeserialize(str);
        root.right = this.recDeserialize(str);

        return root;
    }

    deserialize(data) {
        return this.recDeserialize(data.split(","));
    }
}
