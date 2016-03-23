angular.module('ionic')

.controller('selectpageCtrl', ['$scope', function($scope) {


    // $scope.gotoselectpicshop = function() {
    //     window.location = "#/selectpicshop";
    // };
$scope.pages = [
        {
            pagename: "My page 1",
            pageimg: "shop1",
            
        },
        {
            pagename: "My page 2",
            pageimg: "shop2",
            
        },
        {
            pagename: "My page 3",
            pageimg: "shop3",
            
        },
        {
            pagename: "My page 4",
            pageimg: "shop4",
            
        }
    ];

}])