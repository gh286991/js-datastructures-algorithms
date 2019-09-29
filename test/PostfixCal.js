
const input = ['1','+','2' ,'×','3' , '×' ,'4' ,]

let operator=[];
let readyPop=false;

function toPostfix(data){
    let formula=[]; 
    for(let i=0;i<data.length;i++){   
      //遇見數字就抓出來
      if( !isNaN(data[i])){
        formula.push(data[i]);
        // pop直到 operator空掉
        if(readyPop){
           readyPop=false;
           while (operator.length>0){
             //存進 formula中
             formula.push(operator.pop());
           }
        } 
      }
      //遇到運算子就送進 stack
      else{
          if( data[i] == '+' | data[i] == '-'){
             if(i-1>1 & (data[i-2] == '+' | data[i-2] == '-')){
               formula.push(operator.shift());
             }
             operatorSink(data[i]);
          }
          else if( data[i] == '×' | data[i] == '÷'){
             readyPop=true;
             operatorSink(data[i]);
          };
      };

      console.log('formula' ,formula)
      console.log('oprator' ,operator)
     };
     //迴圈結束時若stack還沒排空，就排空他
     while(operator.length>0){
        formula.push(operator.pop());
     };
    return formula;
  };


  function operatorSink(stack){
    let len=operator.length;
    
    //若stack為空，直接丟入運算子
    if(len ==0 | stack == '×' | stack == '÷'){
      operator.push(stack);
      return;
    }
    //遇到"+" 或 "-"就開始 Sinking 
    operator.push(stack);
    len=operator.length;
    for(let i=len-1; i>=0;i--){
      if( i-1>=0 ){
        //元素交換
        let buffer=operator[i-1];
        operator[i-1]=operator[i];
        operator[i]=buffer;
      }
    };
  };



//使用後序式來進行計算
function postfigCal(datalist){
    let calculator=[];
    datalist=toPostfix(datalist);
    for(let i=0;i<datalist.length;i++){
       
       //如果是數字就push
       if('+-×÷'.indexOf(datalist[i]) == -1){
         datalist[i]=parseFloat(datalist[i]);
         calculator.push(datalist[i]);
       }else{
         //如果是運算子的話就開始計算
         let symbol=datalist[i];
         let len=calculator.length;
         //當calculator裡已經剩一筆資料時而formula的下一筆資料是運算子時 return
         if(len-2<0){ return calculator[0];};
         //將陣列最後端的數字pop出來，
         switch(symbol){
           
           case "+":
             calculator[len-2]=preciseCal(calculator[len-2],calculator.pop(),'+');
             break;
           case "-":
             calculator[len-2]=preciseCal(calculator[len-2],calculator.pop(),'-');
             break;
           case "×":
             calculator[len-2]=preciseCal(calculator[len-2],calculator.pop(),'x');
             break;
           case "÷":
             calculator[len-2]=preciseCal(calculator[len-2],calculator.pop(),'÷');
             break;
         };
       };
    };
    //輸出答案
    return calculator[0];
  };

  function preciseCal(arg1,arg2,operator){
    const num1=(arg1.toString().split('.')[1] || '').length;
    const num2=(arg2.toString().split('.')[1] || '').length;
    const baseNum=Math.pow(10,Math.max(num1,num2));
    switch(operator){
      case '+':
       return (arg1*baseNum + arg2*baseNum)/baseNum;
      case '-':
       return (arg1*baseNum - arg2*baseNum)/baseNum; 
      case 'x':
       return (arg1*baseNum * arg2*baseNum)/baseNum**2; 
      case '÷':
       return (arg1*baseNum) / (arg2*baseNum); 
    }
  }
const test = toPostfix(input)
console.log('test' , test)

// const result = postfigCal(input)
// console.log('result ' , result)