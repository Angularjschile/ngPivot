/**
 * @ngdoc controller
 * @name demo.controller:demoCtrl
 *
 * @description
 * _Please update the description and dependencies._
 *
 * @requires $scope
 * */


angular.module('demo',['ngPivot'])
    .controller('demoCtrl', function($scope){
        $scope.items = [
            {id:0,text:'learn Sortable'},
            {id:3,text:'learn Sortableaasdasd'}
        ];
        $scope.bar = [{id:1,text:'dasd'}];
        $scope.barConfig = { group: 'foobar', animation: 150 };
        $scope.$watch('items',function(val){
            console.log(val);
        },true);
        $scope.$watch('bar',function(val){
            console.log(val);
        },true);


});
