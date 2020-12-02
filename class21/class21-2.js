//javascript原型链
function Object2(){
      this.__proto2__ = Object2.prototype2
}
Object2.prototype2 = {
    __proto2__: null,
    constructor:Object2,
    prototype2:Object2.prototype2
};
var obj = new Object2()
console.log(obj.__proto2__.__proto2__)




function Function(){
    this.__proto2__ = Function.prototype2
}
Function.prototype2={
    __proto2__:null,
    constructor:Function,
    prototype2:Function.prototype2
}
var F1 = new Function()
console.log(F1.__proto2__.__proto2__)




function Pear(){
    this.__proto2__ = Pear.prototype
}
Pear.prototype={
    __proto2__:null,
    constructor:Pear,
    prototype2:Pear.prototype2
}
var P1 = new Pear()
console.log(P1.__proto2__.__proto2__)