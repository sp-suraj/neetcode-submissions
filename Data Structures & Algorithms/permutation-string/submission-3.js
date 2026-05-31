class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // check frequency for s1.. and then sliding window to continue
        // the string to reduce s1 frequencies and return then
        // if all zero then permtation exists else no
        if (s1.length > s2.length) return false;
        let countMap = {};
        for (let char of s1) {
            countMap[char] = (countMap[char] || 0) + 1;
        }
        let left = 0;
        for (let right = 0; right < s2.length; right++) {
            if (countMap[s2[right]] === undefined) {
                countMap[s2[right]] = 0;
            }

            // Spend the character
            countMap[s2[right]]--;

            while (countMap[s2[right]] < 0) {
                if (countMap[s2[left]] !== undefined) {
                    countMap[s2[left]]++;
                }
                left++;
            }

            if (right - left + 1 === s1.length) {
                return true;
            }
        }
        return false;
    }
}
