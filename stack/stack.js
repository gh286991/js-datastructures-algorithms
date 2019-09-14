

export default function Stack (){
    var item = []

    this.push = function(element){
        item.push(element)
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

const stack = new Stack()
console.log(stack.isEmpty())

stack.push(2)
stack.push(4)
console.log(stack.peek())
stack.push(11)
console.log(stack.size())
console.log(stack.isEmpty())