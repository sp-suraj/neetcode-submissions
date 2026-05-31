class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for (let token of tokens) {
            console.log({ token, stack });
            if (!["+", "-", "*", "/"].includes(token)) {
                stack.push(token);
            } else {
                let n2 = stack.pop();
                let n1 = stack.pop();
                let resp;
                if (token === "+") resp = parseInt(n1) + parseInt(n2);
                if (token === "-") resp = parseInt(n1) - parseInt(n2);
                if (token === "*") resp = parseInt(n1) * parseInt(n2);
                if (token === "/")
                    resp = Math.trunc(parseInt(n1) / parseInt(n2));
                stack.push(resp);
            }
        }
        return stack[0];
    }
}
