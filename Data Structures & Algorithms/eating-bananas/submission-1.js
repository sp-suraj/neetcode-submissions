class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const getBananaTimings = (k) => {
            const timings = piles.reduce((acc, pile) => Math.ceil(pile/k)+acc, 0);
            return timings;
        }
        let least
        const maxBananaPileSize = piles.reduce((acc, pile) => pile>acc ? acc = pile: acc, 0);
        let left = 1, right = maxBananaPileSize, minRate = maxBananaPileSize;
        while(right >= left) {
            let middle = left+Math.floor((right-left)/2);
            const timeTakenAtRateI = getBananaTimings(middle);
            if(timeTakenAtRateI <= h) {
                minRate = middle;
                right = middle-1;
            }else {
                left = middle+1;
            }
        }

        return minRate;
    }
}
