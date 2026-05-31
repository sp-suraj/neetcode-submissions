class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let result = [];

        this.backtrack(result, "", 0, 0, n);
        return result;
    }
    backtrack(result, currString, open, closed, maxN) {
        if (currString.length === maxN * 2) {
            result.push(currString);
            return;
        }

        if (open < maxN) {
            this.backtrack(result, currString + "(", open + 1, closed, maxN);
        }

        if (closed < open) {
            this.backtrack(result, currString + ")", open, closed + 1, maxN);
        }
    }
}
