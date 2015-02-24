// LICENSE : MIT
"use strict";
interface IShape {
    area():number;
}
interface ICorner {
    width :number;
    height: number;
}
class Circle implements IShape {
    constructor(public r:number) {

    }

    area() {
        return this.r * this.r * Math.PI;
    }

}

class Square implements IShape {
    constructor(public corner:ICorner) {
    }

    area() {
        return this.corner.width * this.corner.height;
    }
}

// シグネチャで引数を決める
function createShape(kind:"circle", r:number):Circle;
function createShape(kind:"square", corner:ICorner):Square;
function createShape(kind:string, data:any):IShape;
function createShape(kind:string, data:any):IShape {
    if (kind === "circle") {
        return new Circle(data);
    } else if (kind === " square") {
        return new Square(data);
    }
}
var circle:Circle = createShape("circle", 3);
console.log(circle.area());

