class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let pre = Array.from({ length: nums.length }, () => 0),
            post = Array.from({ length: nums.length }, () => 0),
            result = Array.from({ length: nums.length }, () => 0);
        console.log({ pre, post, result });

        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                pre[i] = 1;
            } else {
                console.log(pre[i - 1], nums[i - 1]);
                pre[i] = pre[i - 1] * nums[i - 1];
            }
        }

        for (let i = nums.length - 1; i >= 0; i--) {
            if (i === nums.length - 1) {
                post[i] = 1;
            } else {
                post[i] = post[i + 1] * nums[i + 1];
            }
        }

        for (let i = 0; i < nums.length; i++) {
            result[i] = pre[i] * post[i];
        }

        return result;
    }
}
