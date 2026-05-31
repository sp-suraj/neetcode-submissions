class Solution {
    evalRPN(tokens) {
        const stack = [];

        for (const token of tokens) {
            if (!isNaN(token)) {
                stack.push(Number(token));
            } else {
                const b = stack.pop();
                const a = stack.pop();

                switch (token) {
                    case "+":
                        stack.push(a + b);
                        break;
                    case "-":
                        stack.push(a - b);
                        break;
                    case "*":
                        stack.push(a * b);
                        break;
                    case "/":
                        stack.push(Math.trunc(a / b));
                        break;
                }
            }
        }

        return stack[0];
    }
}