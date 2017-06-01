(function(exports){
  "use strict";
  function Utility(){};

  Utility.prototype = function(){
    let loadTemplate = function(url){
        return $.get(url, function (data) {
            var parsed = $.parseHTML(data);
            return parsed;
        });
    };
    let guid = function () {

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
          s4() + '-' + s4() + s4() + s4();
    };
    let s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
    };
    return {
      loadTemplate : loadTemplate,
      getGuid : guid
    }
  }();

  let utility = (function(){
    return new Utility();
  })();
exports.utility = utility;

})(this);
