Array.prototype.getLast = function() {
    return this[this.length - 1];
};

Array.prototype.isEmpty = function() {
    return this.length == 0;
};

function priority(c) {
    return c === '+' || c === '-' ? 1 : c === '*' || c === '/' ? 2 : 0;
}

function toPostfix(infix, isPost) {
    isPost = isPost === undefined ? true : false;  // 判斷是否要後置 true 後置
    // console.log('isPost' , isPost)
    var expr = isPost ? infix.split('') : infix.split('').reverse(); // 分割
    console.log('expr 輸入的題目', expr)
    var stack = [];
    var output = [];
    var toStack = isPost ? '(' : ')';
    var toOutput = isPost ? ')' : '(';

    expr.forEach(function(c) {
        if(c === toStack) { stack.push(c); }

        else if('+-*/'.indexOf(c) !== -1) {

            while(!stack.isEmpty() && 
                   priority(stack.getLast()) >= priority(c)) 
                   //當stack不是空然後最後一個的stack中優先度 又大於現在的時候
            {
                output.push(stack.pop()); //直接把現在stack推到outPut 並移除
            }  // 執行到優先度低

            stack.push(c); //不然就一直加上去stack
        }

        else if(c === toOutput) {
            while(stack.getLast() !== toStack) {
                output.push(stack.pop());
            }
            stack.pop();
        } //先不管符號


        else { output.push(c); } //數字的話直接push到output

        console.log('expr = ', c,' stack = ' , stack , ' output= ' , output)
    });

    
    while(!stack.isEmpty()) { output.push(stack.pop()); }  //最後一個把他推上去
    
    return isPost ? output.join('') : output.reverse().join('');
    //只是合併字串而已
}

function toPrefix(infix) {
    return toPostfix(infix, false);
}

// var infix = "(a+b)*(c+d)";
const infix = "5+6*5+7"


console.log(toPostfix(infix));
// console.log(toPrefix(infix));
