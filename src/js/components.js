
var button = require('./button.js');

function Components(){

};

Components.prototype = function(){

  let getButton = function(){
    return new button();
  };

  return {
    getButton : getButton
  };

}();

module.exports = Components;
