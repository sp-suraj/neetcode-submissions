class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        let sortedArr = people.sort((a, b) => a - b);
        let left = 0,
            right = people.length - 1;
        let totalBoat = 0;
        while (left <= right) {
            if(sortedArr[right] + sortedArr[left] <= limit) {
                left++;
            }
            totalBoat++;
            right--;
        }
        return totalBoat;
    }
}
