angular.module('ionic')

.controller('createnameCtrl', ['$scope', function($scope) {


    $scope.gotoSelectPage = function() {
        window.location = "#/chooseshop";
    };


}])