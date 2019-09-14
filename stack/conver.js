import Stack from './stack'
// import Stack from './stackES6'


const remStack = new Stack()
let rem
let binarySrting =''

const divideby2 = (decNumber)=>{

    while (decNumber>0) {
        rem = Math.floor(decNumber%2);
        remStack.push(rem)
        decNumber = Math.floor(decNumber/2)
    }

    while (!remStack.isEmpty()) {
        binarySrting += remStack.pop().toString();
    }

    return binarySrting

}

console.log(divideby2(19))