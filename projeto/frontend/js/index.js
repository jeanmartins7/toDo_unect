(function (wim, DOM, doc) {
    "use strict";
     
  
    var app = (function appController() {
      return {
        init: function init() {
          console.log("Init");
        },        
      };
    })();
    app.init();
  })(window, window.DOM, document);
  