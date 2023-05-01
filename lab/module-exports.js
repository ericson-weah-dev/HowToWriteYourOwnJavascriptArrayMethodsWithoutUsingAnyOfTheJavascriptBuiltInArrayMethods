(global => {

      // Define the module
      const myModule = {};

      //add a function or method to the module
      myModule.fn = () => {};

      // Export the module
    if (typeof module !== 'undefined' && module.exports) {
        // Node.js environment
        module.exports = myModule;

      } else {
        // Browser environment
        
        global.myModule = myModule;
      }

})(this)