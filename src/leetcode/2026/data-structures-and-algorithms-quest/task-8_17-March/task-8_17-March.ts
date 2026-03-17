export function evalRPN(tokens: string[]): number {
  while (tokens.length !== 1) {
    for (let i = 0; i < tokens.length; i++) {
      if (!Number.isInteger(parseInt(tokens[i]))) {
        let operationResult = performOperation(
          parseInt(tokens[i - 2]),
          parseInt(tokens[i - 1]),
          tokens[i],
        );
        tokens.splice(i - 2, 3, operationResult.toString());
        break;
      }
    }
  }
  return parseInt(tokens[0]);
}

function performOperation(a: number, b: number, operation: string): number {
  switch (operation) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "*":
      return a * b;
      break;
    case "/":
      return a / b;
      break;
    default:
      throw new Error("Wrong operation. Should be +,-,* or /.");
  }
}
