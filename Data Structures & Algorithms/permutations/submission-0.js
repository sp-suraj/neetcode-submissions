class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let result = [];
        let path = [];
        let used = Array(nums.length).fill(false);


        function backtrack(path, used) {
            if(path.length === nums.length) {
                result.push([...path]);
                return;
            }

            for(let i = 0; i < nums.length; i++) {
                if(used[i]) continue;
                
                path.push(nums[i]);
                used[i] = true;

                backtrack(path, used);

                path.pop();
                used[i] = false;
            }
        }

        backtrack(path, used);
        return result;
    }
}
