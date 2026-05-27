class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let pre = 1,
            post = 1,
            result = Array.from({ length: nums.length }, () => 0);

        for (let i = 0; i < nums.length; i++) {
            pre = pre * (isNaN(nums[i - 1]) ? 1 : nums[i - 1]);
            result[i] = pre;
        }

        for (let i = nums.length - 1; i >= 0; i--) {
            post = post * (isNaN(nums[i + 1]) ? 1 : nums[i + 1]);
            result[i] = result[i] * post;
        }

        return result;
    }
}
