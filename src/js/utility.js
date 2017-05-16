
function Utility(){

};

Utility.prototype = function(){
  /**
  * Function name: loadTemplate
  * Author: STK
  * Description : This method used to load HTML templates
  * Param1: 'url' : to pass url of the html template
  * Param2: callback to retrieved parsed html
  */

  var loadTemplate = function (url) {
      return $.get(url, function (data) {
          var parsed = $.parseHTML(data);
          return parsed;
      });
  };

  var guid = function () {

      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
  };

  var s4 = function () {

      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
  };

  return {
      loadTemplate: loadTemplate,
      getGuid: guid

  };
}();

module.exports = Utility;
