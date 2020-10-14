var uiController = (function () {
  var domStrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn",
  };

  return {
    getInput: function () {
      return {
        type: document.querySelector(domStrings.inputType).value,
        description: document.querySelector(domStrings.inputDescription).value,
        value: document.querySelector(domStrings.inputValue).value,
      };
    },

    getDomStrings: function () {
      return domStrings;
    },
  };
})();

var financeController = (function () {
  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allitems: {
      inc: [],
      exp: [],
    },

    total: {
      inc: 0,
      exp: 0,
    },
  };

  return {
    addItem: function (type, desc, val) {
      var item, id;

      if (data.allitems[type].length === 0) {
        id = 1;
      } else {
        id = data.allitems[type][data.allitems[type].length - 1].id + 1;
      }

      if (type === "inc") {
        item = new Income(id, desc, val);
      } else {
        item = new Expense(id, desc, val);
      }

      data.allitems[type].push(item);
    },

    seeData: function () {
      return data;
    },
  };
})();

var appController = (function (uiController, financeControllerler) {
  var ctrlAddItem = function () {
    //find input data
    var input = uiController.getInput();
    //pass the data to the financeController
    financeController.addItem(input.type, input.description, input.value);
    //show the data on the web
    //calculate budget
    //show the final amount
  };

  var setupEventListeners = function () {
    var DOM = uiController.getDomStrings();

    document.querySelector(DOM.addBtn).addEventListener("click", function () {
      ctrlAddItem();
    });

    document.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        ctrlAddItem();
      }
    });
  };

  return {
    init: function () {
      console.log("app started");
      setupEventListeners();
    },
  };
})(uiController, financeController);

appController.init();
