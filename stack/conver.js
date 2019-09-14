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


function baseConverter(decNumber, base){

    var remStack = new Stack(),
        rem,
        baseString = '',
        digits = '0123456789ABCDEF';

    while (decNumber > 0){
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }

    while (!remStack.isEmpty()){
        baseString += digits[remStack.pop()];
    }

    return baseString;
}

console.log('--------')
console.log(baseConverter(999 , 2))
console.log(baseConverter(999 , 8))
console.log(baseConverter(999 , 16))