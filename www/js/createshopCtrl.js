angular.module('ionic')

.controller('createshopCtrl', ['$scope', function($scope) {


    $scope.gotoselectpicshop = function() {
        window.location = "#/selectpicshop";
    };

}])