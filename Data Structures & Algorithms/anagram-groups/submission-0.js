class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let mapStrs = {};

        for (let i = 0; i < strs.length; i++) {
            let strSorted = strs[i].split("").sort().join("");
            if (!mapStrs[strSorted]) {
                mapStrs[strSorted] = [];
            }
            mapStrs[strSorted].push(strs[i]);
        }

        return Object.values(mapStrs)
    }
}
