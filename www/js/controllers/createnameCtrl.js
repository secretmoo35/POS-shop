angular.module('ionic')

.controller('createnameCtrl', ['$scope','$location', function($scope,$location) {


    $scope.gotoSelectPage = function() {
       $location.path('/selectpage');
    };


}])