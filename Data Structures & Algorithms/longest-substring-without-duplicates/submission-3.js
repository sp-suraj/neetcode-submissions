class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // 2 pointer & hashmap se karna hai
        let hashWindow = new Map();
        let left = 0,
            right = 0,
            max = 0;
        for (let right = 0; right < s.length; right++) {
            if (hashWindow.has(s[right]) && hashWindow.get(s[right]) >= left) {
                left = hashWindow.get(s[right]) + 1;
            }

            hashWindow.set(s[right], right);

            max = Math.max(max, right - left + 1);
        }

        return max;
    }
}