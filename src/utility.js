/**
* This class contains general functions and components required for mdxcess javascript processes
* Created by: STK
*/


//Consturctor//
var Utility = function () {
    ///variables declare here
};


Utility.prototype = function () {

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

    /**
    * Function name: convertDisplayDate
    * Author: STK
    * Description : This method used to convert date string to required Date format
    * Param1: 'datestring' : pass jsonDateString here eg:20161214
    * Param2: 'format' : pass required format  (dd/MM/yyyy or dd/MMM/yyyy or MMM/dd/yyyy)
    */
    var convertDisplayDate = function ConvertDisplayDate(datestring, format) {

        if (datestring != null || datestring != "") {
            var months = new Array();
            months[0] = "January";
            months[1] = "February";
            months[2] = "March";
            months[3] = "April";
            months[4] = "May";
            months[5] = "June";
            months[6] = "July";
            months[7] = "August";
            months[8] = "September";
            months[9] = "October";
            months[10] = "November";
            months[11] = "December";


            var year = datestring.substring(0, 4);
            var month = datestring.substring(4, 6);
            var day = datestring.substring(6, 8);

            if (format == "dd/MM/yyyy") { //return format "01 December 2016"
                return day + " " + months[month - 1] + " " + year;
            }
            else if (format == "dd/MMM/yyyy") { //return format "01 Dec 2016"
                return day + " " + months[month - 1].substring(0, 2) + " " + year;
            }
            else if (format == "MMM/dd/yyyy") { //return format "December 01 2016"
                return months[month - 1] + " " + day + " " + year;
            }
            else if (format == "yyyy/MM/dd") { //return format "2016/12/14"
                    return year + "/" + month + "/" + day;
            }
            else if (format == "dd-mm-yyyy") { //return format "01-12-2016"
                return day + "-" + month + "-" + year
            }
            else { //Default
                return day + " " + months[month - 1] + " " + year;
            }

        }
        else {
            return undefined;
        }
    };

    /**
   * Function name: sortObjectByDate
   * Author: STK
   * Description : This method used to sort the array of object by its date field
   * Param1(Object): 'object' : pass object array here
   * Param2(String): 'datefield' : pass date field name of the object array here
   * Param3(String): 'format' : pass format of ur date string here (eg:'yyyy/MM/dd hh:mm:ss', 'yyyy/MM/dd':)
   * Param4(String): 'order' : pass 'asc' for ascending order and 'desc' for descending order
   */

    let sortObjectByDate = function (object, dateFieldName, format,order) {
        try {
            if (object.length > 0) {
                switch (format) {
                    case "yyyy/MM/dd hh:mm:ss":

                        object.sort(function (a, b) {
                            var yearA = a[dateFieldName].substring(0, 4);
                            var monthA = a[dateFieldName].substring(5, 7);
                            var dayA = a[dateFieldName].substring(8, 10);
                            var hourA = a[dateFieldName].substring(11, 13);
                            var minA = a[dateFieldName].substring(14, 16);
                            var secA = a[dateFieldName].substring(17, 19);

                            var yearB = b[dateFieldName].substring(0, 4);
                            var monthB = b[dateFieldName].substring(5, 7);
                            var dayB = b[dateFieldName].substring(8, 10);
                            var hourB = b[dateFieldName].substring(11, 13);
                            var minB = b[dateFieldName].substring(14, 16);
                            var secB = b[dateFieldName].substring(17, 19);

                            var dateA = new Date(yearA, monthA, dayA, hourA, minA, secA);
                            var dateB = new Date(yearB, monthB, dayB, hourB, minB, secB);

                            return order == 'asc' ? (dateA - dateB) : ((order == 'desc') ? (dateB - dateA) : (dateA - dateB));

                        });

                        return object;
                        break;
                    case "yyyy/MM/dd":

                        object.sort(function (a, b) {
                            var yearA = a[dateFieldName].substring(0, 4);
                            var monthA = a[dateFieldName].substring(5, 7);
                            var dayA = a[dateFieldName].substring(8, 10);
                            var hourA = a[dateFieldName].substring(11, 13);
                            var minA = a[dateFieldName].substring(14, 16);
                            var secA = a[dateFieldName].substring(17, 19);

                            var yearB = b[dateFieldName].substring(0, 4);
                            var monthB = b[dateFieldName].substring(5, 7);
                            var dayB = b[dateFieldName].substring(8, 10);
                            var hourB = b[dateFieldName].substring(11, 13);
                            var minB = b[dateFieldName].substring(14, 16);
                            var secB = b[dateFieldName].substring(17, 19);

                            var dateA = new Date(yearA, monthA, dayA, hourA, minA, secA);
                            var dateB = new Date(yearB, monthB, dayB, hourB, minB, secB);

                            return order == 'asc' ? (dateA - dateB) : ((order == 'desc') ? (dateB - dateA) : (dateA - dateB));

                        });
                        return object;
                        break;
                    default:
                        console.log("Un-supported date sorting format. mdxcessUtil.sortObjectByDate()");
                        break;
                }
            }
            else {
                return object;
                console.log("Can not sort array of zero. mdxcessUtil.sortObjectByDate()");
            }

        }catch(err){
            console.log(err);
        }

    };

    let sortObjectByCharacter = function (object, fieldName, format) {
        try {
            if (object.length > 0) {
                switch (format) {
                    case "charSort":
                        object.sort(function (a, b) {
                            var nameA = a[fieldName].toUpperCase(); // ignore upper and lowercase
                            var nameB = b[fieldName].toUpperCase(); // ignore upper and lowercase
                            if (nameA < nameB) {
                                return -1;
                            }
                            if (nameA > nameB) {
                                return 1;
                            }
                            // names must be equal
                            return 0;
                        });

                        return object;
                        break;

                    default:
                        console.log("Un-supported date sorting format. mdxcessUtil.sortObjectByCharacter()");
                        break;
                }
            }
            else {
                return object;
                console.log("Can not sort array of zero. mdxcessUtil.sortObjectByCharacter()");
            }

        } catch (err) {
            console.log(err);
        }
    };

    // time = 'hh:mm:ss'
    var toSeconds = function (time) {
        var parts = time.split(':');
        return (+parts[0]) * 60 * 60 + (+parts[1]) * 60 + (+parts[2]);
    };

    var toHHMMSS = function (sec) {
        var sec_num = parseInt(sec, 10); // don't forget the second parm
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours < 10) { hours = "0" + hours; }
        if (minutes < 10) { minutes = "0" + minutes; }
        if (seconds < 10) { seconds = "0" + seconds; }
        var time = hours + ':' + minutes + ':' + seconds;
        return time;
    };

    /**
  * Function name: ajaxSpinner
  * Author: STK
  * Description : To show progress (loading Wheel) on ajax calls. Call this method inside document.ready for safe call
  * Style: inside mdxcess-util.css
  */
    var ajaxSpinner = function () {

        $(document).ajaxStart(function () {
            $(document.body).find('.loading').remove();
            $(document.body).append("<div class='loading'>Loading</div>");
        });

        $(document).ajaxStop(function () {
            $(document.body).find('.loading').remove();

        });

    };

    var ComponentJsException = function (message) {
      this.message = message;
      this.name = 'ComponentJs Exception';
    }
  /**
  * Function name: guid
  * Author: STK
  * Description : generate GUID

  */
    var guid = function () {

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
          s4() + '-' + s4() + s4() + s4();
    };

    var s4 = function () {

        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
    };

    /**
    * Function name: getAlertBox
    * Author: STK
    * Description : return an alertbox compoent instance
    *
    */

    let getAlertBox = function (place_holder_id) {
        let alertBox = new AlertBox(place_holder_id, guid());
        return alertBox;
    };

    let getDropDownList = function () {
        return new DropDownList();
    };

    let getTextBox = function(){
        return new TextBox();
    };

    let getDatePicker = function(){
        return new BootstrapDatePicker();
    };

    let getButton = function(){
        return new Button();
    };

    /**
    * Component Name: AlertBox
    * Author: STK
    * Description : Add an custom bootstrap alert with some genral properties
    * Style: inside mdxcess-util.css
    */
    let AlertBox = function (place_holder_id, guid) {

        let messageBoxString = "<div class='row sticky-message' name='sticky-message' id='" + guid + "'><div class='pull-right col-md-4'><div class='alert alert-info alert-dismissible' role='alert'><button type='button' class='close' aria-label='Close'><span aria-hidden='true'>&times;</span></button><div class='row'><div><strong name='title-area'></strong></div></div><div class='row'><div name='message-text-area'></div></div></div></div></div>";

        $('#'+ place_holder_id).append(messageBoxString);

        $(document.getElementById(guid)).css('visibility', 'hidden');

        this._context = document.getElementById(guid);
        this._hasTimeout = false;
        this._setTimout = 0;

    };

    AlertBox.prototype = function(){

        let message = function(message){
            let context = this._context;
            $(context).find('div[name=message-text-area]').empty();
            $(context).find('div[name=message-text-area]').append("&emsp;" + message);
            bindCloseEvent(this._context);
        };

        let title = function(title){
            let context = this._context;
            $(context).find('strong[name=title-area]').empty();
            $(context).find('strong[name=title-area]').append("&emsp;" + title);
            bindCloseEvent(this._context);
        };

        let bindCloseEvent = function(context){
            $(context).find('button.close').click(function (e) {
                e.preventDefault();
                dispose(context);
            });
        };

        let show = function(){
            let context = this._context;
            $(context).removeClass('noti-message').addClass('noti-message');
            if ($(context) != null) {
                $(context).css('visibility','visible');
            }

        };

        let hide = function(){
            let context = this._context;
            $(context).css('visibility','hidden');
        };

        let dispose = function(context){
            $(context).remove();
            context = null;
        };

        let type = function(){
            let context = this._context;
            return new messageType(context);
        };

        let messageType= function(context){
            this._context = context;
        };

        messageType.prototype = function(){

            let warning = function(){
                let context = this._context;
                $(context).find('.alert').removeClass('alert-info alert-danger alert-success alert-warning').addClass('alert-warning');
            };

            let info = function(){
                let context = this._context;
                $(context).find('.alert').removeClass('alert-info alert-danger alert-success alert-warning').addClass('alert-info');
            };

            let success = function(){
                let context = this._context;
                $(context).find('.alert').removeClass('alert-info alert-danger alert-warning alert-success').addClass('alert-success');
            };

            let error = function(){
                let context = this._context;
                $(context).find('.alert').removeClass('alert-info alert-danger alert-success alert-warning').addClass('alert-danger');
            };
            return{
                warning : warning,
                info : info,
                success : success,
                error : error
            }
        }();

        return {
            message : message,
            title: title,
            show : show,
            hide : hide,
            type : type,
            dispose : dispose
        };

    }();

    /**
   * Component Name: Dropdown List
   * Author: STK
   * Description : Add an custom Jquery, Bootstrap with some general properties
   * Style: inside mdxcess-util.css
   */

    let DropDownList = function(){

    };

    DropDownList.prototype = function(){

        let data = [];
        let placeholderid = undefined;
        let selectedText = "";
        let selectedIndex = 0;
        let defaultText = "";
        let currentContext = null;
        let id = guid();
        let currentHtmlContext = "";


        let getHtmlContext = function(){
            return currentContext;
        };

        let setHtmlContext = function(context){
            currentContext = context;
        };

        let setData = function(objArray){
            data = objArray;
            selectedIndex = 0;
        };
        let getData = function(){
            return data;
        };

        let addData = function(obj){
            data.push(obj);
        };

        let clearData = function(){
            data = [];
        };

        let setPlaceHolderById = function(id){
            placeholderid = id;
        };

        let getPlaceHolderId = function(){
            return placeholderid;
        };

        let setSelectedText = function(text){
            selectedText = text;
        };

        let getSelectedText = function(){
            return selectedText;
        };

        let setSelectedIndex = function(index){
            selectedIndex = index;
        };

        let getSelectedIndex = function(){
            return selectedIndex;
        };

        let setDefaultText = function(text){
            defaultText = text;
        };

        let getDefaultText = function(){
            return (data.length == 0 ? "Choose" : data[0]);
        };

        let onItemChangeCallback = function(){};

        let onItemChange = function(cb) {
            onItemChangeCallback = cb;
        };

        let show = function(){
            $(`#${getId()}`).show();
        };

        let hide = function(){
            $(`#${getId()}`).hide();
        };

        let getId = function(){
            return id;
        }

        let init = function(){

        //Append required html components to place holder


        $(`#${getId()}`).remove();

        $(`#${getPlaceHolderId()}`).append(`<div class='dropdown' id=${getId()}><button class='btn btn-default dropdown-toggle' type='button' data-toggle='dropdown' name='dropdownButton'><span name='Selected-Text'>${getDefaultText()}&emsp;</span><span class='caret'></span></button><ul name='list-item' class='dropdown-menu'></ul></div>`);

        let mainComponent = document.getElementById(getId());
        setHtmlContext(mainComponent);//Set Context
        let itemContainer = $(mainComponent).find('ul');
        $(itemContainer).empty();

        if(data.length > 0){

            for(let i = 0; i < data.length; i++){

                $(itemContainer).append(`<li><a>${data[i]}</a></li>`);// Add item to the list
            let currentAnchor = $(itemContainer).find('li')[i];

            /*Default on item click behavior*/
            $(currentAnchor).on('click',function(e){ // on list item click
                e.preventDefault();
                setSelectedText(data[i]); // set current selected data to selectedText property
                setSelectedIndex(i); // set current selected index to selectedText property
                $(mainComponent).children('button').eq(0).children('span').eq(0).prop('innerHTML',getSelectedText() + '&emsp;');//Set selected text to dropdownlist text


                /*Process user defined behavior*/
                onItemChangeCallback();
            });

        }
        }

    };

    /* Public properties and events of dropdownlist */
    return{
        getData: getData,
        setData:setData,
        addData : addData,
        clearData : clearData,
        getSelectedText : getSelectedText,
        getSelectedIndex : getSelectedIndex,
        setPlaceHolderById : setPlaceHolderById,
        getPlaceHolderId : getPlaceHolderId,
        onItemChange: onItemChange,
        initialize : init,
        getHtmlContext : getHtmlContext,
        setHtmlContext : setHtmlContext,
        getId : getId,
        show: show,
        hide: hide
    }
    }();

    /**
    * Component Name: Dropdown List
    * Author: STK
    * Description : Add an custom Jquery, Bootstrap with some general properties
    * Style: inside mdxcess-util.css
    */

    let TextBox = function(){
      this.text = "";
      this.parentId = undefined;
      this.parentByNameIndex = undefined;
      this.placeholderText = "";
      this.id = guid();
      this.onEnterKeyPress = function(){};
    };

    TextBox.prototype = function(){

        let currentContext = null;

        let getHtmlContext = function(){
            return this.currentComponent;
        };

        let setHtmlContext = function(context){
            currentContext = context;
        };

        let getText = function(){
            return $(`#${this.id}`).val();
        };

        let getParentId = function(){
            return this.parentId;
        };

        let getId = function(){
            return this.id;
        };

        let bindOnEnterKeyPressEvent = function(currentComponent, onEnterKeyPress){
          let currentCallBack = onEnterKeyPress;
          $(currentComponent).on('keypress',function(e){
              if(e.keyCode == 13){//Enter Key
                  console.log("Log from default onEnterKeyPress event.");
                  currentCallBack(e);
              }
          });
        };

        let init = function(){

            $(`#${this.id}`).remove();
            let currentComponent = undefined;
            if(this.parentId != undefined){//ParentId is given
                document.getElementById(`${this.parentId}`).innerHTML = `<input type='text' class='form-control' id='${this.id}' placeholder='${this.placeholderText}' value='${this.text}'/>`;
                currentComponent = document.getElementById(this.id);

            }else if(this.parentByNameIndex.length == 2){//ParentName and Index are given

                document.getElementsByName(`${this.parentByNameIndex[0]}`)[this.parentByNameIndex[1]].innerHTML = `<input type='text' class='form-control' id='${this.id}' placeholder='${this.placeholderText}' value='${this.text}'/>`;
                currentComponent = document.getElementsByName(this.parentByNameIndex[0])[this.parentByNameIndex[1]];

            }

            bindOnEnterKeyPressEvent(currentComponent, this.onEnterKeyPress);

        };


        let show = function(){
            $(`#${this.id}`).show();
        };

        let hide = function(){
            $(`#${this.id}`).hide();
        };

        return{
            getText : getText,
            getParentId : getParentId,
            getId: getId,
            initialize : init,
            show : show,
            hide : hide,
            getHtmlContext : getHtmlContext
        };
    }();

    let BootstrapDatePicker = function(){
    };

    BootstrapDatePicker.prototype  = function(){
        let id = guid();
        let requireformat = "MM/DD/YYYY";//Default
        let autoclose = false;
        let placeholderid = undefined;
        let currentContext = null;
        let date = undefined;
        let _isValidDate = true;

        let setIsValidDate = function(val){
            _isValidDate = val;
        }

        let isValidDate = function(){
            return _isValidDate;
        }
        let getRequireFormat = function(){
            return requireformat;
        };

        let setRequireFormat = function(val){
            requireformat = val;
        };

        let getHtmlContext = function(){
            return currentContext;
        };

        let setHtmlContext = function(context){
            currentContext = context;
        };

        let setPlaceHolderById = function(val){
            placeholderid = val;
        };

        let getPlaceHolderId = function(){
            return placeholderid;
        };

        let getId = function(){
            return id;
        };

        let show = function(){
            $(`#${getId()}`).show();
        };

        let hide = function(){
            $(`#${getId()}`).hide();
        };

        let setDate = function(val){
            $(getHtmlContext()).find('input[name=date]').val(moment(val).format(getRequireFormat()));
        };

        let getDate = function(){
            return date;
        };

        let init = function(){
            $(`#${getId()}`).remove();

            $(`#${getPlaceHolderId()}`).append(`<div class='input-group input-append date' id='${getId()}'>
                    <input type='text' class='form-control' name='date'>
                    <span class='input-group-addon add-on'><span class='glyphicon glyphicon-calendar'></span></span>
                </div>`);
            setHtmlContext($(`#${getId()}`));

            $(getHtmlContext())
            .datepicker({
                autoclose: autoclose,
                format: getRequireFormat().toLowerCase()
            })
            .on('changeDate', function(e) {
                // Revalidate the date field

                if(validate()){
                    errorBorderColor(false);
                    setIsValidDate(true);
                }else{
                    errorBorderColor(true);
                    setIsValidDate(false)

                }

                onChangeDateCallback();///User defined call back

            });

        };

        let errorBorderColor = function(val){
            val ===  true ? $(getHtmlContext()).addClass('invalid-form-control') : $(getHtmlContext()).removeClass('invalid-form-control');
        };

        let onChangeDateCallback = function(){};

        let onChangeDate = function(callback){
            onChangeDateCallback = callback;
        };

        let getSelectedDate = function(){
            return $(`#${getId()}`).find('input[name=date]').val();
        };


        //Date Validation
        let validate = function(){

            if(getSelectedDate() == null || !moment(getSelectedDate(),getRequireFormat()).isValid()) return false;
            return getSelectedDate().indexOf(moment(getSelectedDate(),getRequireFormat(),true).format(getRequireFormat())) >= 0

        };

        return {
            initialize : init,
            show : show,
            hide : hide,
            setPlaceHolderById : setPlaceHolderById,
            getId : getId,
            onChangeDate : onChangeDate,
            setRequireFormat : setRequireFormat,
            getSelectedDate: getSelectedDate,
            autoclose: autoclose,
            setDate : setDate,
            isValidDate : isValidDate
        };
    }();

    let Button = function(){
        this.value= "Button";

    };

    Button.prototype = function(){
        let placeHolderId = undefined;
        let id = guid();
        let _type="btn-default";
        let _currentContext = null;

        let getHtmlContext = function(){
            return _currentContext;
        };

        let setHtmlContext = function(val){
            _currentContext = val;
        }

        let getType = function(){
            return _type;
        };

        let setType = function(css){
            _type = css;
        };

        let getId = function(){
            return id;
        };

        let getPlaceHolderId = function(){
            return placeHolderId
        };

        let setPlaceHolderById = function(val){
            placeHolderId = val;
        };

        let onClickCallback = function(){};

        let onClick = function(callback){
            onClickCallback = callback;
        }

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

            return {
                default: _default,
                success : success,
                warning : warning,
                danger : danger,
                info : info
            };
        }();

        let initialize = function(){
            $(`#${getId()}`).remove();
            $(`#${getPlaceHolderId()}`).append(`<button id=${getId()} class='btn ${getType()}'>${this.value}</button>`);
            setHtmlContext($(`#${getId()}`));
            $(`#${getId()}`).on('click',function(e){
                e.preventDefault();
                e.stopPropagation();
                onClickCallback();
            });

        }

        return {
            onClick : onClick,
            getId: getId,
            getPlaceHolderId : getPlaceHolderId,
            setPlaceHolderById : setPlaceHolderById,
            type: type,
            initialize : initialize,
            getHtmlContext : getHtmlContext
        };
    }();

    return {
        loadTemplate: loadTemplate,
        convertDisplayDate: convertDisplayDate,
        sortObjectByDate: sortObjectByDate,
        sortObjectByCharacter: sortObjectByCharacter,
        convertToSeconds: toSeconds,
        convertToHHMMSS: toHHMMSS,
        ajaxSpinner: ajaxSpinner,
        getAlertBox: getAlertBox,
        getDropDownList : getDropDownList,
        getGuid : guid,
        getTextBox : getTextBox,
        getDatePicker : getDatePicker,
        getButton : getButton
    }

}();
