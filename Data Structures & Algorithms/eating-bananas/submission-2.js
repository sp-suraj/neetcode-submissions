class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const maxBananaPileSize = piles.reduce((acc, pile) => pile>acc ? acc = pile: acc, 0);
        let left = 1, right = maxBananaPileSize, minRate = maxBananaPileSize;
        while(right >= left) {
            let middle = left+Math.floor((right-left)/2);
            const timeTakenAtRateI = piles.reduce((acc, pile) => Math.ceil(pile/middle)+acc, 0);
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
