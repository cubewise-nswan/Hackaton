app.controller('PandLCtrl', ['$scope', '$rootScope', '$tm1Ui', function($scope, $rootScope, $tm1Ui) {
	 /*
    *     defaults.* are variables that are declared once and are changed in the page, otherwise known as constants in programming languages
    *     lists.* should be used to store any lists that are used with ng-repeat, i.e. tm1-ui-element-list
    *     selections.* should be used for all selections that are made by a user in the page
    *     values.* should store the result of any dbr, dbra or other values from server that you want to store to use elsewhere, i.e. in a calculation
    * 
    *     For more information: https://github.com/cubewise-code/canvas-best-practice
    */
    $rootScope.pageTitle = 'pnl';
    $scope.defaults = {};
    $scope.selections = {};
    $scope.lists = {};
    $scope.values = {};

  
}]);
app.filter( 'shortNumber', function() {
return function( number ) {
if ( number ) {
abs = Math.abs( number );
if ( abs >= Math.pow( 10, 12 ) ) {
// trillion
number = ( number / Math.pow( 10, 12 ) ).toFixed( 1 ) + "T";
} else if ( abs < Math.pow( 10, 12 ) && abs >= Math.pow( 10, 9 ) ) {
// billion
number = ( number / Math.pow( 10, 9 ) ).toFixed( 1 ) + "B";
} else if ( abs < Math.pow( 10, 9 ) && abs >= Math.pow( 10, 6 ) ) {
// million
number = ( number / Math.pow( 10, 6 ) ).toFixed( 1 ) + "M";
} else if ( abs < Math.pow( 10, 6 ) && abs >= Math.pow( 10, 3 ) ) {
// thousand
number = ( number / Math.pow( 10, 3 ) ).toFixed( 1 ) + "K";
}
return number;
}
};
} );