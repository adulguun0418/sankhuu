var uiController = (function () {})();

var financeController = (function () {})();

var appController = (function (uiController, financeControllerler) {
  var ctrlAddItem = function () {
    console.log("gotya");
    //find input data
    //pass the data to the financeController
    //show the data on the web
    //calculate budget
    //show the final amount
  };

  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });

  document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      ctrlAddItem();
    }
  });
})(uiController, financeController);
