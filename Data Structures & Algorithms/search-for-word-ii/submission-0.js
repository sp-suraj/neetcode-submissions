class TrieNode {
    constructor() {
        this.children = {};
        this.word = null;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        // Create trie of words
        let root = new TrieNode();

        for (let word of words) {
            let currNode = root;
            for (let c of word) {
                if (!currNode.children[c]) {
                    currNode.children[c] = new TrieNode();
                }

                currNode = currNode.children[c];
            }
            currNode.word = word;
        }

        this.fullBoard = board;
        this.answer = [];

        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[0].length; col++) {
                if (root.children[board[row][col]]) {
                    this.backtracking(row, col, root);
                }
            }
        }

        return this.answer;
    }

    backtracking(row, col, node) {
        let char = this.fullBoard[row][col];
        let currNode = node.children[char];

        if (currNode.word != null) {
            this.answer.push(currNode.word);
            currNode.word = null;
        }

        this.fullBoard[row][col] = "#";

        let rowOffset = [-1, 0, 1, 0];
        let colOffset = [0, 1, 0, -1];

        for (let i = 0; i < 4; i++) {
            let newRow = row + rowOffset[i];
            let newCol = col + colOffset[i];

            if (
                newRow < 0 ||
                newCol < 0 ||
                newRow >= this.fullBoard.length ||
                newCol >= this.fullBoard[0].length
            ) {
                continue;
            }

            if (currNode.children[this.fullBoard[newRow][newCol]]) {
                this.backtracking(newRow, newCol, currNode);
            }
        }

        this.fullBoard[row][col] = char;
    }
}
