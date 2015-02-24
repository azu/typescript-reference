// LICENSE : MIT
"use strict";
function Base(){

}
function Derived(){
}

Derived.prototype = Object.create(Base.prototype);
var obj = new Derived();
console.log(obj instanceof Base);
console.log(obj instanceof Derived);