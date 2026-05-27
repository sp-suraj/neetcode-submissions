class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums.length) return 0;
        let numsSet = new Set(nums);
        let longest = 1;
        for (let num of numsSet) {
            if (!numsSet.has(num - 1)) {
                let currentNum = num;
                let currentStreak = 1;

                while (numsSet.has(currentNum + 1)) {
                    currentNum += 1;
                    currentStreak += 1;
                }

                longest = Math.max(longest, currentStreak);
            }
        }

        return longest;
    }
}
