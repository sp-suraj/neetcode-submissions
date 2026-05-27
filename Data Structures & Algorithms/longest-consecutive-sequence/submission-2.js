class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        let sortedNums = nums.sort((a, b) => a - b);
        let longestConsStrLn = 1,
            currentStrLn = 1;
        for (let i = 1; i < sortedNums.length; i++) {
            if (nums[i] === nums[i - 1]) continue;
            if (nums[i] === nums[i - 1] + 1) {
                currentStrLn++;
            } else {
                if (longestConsStrLn < currentStrLn) {
                    longestConsStrLn = currentStrLn;
                }
                currentStrLn = 1;
            }
        }

        return longestConsStrLn < currentStrLn
            ? currentStrLn
            : longestConsStrLn;
    }
}
