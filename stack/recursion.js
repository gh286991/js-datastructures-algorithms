function factorial(num){
    console.log('num ' ,num)
    if(num<=1){
        return 1;
    }else{
        const Fn = num * factorial(num-1)
        console.log('num in F' ,num , 'Fn' , Fn)
        return Fn;
    }
}

function sum(num){
    let Sn = 0
    for (let i = 1; i <= num; i++) {
        Sn +=  i
    }
    return Sn
}

function sumRecursion(num){
    if( num == 1){
        return 1;
    }else{
        const Sn = sumRecursion(num-1)+num
        return Sn
    }
}


console.log('迴圈加法 ',sum(6))
console.log('遞迴加法 ',sumRecursion(6))



console.log('斐波那契數列 ',factorial(6))