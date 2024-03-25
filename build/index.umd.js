/*!
 * demo 0.0.1 (https://git.sztv.com.cn/1sz/ysz-sdk-utils)
 * API https://git.sztv.com.cn/1sz/ysz-sdk-utils/blob/master/doc/api.md
 * Copyright 2024-2024 ShoujieLi. All Rights Reserved
 * Licensed under MIT (https://git.sztv.com.cn/1sz/ysz-sdk-utils/blob/master/LICENSE)
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.demo = {}));
})(this, (function (exports) { 'use strict';

    var SK = "hello";

    function test() {
        console.log("test", SK);
    }
    var DemoUtil = {
        test: test
    };

    exports.DemoUtil = DemoUtil;

}));
