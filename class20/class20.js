let li = function lichee(){
    console.log("this is lichee")

}()

//lichee
//li()
//+//~  ! void

let li = function haw(){
    console.log("this is haw")
}()

void function haw(){
    console.log("this is haw")
}()

let h2 = ! function test(){      //强制类型转化，！布尔类型
    console.log("this is h2")
    return 0;   //false true
}()

console.log(h2)


第一种
var pi = function pitaya(){
    console.log("我是火龙果")
}

第二种

let pea1 = ' return ' + '`我是一粒${name}`';
let peanut5 = new Function('name',pea1);
console.log(peanut5("花生"))


var peanut6 = function(name){
    return "我是一粒" + name;
}
var melon3 = new Object()
var melon4 = new Object({})
var melon5= new Object()
let melon = {}
    let melon2 = {
        name:"我是甜瓜",
        price:30,
        weight:2,
        origin:"海南省",
        color:false,
        nut:{
            name:"我的是甜瓜的种子",
            price:40
        },
        printPrice:function(){
            console.log("我是价格")
        },
        printOrigin:()=>{
            console.log("原产地")
        }
}
    
var melon3 = new Object()
var melon4 = new Object({})
var melon7 = new Object(666)

var melon8 = new Object("1234567")
function Object2(x){
    x()
    666
}



function Person(name,sex,age,address){
    this.name = name,
    this.sex = sex,
    this.age = age,
    this.address = address,
    this.sayName=function(){
        console.log(this.name)
    }
    this.saySex=function(){
        console.log(this.sex)
    }
    this.sayAge=function(){
        console.log(this.age)
    }
    this.sayAddress=function(){
        console.log(this.address)
    }

}

Person.prototype.sayName2 = function(){
    console.log("this is say name 2")
}
Person.prototype.saySex2 = function(){
    console.log("this is say sex 2")
}

var p1 = new Person("张三",'男',20,"南昌市")
console.log(p1);
 p1.sayName()
 p1.sayName2()
 p1.saySex()
 p1.saySex2() 
 