var sinon = sinon;
var should = chai.should();
var expect = chai.expect;
var assert = chai.assert;


describe("Button Unit Test", function() {

  describe("getId() method", function() {
    it("Check given id property value has set. (Actual 'btnTest1', Excepcted 'btnTest1')", function() {
      var button = new Button();
      button.id = "btnTest1";
      expect(button.getId()).to.equal("btnTest1");
    });

    it("Check id property is 'not null' if it has not given. (Expected: !null)", function() {
      var button = new Button();
      expect(button.getId()).to.not.equal(null);
    });

    it("Check id property has '36 character' generated value if it has not given.", function() {
      var button = new Button();
      console.log(button.getId().length);
      expect(button.getId()).to.have.lengthOf(36);
    });

  });

  describe("getParentId() method", function() {
    it("Check parentId is \"\" if not given (Actual: \"\" Expected: \"\")", function() {
      var button = new Button();
      button.id = "btnTest1";
      expect(button.getParentId()).to.equal("");
    });

    it("Check parentId property has set if given (Actual : 'btnParent' Expected: 'btnParent')", function() {
      var button = new Button();
      button.id = "btnTest1";
      button.parentId = "btnParent";
      expect(button.getParentId()).to.equal("btnParent");
    });

  });

  describe("getType() method", function() {
    it("Check default type is 'btn-default'", function() {
      var button = new Button();
      button.id = "btnTest1";
      expect(button.getType()).to.equal("btn-default");
    });

    it("Check type is 'btn-info' (Actual : button.type.info() Expected: 'btn-info')", function() {
      var button = new Button();
      button.id = "btnTest1";
      button.type.info();
      expect(button.getType()).to.equal("btn-info");
    });

    it("Check type is 'btn-danger' (Actual : button.type.danger() Expected: 'btn-danger')", function() {
      var button = new Button();
      button.id = "btnTest1";
      button.type.danger();
      expect(button.getType()).to.equal("btn-danger");
    });

    it("Check type is 'btn-success' (Actual : button.type.success() Expected: 'btn-success')", function() {
      var button = new Button();
      button.id = "btnTest1";
      button.type.success();
      expect(button.getType()).to.equal("btn-success");
    });

    it("Check type is 'btn-warning' (Actual : button.type.warning() Expected: 'btn-warning')", function() {
      var button = new Button();
      button.id = "btnTest1";
      button.type.warning();
      expect(button.getType()).to.equal("btn-warning");
    });

    it("Check type is 'btn-primary' (Actual : button.type.primary() Expected: 'btn-primary')", function() {
      var button = new Button();
      button.id = "btnTest1";
      button.type.primary();
      expect(button.getType()).to.equal("btn-primary");
    });

  });

  describe("init() method", function() {

    it(`Check initialized button with given id is in DOM (Actual: MyButton1 : Expected: !null)`, function() {
      var button = new Button();
      button.value = "My Button";
      button.id ="MyButton1"
      button.parentId = "btnParent";
      var actualId = "MyButton1";
      button.init();
      expect(document.getElementById(actualId)).to.not.equal(null);
    });

    it(`Check initialized button is inside given parent in DOM.`, function() {
      var button = new Button();
      button.value = "My Button";
      button.id ="MyButton1"
      button.parentId = "btnParent";
      var actualId = "MyButton1";
      button.init();
      expect(document.getElementById(actualId).parentElement.getAttribute("id")).to.equal(button.getParentId());
    });


  });

  describe("remove() method",function(){
    it("Check current button is removed from DOM when id property has not set(Excepted : get element with current id should return 'null')",function(){
      let button = new Button();
      button.value = "My Test Button";
      button.parentId = "btnParent";
      button.init();

      button.remove();
      expect(document.getElementById(button.getId())).to.equal(null);
    });

    it("Check current button is removed from DOM when id property has set(Excepted : get element with current id should return 'null')",function(){
      let button = new Button();
      button.id = "btn1";
      button.value = "My Test Button";
      button.parentId = "btnParent";
      button.init();
      button.remove();
      expect(document.getElementById(button.getId())).to.equal(null);

    });
  });

  describe("show() method",function(){
    it("Check current button has (style='visibility:visible;')",function(){
      let button = new Button();
      button.value = "My Test Button";
      button.parentId = "btnParent";
      button.init();
      button.show();
      expect(document.getElementById(button.getId()).style.visibility).to.equal("visible");

    });
  });

  describe("hide() method",function(){
    it("Check current button has (style='visibility:hidden;')",function(){
      let button = new Button();
      button.value = "My Test Button";
      button.parentId = "btnParent";
      button.init();
      button.hide();
      expect(document.getElementById(button.getId()).style.visibility).to.equal("hidden");
      button.remove();
    });
  });

  describe("disable() method",function(){
    it("Check current button has readOnly attribute equal true",function(){
      let button = new Button();
      button.value = "My Test Button";
      button.parentId = "btnParent";
      button.disable();
      button.init();

      expect(document.getElementById(button.getId()).readOnly).to.equal("true");
      button.remove();
    });
  });

  describe("enable() method",function(){
    it("Check current button has readOnly attribute equal false",function(){
      let button = new Button();
      button.value = "My Test Button";
      button.parentId = "btnParent";
      button.enable();
      button.init();

      expect(document.getElementById(button.getId()).readOnly).to.equal("false");
      button.remove();
    });
  });




});
