(global => {

      // Define the module
      const concat = {};

      //add a function or method to the module
      concat.fn = () => {};

      // Export the module
    if (typeof module !== 'undefined' && module.exports) {
        // Node.js environment
        module.exports = concat;

      } else {
        // Browser environment
        
        global.concat = concat;
      }

})(this)