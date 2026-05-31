class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let ans = 0,
            max = 0,
            left = 0,
            right = 0,
            countMap = {};

        for (right; right < s.length; right++) {
            countMap[s[right]] = countMap[s[right]]
                ? countMap[s[right]] + 1
                : 1;
            max = Math.max(max, countMap[s[right]]);

            if (right - left + 1 - max > k) {
                countMap[s[left]]--;
                left++;
            }

            ans = Math.max(ans, right - left + 1);
        }

        return ans;
    }
}
