class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        // Let formula => time = Math.floor((target-position[i])/speed[i]);
        if (position.length === 0) return 0;

        let cars = position.map((pos, index) => ({
            pos: pos,
            speed: speed[index],
        }));

        cars.sort((a, b) => b.pos - a.pos);

        for (let i = 0; i < position.length; i++) {
            let timeTaken = (target - cars[i].pos) / cars[i].speed;
            cars[i].timeTaken = timeTaken;
        }

        let fleetCount = 0;
        let maxTime = -Infinity;

        for (let i = 0; i < cars.length; i++) {
            if (cars[i].timeTaken > maxTime) {
                maxTime = cars[i].timeTaken;
                fleetCount++;
            }
        }

        return fleetCount;
    }
}
