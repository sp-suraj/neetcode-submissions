class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
      const countMap = {};

      for(let num of nums) {
        countMap[num] ? countMap[num]++ : (countMap[num] = 1);
      }

      let topKHeap = [];

      for(let num in countMap) {
        topKHeap.push(num);

        topKHeap.sort((a, b) => countMap[b] - countMap[a]);
        if(topKHeap.length > k) topKHeap.pop();
      }

      return topKHeap;

    }
}
