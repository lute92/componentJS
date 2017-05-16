let components = require('/dist/bundle.js');



var Components = new components();
let btnTest = Components.getButton();
btnTest.parentId = "main-container";
btnTest.type().primary();
btnTest.value = "Test";
btnTest.onClick = function(e){
  alert("Button Clicked");
};
