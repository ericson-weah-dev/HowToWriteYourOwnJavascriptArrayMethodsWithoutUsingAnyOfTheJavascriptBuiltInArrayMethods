// my-module.js
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
      // AMD
      define(['exports'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
      // CommonJS
      factory(exports);
    } else {
      // Browser globals
      factory((root.myModule = {}));
    }
  }(this, exports => exports.myFunction = () => {
    console.log('Hello There!')
  }));