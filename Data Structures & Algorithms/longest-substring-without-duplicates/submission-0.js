class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let max = 0, win = "";
        for(let i = 0; i < s.length; i++) {
            if(win.includes(s[i])) {
                let j = win.indexOf(s[i]);
                win = win.slice(j+1, win.length) + s[i]
            } else {
                win+=s[i];
            }

            if(win.length > max) max = win.length;
        }

        return max;
    }
}
