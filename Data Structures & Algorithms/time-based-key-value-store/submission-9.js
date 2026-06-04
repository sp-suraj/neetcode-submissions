class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }

        this.keyStore.get(key).push({ timestamp, value });
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let valuesArr = this.keyStore.get(key);

        if(!valuesArr) return "";
        // Now this is an array okay.. of timestamps.. like we would need to convert
        // else we have to find and return
        let left = 0,
            right = valuesArr.length - 1;
        let result = "";

        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);
            if (valuesArr[mid].timestamp > timestamp) {
                right = mid - 1;
            } else {
                result = valuesArr[mid].value;
                left = mid + 1;
            }
        }

        return result;
    }
}