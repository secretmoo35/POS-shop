angular.module('ionic')

.controller('selectpicshopCtrl', ['$scope', function($scope) {


    $scope.gotocreatename = function() {
        window.location = "#/createname";
    };

    $scope.imagesshop = ['shop1','shop2','shop3','shop4'];

    $scope.selectImage = function (image) {
        if($scope.selected_image === image) {
            $scope.selected_image = '';
        }
        else {
            $scope.selected_image = image;
        }
    }

}])