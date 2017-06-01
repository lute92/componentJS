
(function(exports){
  "use strict";

  function Button(){
      this.value= "";
      this.id = utility.getGuid();
      this.onClick = function(){};
      this.parentId = "";
      this.parentByNameIndex = [];
  };

  Button.prototype = function(){
      let _type =  "btn-default",
      let _show = true,
      let _hide = false,
      let _disable = false,
      let _enable = true,
      _htmlContext = null,
      
      getHtmlContext = function(){
          return _htmlContext;
      },
      setHtmlContext = function(val){
          _htmlContext = val;
      },
      getType =function(){
          return _type;
      },
      setType =function(css){
          _type = css;
      },
      getId = function(){
          return this.id;
      },
      getParentId = function(){
          return this.parentId;
      },
      bindOnClickEvent = function(currentComponent, onClick){
        currentComponent.addEventListener("click", function(e){
          try{
            onClick(e);
          }catch(err){
            throw err;
          }
        })
      },
      type = {
        default : function(){
            setType("btn-default");
        },
        warning : function(){
            setType("btn-warning");
        },
        success : function(){
            setType("btn-success");
        },
        danger : function(){
            setType("btn-danger");
        },
        info : function(){
            setType("btn-info");
        },
        primary : function(){
            setType("btn-primary");
        }
      },
      initialize = function(){
        let ele = document.getElementById(this.getId());
        if (ele!== null) ele.parentNode.removeChild(ele);

        let currentComponent = undefined;

        if(this.parentId != undefined){//ParentId is given
            document.getElementById(`${this.parentId}`).innerHTML = `<button id=${this.getId()} class='btn ${getType()}'>${this.value}</button>`;
            currentComponent = document.getElementById(this.getId());
        }else if(this.parentByNameIndex.length == 2){//ParentName and Index are given
            document.getElementsByName(`${this.parentByNameIndex[0]}`)[this.parentByNameIndex[1]].innerHTML = `<button id=${this.getId()} class='btn ${getType()}'>${this.value}</button>`;
            currentComponent = document.getElementsByName(this.parentByNameIndex[0])[this.parentByNameIndex[1]];
        }else {
          //throw Error.parentIdNotGiven();
        }
        setHtmlContext(currentComponent);
        bindOnClickEvent(currentComponent, this.onClick);
      },
      remove = function(){
        document.getElementById(this.getId()).parentNode.removeChild(document.getElementById(this.getId()));
      },
      disable = function(){
        document.getElementById(this.getId()).readOnly = true;
      },
      enable = function(){
        document.getElementById(this.getId()).readOnly = false;
      },
      show = function(){
        document.getElementById(this.getId()).style.visibility = "visible";
      },
      hide = function(){
        document.getElementById(this.getId()).style.visibility = "hidden";
      };

      return {
        getHtmlContext : getHtmlContext,
        setHtmlContext : setHtmlContext,
        getType : getType,
        getId : getId,
        getParentId : getParentId,
        type: type,
        init : initialize,
        remove : remove,
        disable : disable,
        enable : enable,
        show : show,
        hide: hide

      }
  }();
  exports.Button = Button;
})(this);
