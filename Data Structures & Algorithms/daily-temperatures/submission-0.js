class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let arr = new Array(temperatures.length).fill(0);
        let monoStack = [];

        for (let i = 0; i < temperatures.length; i++) {
            let top = monoStack[monoStack.length - 1];

            while (top !== undefined && temperatures[top] < temperatures[i]) {
                arr[top] = i - top;
                monoStack.pop();
                top = monoStack[monoStack.length - 1];
            }
            monoStack.push(i);
        }

        return arr;
    }
}
