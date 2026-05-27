class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rowSet = Array.from({length: 9}, () => new Set());
        let colSet = Array.from({length: 9}, () => new Set());
        let squareSet = Array.from({length: 9}, () => new Set());

        for(let i = 0; i < board.length; i++) {
            for(let j = 0; j < board[i].length; j++) {
                if(board[i][j] === ".") {
                    continue;
                }

                if(rowSet[i].has(board[i][j])) {
                    return false;
                }
                rowSet[i].add(board[i][j]);

                if(colSet[j].has(board[i][j])) {
                    return false;
                }
                colSet[j].add(board[i][j]);

                let squareIndex = Math.floor(i/3) * 3 + Math.floor(j/3);
                if(squareSet[squareIndex].has(board[i][j])) {
                    return false;
                }
                squareSet[squareIndex].add(board[i][j]);
            }
        }
        return true;
    }
}
