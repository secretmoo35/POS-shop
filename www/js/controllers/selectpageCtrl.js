angular.module('ionic')

.controller('selectpageCtrl', ['$scope', '$state', '$location', 'OpenFB',
    function($scope, $state, $location, OpenFB) {
        
        OpenFB.get('/me?fields=id,name,email,birthday,picture').success(function(user) {
            $scope.user = user;
        });

        OpenFB.get('/me/accounts', { limit: 30 })
            .success(function(result) {

                $scope.pages = result.data;
            })

        $scope.gotoHome = function() {
            $location.path('/app/home');
        };





    }
])