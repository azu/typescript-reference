// LICENSE : MIT
"use strict";
interface Message {
    from:string;
    text: string;
    build():string;
}
interface Present extends Message {
    contents : any;
}

// 定義を追加したい場合は同じ名前で追加する
interface Present {
    text: string;
}