interface IShape {
    area():number;
}
interface ISquare {
    width : number;
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
    constructor(public corner:ISquare) {

    }

    area() {
        return this.corner.width * this.corner.height;
    }
}
// 関数のパーバーロード
function createShape(kind:"circle", r:number):Circle;
function createShape(kind:"square", corner:ISquare):Square;
function createShape(kind:string, data:any):IShape;
function createShape(kind:string, data:any):IShape {
    if (kind === "circle") {
        return new Circle(data)
    } else if (kind === "square") {
        return new Square(data);
    }
}

var circle:Circle = createShape("circle", 4);
console.log(circle.area());

var square:Square = createShape("square", {width: 3, height: 4});
console.log(square.area());