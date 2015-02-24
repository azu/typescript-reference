/*
    functionはオブジェクトなので、クラスと違ってメンバー変数の定義がない
 */
function Sample() {
}
var s1 = new Sample();
var s2 = new Sample();
s1.name = "string";
s2.name = "string";
