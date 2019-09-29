var expression = "1 2 * + 3 4 *";
var postfix = expression.split(" ");
var postfixStack = [];


postfix.forEach( function(current) {
    if ( isOperator(current) ) {
        postfixStack.push( 
            compute( postfixStack.pop(), 
				symbolToOperator(current), 
				postfixStack.pop() 
			)
        );
    }
    else {
        postfixStack.push(current);
    }   
});

function isOperator(toCheck) {
    switch (toCheck) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            return true;
        default:
            return false;
    }
}

function compute(a, operator, b) {
    return operator(a,b); 
}

function symbolToOperator(symbol) {
    switch (symbol) {
        case '+': return plus;
        case '-': return minus;
        case '*': return multiply;
        case '/': return divide;
        case '%': return modulo;
    }
}

function plus(a,b) { return a + b; } 
function minus(a,b) { return a - b; }
function multiply(a,b) { return a * b; }
function divide(a,b) { return a / b; }
function modulo(a,b) { return a % b; }

console.log(postfixStack[0])