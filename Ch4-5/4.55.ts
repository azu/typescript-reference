// LICENSE : MIT
"use strict";
// 内部モジュール
module MyApp {
    class NotExported {

    }
    export class Exported {

    }
    export module InnerModule {
        export class Exported {

        }

    }
}
var i = new MyApp.InnerModule.Exported();