angular.module('ionic')

.controller('loginfbCtrl', ['$scope', function($scope) {


    $scope.gotocreateshop = function() {
        window.location = "#/createshop";
    };

}])