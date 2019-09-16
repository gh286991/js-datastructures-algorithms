
import Stack from './stackES6'


function towerOfHanoi(n , start , target ,buffer){

    if(n>0){
        towerOfHanoi(n-1, start, buffer, target); //把n-1個從start搬到buffer
        console.log('n' , n)
        target.push(start.pop());   //把剩下的從start搬到target
        console.log( `${start.name} = ${start.toString()}` )
        console.log( `${buffer.name} = ${buffer.toString()}` )
        console.log( `${target.name} = ${target.toString()}` )
        console.log('------------')
        towerOfHanoi(n-1, buffer, target, start); //把n-1個從buffer搬到target
    }
}

const start = new Stack();
const end = new Stack();
const helper = new Stack();

start['name'] = 'A'
end['name'] = 'C'
helper['name'] = 'B'

// start.push(7);
// start.push(6);
// start.push(5);
// start.push(4);
start.push(3);
start.push(2);
start.push(1);


const N = start.size()

start.print()

towerOfHanoi(N,start,end,helper)
console.log('----end---')
end.print()
