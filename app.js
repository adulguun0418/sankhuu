var uiController = (function () {
  var x = 17;
})();

var financeController = (function () {
  var y = 7;
})();

var appController = (function (uiController, financeControllerler) {})(
  uiController,
  financeController
);
