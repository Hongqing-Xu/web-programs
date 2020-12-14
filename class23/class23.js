// var pitaya = {}

// console.log(pitaya instanceof Object)

// console.log(Object)

+function(){
    console.log("this is no.1")
    setTimeout(function(){               //setTimeout() 是属于 window 的方法，该方法用于在指定的毫秒数后调用函数或计算表达式。
           console.log("this is no.2")   //setTimeout(要执行的代码, 等待的毫秒数)                             
    },1000);                             //setTimeout(JavaScript 函数, 等待的毫秒数)
    console.log("this is no.3");
    
}()