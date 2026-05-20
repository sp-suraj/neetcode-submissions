class MyHashSet {
    constructor() {
        this.size = 1000;
        this.buckets = Array.from({length: this.size}, () => []);
    }

    hash(key) {
        return key % this.size;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        let index = this.hash(key);
        let bucket = this.buckets[index]
        if (!bucket.includes(key)) {
            bucket.push(key);
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let index = this.hash(key);
        let bucket = this.buckets[index]
        let keyIndex = bucket.indexOf(key);
        if (keyIndex >= 0) {
            bucket.splice(keyIndex, 1);
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        let index = this.hash(key);
        let bucket = this.buckets[index];
        return bucket.includes(key);
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
