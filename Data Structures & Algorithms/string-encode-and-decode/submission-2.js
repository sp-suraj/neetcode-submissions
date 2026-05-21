class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = "";
        for (let i = 0; i < strs.length; i++) {
            str += `${strs[i].length}!${strs[i]}`;
        }
        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let strArr = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            let number = "";
            
            while (str[j] !== "!") {
                number += str[j];
                j++;
            }
            
            let indexVal = Number(number);
            let left = j + 1;
            let right = left + indexVal;
            
            let strSlice = str.slice(left, right);
            strArr.push(strSlice);
            
            i = right;
        }
        return strArr;
    }
}
