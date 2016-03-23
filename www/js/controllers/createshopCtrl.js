angular.module('ionic')

.controller('createshopCtrl', ['$scope','$location', function($scope,$location) {


    $scope.gotoselectpicshop = function() {
    	
        $location.path('/selectpicshop');
    };

}])