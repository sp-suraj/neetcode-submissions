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
        for (let i = 0; i < str.length; i++) {
            let j = i;
            let number = "";
            while (str[j] != "!") {
                number += str[j];
                j++;
            }
            let left = j + 1;
            let indexVal = Number(number);
            let right = left + indexVal;
            let strSlice = str.slice(left, right);
            strArr.push(strSlice);
            i += indexVal + number.length;
        }
        return strArr;
    }
}
