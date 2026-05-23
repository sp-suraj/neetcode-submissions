class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        if (!matrix || matrix.length === 0 || matrix[0].length === 0) return;

        const rows = matrix.length;
        const cols = matrix[0].length;

        // Create a (rows + 1) x (cols + 1) matrix filled with 0s
        // The extra padding handles edge cases seamlessly without complex if-statements
        this.prefixMatrix = Array.from({ length: rows + 1 }, () => Array(cols + 1).fill(0));

        // Build the 2D Prefix Sum Matrix
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                this.prefixMatrix[r + 1][c + 1] = 
                    matrix[r][c] + 
                    this.prefixMatrix[r][c + 1] + // Box directly above
                    this.prefixMatrix[r + 1][c] - // Box to the left
                    this.prefixMatrix[r][c];       // Subtract overlapping diagonal box
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        let sum = this.prefixMatrix[row2+1][col2+1] - this.prefixMatrix[row1][col2+1] - this.prefixMatrix[row2+1][col1] + this.prefixMatrix[row1][col1];
        return sum
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
