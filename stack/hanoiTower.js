
// import Stack from './stack'
import Stack from './stackES6'


function towerOfHanoi(n , start , target ,buffer){
    // console.log('n' , n)
    if(n>0){
        towerOfHanoi(n-1, start, buffer, target); //把n-1個從start搬到buffer

        target.push(start.pop());   //把剩下的從start搬到target
        console.log('=========')
        // console.log('n = ' , n ,' ', +start.toString()+"->"+target.toString());
        console.log("Move disc " + n + " from " + start + " to " + target );
        // console.log('start' , start.toString())
        // console.log('buffer' , buffer.toString())
        // console.log('target' , target.toString())
        console.log('==========')
        
        
        towerOfHanoi(n-1, buffer, target, start); //把n-1個從buffer搬到target
        console.log('---------')
        console.log("Move disc " + n + " from " + start + " to " + target );
        console.log('---------')
        //buffer >> to target
    }
}

const start = new Stack();
// start.push(7);
// start.push(6);
// start.push(5);
// start.push(4);
start.push(3);
start.push(2);
start.push(1);

const end = new Stack();
const helper = new Stack();
const N = start.size()

start.print()

// towerOfHanoi(N,start,end,helper)

console.log('----end---')
towerOfHanoi(N,start,end,helper)
end.print()
