var button = require('./button.js');
function Glass(){};

Glass.prototype = function(){

  let getButton = function(){
    return new button();
  };

  return {
    getButton : getButton
  };


}();

var _publish = (function getGlass() {
  return new Glass();
})();



module.exports = _publish;
