// LICENSE : MIT
"use strict";
enum Suit{
    Spade,
    Heart,
    Club,
    Diamond
}
var suit1:Suit = Suit.Spade;
var suit2:number = suit1;
console.log(suit2);// 0
var suit2Str:string = Suit[suit2];
console.log(suit2Str);// "Space"

// 文字列を取り出す場合にはindexを見る
console.log(Suit[Suit.Spade]);// "Space"
