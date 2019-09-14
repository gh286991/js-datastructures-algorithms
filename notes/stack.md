# js實作資料結構--堆疊

堆疊是一種**後進先出**(Last In, First Out，**LIFO**)的方法，就像一般書疊起來一樣的堆疊。

![攝影師： **Suzy Hazelwood** ，連結： **[Pexels](https://www.pexels.com/zh-tw/photo/1130980/)**](https://i.imgur.com/H9EYXch.jpg)



## 堆疊方法建立

建立一個stack函數，裡面設定一個item陣列來存放資料，基本上整個堆疊也是用array來放資料的。

```js
function Stack (){
    let item = []
... 各種方法
}
```

裡面給以下一些屬性方法：

1. push() : 增加新元素到頂部，也就是陣列的最後
2. pop() : 移除堆疊頂部的元素
3. peek()：返回最頂部的元素
4. isEmpty(): 堆疊裡是否有元素
5. clear(): 移除堆疊裡面的元素
6. size(): 返回元素個數

**Push & Pop**

![](https://i.imgur.com/Kzo4TMu.jpg)

push還有pop我們可以和array用一樣的方法來達成目的，push會把元素增加在array後面，pop可以移除陣列最後一個元素，這就和增加/移除堆疊的書本最上面那個是一樣的意思。

```js
this.push = function(element){
    item.push(element)
}

this.pop = function(){
    return item.pop()
}
```
**Peek**

peek為看最上面的元素是什麼，直接回傳陣列的長度減1就是最上面的元素了。

**isEmpty**

堆疊物件裡面是否有東西？直接確定陣列的長度是否為0即可，是就會是ture，代表有東西，反之就是沒東西。

**Size**

size看堆疊物件裡面有多少個東西，基本用法和陣列的array一樣。

**Clear**

直接把陣列清空

**Print**

直接把stack裡面的陣列印出來

```js
function Stack (){
    var item = []

    this.push = function(element){
        itemisEmptyisEmpty.push(element)
    }

    this.pop = function(){
        return item.pop()
    }

    this.peek = function(){
        return item[item.length-1]
    }

    this.isEmpty =function(){
        return item.length == 0
    }

    this.size = function(){
        return item.length
    }

    this.clear =function(){
        item = []
    }
  
    this.print = function(){
        console.log(item.toString())
    }
}
```

## 使用Stack

```js
const stack = new Stack()     // 宣告新的物件
console.log(stack.isEmpty())  // false 空的 

stack.push(2)
stack.push(4)
console.log(stack.peek())     //4 最後一個推進去的元素 
stack.push(11)
console.log(stack.size())			//3 [2,4,11]裡面有三個元素
console.log(stack.isEmpty())	// ture 現在裡面有東西了 
```

## 使用堆疊方法轉成二進制

將十進位數字轉為2進位的方法就是將一個數字除2把餘數堆疊上去，被除的數字繼續除2直到0為止。

![二進位](https://i.imgur.com/j3PsAZ3.jpg)

```js
import Stack from './stack'
// import Stack from './stackES6'


const remStack = new Stack()
let rem
let binarySrting =''

const divideby2 = (decNumber)=>{

    while (decNumber>0) {
        rem = Math.floor(decNumber%2);  // 取/2的餘數
        remStack.push(rem)							// 堆疊餘數進去
        decNumber = Math.floor(decNumber/2) // input的數字/2後取無條件捨去後的商
    }

    while (!remStack.isEmpty()) {
        binarySrting += remStack.pop().toString();
    }   // 從最上面反著印回來字串
    return binarySrting

}

console.log(divideby2(19))
```

## 轉成2,8,16進制



```

```



------------

本筆記為 [JavaScript資料結構及演算法實作](https://www.books.com.tw/products/0010712666) 第三章的閱讀筆記