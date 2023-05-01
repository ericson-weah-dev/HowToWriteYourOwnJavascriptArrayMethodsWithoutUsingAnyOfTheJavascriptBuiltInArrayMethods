// my-module.js
(function(global) {
    // Define the module
    const myModule = {};
  
    myModule.myFunction = () => {}
  
    // Export the module
    if (typeof module !== 'undefined' && module.exports) {
      // Node.js environment
      module.exports = myModule;
    } else {
      // Browser environment
      global.myModule = myModule;
    }
  }(this));