/**
 * https://stackoverflow.com/questions/10314891/how-to-use-functionglobal-this
 * https://www.cnblogs.com/chucklu/p/11102944.html
 * https://zhuanlan.zhihu.com/p/381553664
 *
 * 这是UMD模式
 *
 * 用这样的方式来写这个结构，没有创建任何不必要的全局变量和函数，因此避免了污染全局区域并且避免了与其他库变量或函数名的冲突。
 *
 * IIFE 立即调用函数表达式
 * (function(a,b){})(a,b)
 *
 * this -> global
 * function(exports){} -> factory
 *
 * global根本上就是当从函数外部引用时指向全局对象（浏览器的window和node.js 未命名），window是一个完全没有保护的全局变量，任何第三放库都可以重写或者修改它
 * factory是创建库对象的函数
 */
(function (global, factory) {
  // node.js commonjs
  console.log("typeof exports:", typeof exports);
  console.log("typeof module:", typeof module);
  // require.js
  // 此代码检查是否存在require.js, 这是一个JavaScript依赖关系管理库.
  // 如果'define'有定义且它是一个函数并且'amd'(异步模块定义)也被定义, 则代码假定require.js正在运行.
  // 如果是这样, 那么它定义'factory'并将 exports 作为依赖项传递给它.否则,它通过将代码附加到根对象来设置代码所需的依赖项.
  // 至于'factory'是什么:它不是由Javascript框架定义的,它最有可能是同一个文件中的一个函数.
  console.log("typeof define:", typeof define);

  global.d3 = global.d3 || {};

  typeof exports === "object" && typeof module !== "undefined"
    ? factory(exports)
    : typeof define === "function" && define.amd
    ? define(["exports"], factory)
    : factory(global.d3);
})(this, function (exports) {
  "use strict";
  var version = "4.5.0";
  // 实际值 global.d3 => 形参 exports
  exports.version = version;
});

/* =================================================================================== */
function anonymous(exports) {
  "use strict";
  var version = "4.5.0";
  exports.version = version;
}

anonymous((this.gn = this.gn || {}));

console.log(gn); // gn = window.gn;
/* =================================================================================== */
