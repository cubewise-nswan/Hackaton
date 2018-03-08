app.controller('administationCtrl', ['$scope', '$rootScope', '$log', '$tm1Ui', '$location', function($scope, $rootScope, $log, $tm1Ui, $location) {
	 /*
    *     defaults.* are variables that are declared once and are changed in the page, otherwise known as constants in programming languages
    *     lists.* should be used to store any lists that are used with ng-repeat, i.e. tm1-ui-element-list
    *     selections.* should be used for all selections that are made by a user in the page
    *     values.* should store the result of any dbr, dbra or other values from server that you want to store to use elsewhere, i.e. in a calculation
    * 
    *     For more information: https://github.com/cubewise-code/canvas-best-practice
    */
    
    $scope.defaults = {};
    $scope.selections = {
        version:'Actual'
    };
    $scope.lists = {};
    $scope.values = {};
    $scope.page = {};
	$scope.page.table = {
        fromOperatingProfit:[]
    };
	
    $scope.selections.version=$rootScope.titles['Version'];
    $scope.selections.year=$rootScope.titles['Year'];
    $scope.selections.currency=$rootScope.titles['Currency'];
    $scope.selections.department=$rootScope.titles['Department'];

   
}]);

 
    