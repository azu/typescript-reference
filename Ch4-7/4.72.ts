// LICENSE : MIT
"use strict";
class DataContainer<T> {
    data:T;
}
// ジェネリクス
var container = new DataContainer<string>();
container.data = "sss";

function last<T>(array:T[]):T {
    return array[array.length - 1];
}