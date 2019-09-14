
// import Stack from './stack'
import Stack from './stackES6'


function towerOfHanoi(n, from, to, helper){
    console.log('======out======');
    console.log('n....' , n)
    if (n > 0){
        console.log('----in if-----')
        towerOfHanoi(n-1, from, helper, to);
        console.log('Source: ' + from.toString());
        console.log('Dest: ' + to.toString());
        console.log('Helper: ' + helper.toString());
        console.log('====before push=======')
        to.push(from.pop());
        console.log('-----');
        console.log('Source: ' + from.toString());
        console.log('Dest: ' + to.toString());
        console.log('Helper: ' + helper.toString());
        towerOfHanoi(n-1, helper, to, from);
    }
}


var source = new Stack();

source.push(3);
source.push(2);
source.push(1);

var dest = new Stack();
var helper = new Stack();

// towerOfHanoi(source.size(), source, dest, helper);

console.log('---end-----')
source.print();
helper.print();
dest.print();


function test(n){
    // console.log('======out======');
    // console.log('n....' , n)
    // if (n > 0){
    //     console.log('----in if n-----' , n)
    //     test(n-1);
    //     console.log('in if --- n' ,n)
    // }
    console.log('======out====== n' ,n);
    if(n>0){
        test(n-1);
    }
   
    console.log('----in if n-----' , n)
}

test(4)