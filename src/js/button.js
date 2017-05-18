
let utility = require('./utility.js');


function Button(){
    this.value= "Button";
    this.id = utility.getGuid();
    this.onClick = function(){};
    this.parentId = undefined;
    this.parentByNameIndex = undefined;
};

Button.prototype = function(){

    let _type="btn-default";
    let _htmlContext = null;

    let getHtmlContext = function(){
        return _htmlContext;
    };

    let setHtmlContext = function(val){
        _htmlContext = val;
    }

    let getType = function(){
        return _type;
    };

    let setType = function(css){
        _type = css;
    };

    let getId = function(){
        return this.id;
    };

    let getParentId = function(){
        return this.parentId;
    };

    let setPlaceHolderById = function(val){
        placeHolderId = val;
    };

    let bindOnClickEvent = function(currentComponent, onClick){
      //let currentCallBack = onEnterKeyPress;
      $(currentComponent).on('click',function(e){
        onClick(e);
      });

    };

    let type = function(){
        return new ButtonType();
    };

    let ButtonType = function(){

    };

    ButtonType.prototype = function(){

        let _default = function(){
            setType("btn-default");
        };

        let warning = function(){
            setType("btn-warning");
        };

        let success = function(){
            setType("btn-success");
        };

        let danger = function(){
            setType("btn-danger");
        };

        let info = function(){
            setType("btn-info");
        };

        let primary = function(){
            setType("btn-primary");
        };

        return {
            default: _default,
            success : success,
            warning : warning,
            danger : danger,
            info : info,
            primary : primary
        };
    }();

    let initialize = function(){
      $(`#${this.id}`).remove();
      let currentComponent = undefined;
      if(this.parentId != undefined){//ParentId is given
          document.getElementById(`${this.parentId}`).innerHTML = `<button id=${this.id} class='btn ${getType()}'>${this.value}</button>`;
          currentComponent = document.getElementById(this.id);
      }else if(this.parentByNameIndex.length == 2){//ParentName and Index are given
          document.getElementsByName(`${this.parentByNameIndex[0]}`)[this.parentByNameIndex[1]].innerHTML = `<button id=${this.id} class='btn ${getType()}'>${this.value}</button>`;
          currentComponent = document.getElementsByName(this.parentByNameIndex[0])[this.parentByNameIndex[1]];
      }
      setHtmlContext($(currentComponent));
      bindOnClickEvent(currentComponent, this.onClick);
    }

    return {
        getId: getId,
        getParentId : getParentId,
        type: type,
        getType: getType,
        initialize : initialize,
        getHtmlContext : getHtmlContext
    };
}();

module.exports = Button;
