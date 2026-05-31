class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let arr = new Array(temperatures.length).fill(0);
        let monoStack = [];

        for (let i = 0; i < temperatures.length; i++) {
            while (monoStack.length > 0 && temperatures[monoStack[monoStack.length - 1]] < temperatures[i]) {
                let poppedIndex = monoStack.pop();
                arr[poppedIndex] = i - poppedIndex;
            }
            monoStack.push(i);
        }

        return arr;
    }
}
