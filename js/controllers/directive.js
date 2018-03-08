  (function(){
        var app = angular.module('app');
        app.directive('helloWorld', ['$log', function($log){
            return {
                templateUrl: 'html/table.html',
                scope:{
                    listsRegion:'=',
                    selections: '=',
                    tm1Instance: '@'
                }, 
                link:function($scope, $elements, $attributes, directiveCtrl, transclude){
                
            }
            };
        }]);
    })();