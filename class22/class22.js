window.$5 = function(){
    console.log("this is $5 in window object")
}

window.document.$5 = function(){
    console.log("this is $5 in window document object")
}($5())




//要在浏览器中运行
function $2(x){
    if(typeof x == "string"){
        let targets = window.document.getElementsByTagName(x)
        if(targets.length>0){
            let array = targets;
            for(let index = 0;index<array.length;index++){
                const element = array[index];
                element.style.backgroundColor = "#fff"
            
        }       }
    }
}
$2("div")




+function $(){
    -function(){
        console.log("this is pear")
        void function(){
            console.log("this is nut")
            console.log($.name)
        }()
    
    }()
    this.name="my name is $"
}()




;(function (x) {
    console.log("this is chestnut")
    return ((x) => function () {
    console.log("this is haw")
    x.printName= function(){
    console.log("this is x().printName")
    return this.name
    }
    return 200 + x.printName() + x()
    }())(() => { this.name=6666;console.log("this is pitaya");return 3999})
})() 






function watermelon (name,price,number){
    this.name = name,
    this.price = price,
    this.number = number
    }
    watermelon.prototype.getSum = function (){
    console.log("price*number")
    }






var lichees = [
    () => {
    return function () {
    console.log("this is number 1")()
    }
    },
    +function(){console.log("this is number 2")}(),
    {
    name:"this is lichee 3"
    },
    2000,
    "this is lichee 4",
    null,
    new Object({}),
    Object.create({}),
    Object.prototype,
    new Object({}).__proto__,
    new Date(),
    function licheeNut(){
    return {
    printNut:()=>{
    console.log("thisis printNut")
    }
    }
    },
    Object.prototype.tag = "this is tag",
    Object.tag
    ]





function Function(){
    return {
    name:"this is NanChang",
    printName: function (){
    console.log("this city is " + this.name)
    }
}
}  






function orange(){
    console.log("this is orange")
    }
    orange.prototype= function (){
    this.name = "张三",
    this.price= 20
    this.getPrice= function (){return this.price}()
    }    