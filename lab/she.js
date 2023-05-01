((root, factory) => {
    // AMD module support
  if(typeof define === 'function' && define.amd) define(['exports'], factory);
  // CommonJS module support
  else if (typeof exports === 'object' && typeof exports.nodeName === 'string') factory(exports);
  // Browser globals
  else factory((root.myModule = {}));

})(this, exports => {

    // You code go here...
   

})