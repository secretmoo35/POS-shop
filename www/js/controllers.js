
angular.module('ionic')
.controller('AppCtrl', function($scope, $state, OpenFB) {

    $scope.logout = function() {
        OpenFB.logout();
        $state.go('login');
    };

    $scope.revokePermissions = function() {
        OpenFB.revokePermissions().then(
            function() {
                $state.go('login');
            },
            function() {
                alert('OpenFB : Revoke Permissions Failed!ppppp');
            });
    };
})

.controller('ShareCtrl', function($scope, OpenFB, $stateParams) {

    $scope.item = {};
    $scope.pages = $stateParams;

    $scope.share = function() {

        OpenFB.post('/me/feed', $scope.item ,$scope.pages.access_token)
            .success(function() {
                $scope.status = "OpenFB : Item Shared Successfully!";
            })
            .error(function(data) {
                alert(data.error.message);
            });
    };
})

.controller('ProfileCtrl', function($scope, OpenFB) {
    OpenFB.get('/me?fields=id,name,email,birthday,picture').success(function(user) {
        $scope.user = user;
    });

})

.controller('PagesCtrl', function($scope, $state, $location, OpenFB) {

    var access_token = access_token;
    $scope.loadPages = function() {

        OpenFB.get('/me/accounts', { limit: 30 })
            .success(function(result) {

                $scope.items = result.data;
            })

    }
    $scope.getPagesToken = function(item) {

        $state.go('app.share', {

            access_token: item.access_token,
            category: item.category,
            id: item.id,
            name: item.name,

        });
    }

})

.controller('AllFriendsCtrl', function($scope, $stateParams, OpenFB) {
    OpenFB.get('/' + $stateParams.personId + '/taggable_friends', { limit: 50 })
        .success(function(result) {
            $scope.friends = result.data;
        })
        .error(function(data) {
            alert(data.error.message);
        });
})

.controller('FeedCtrl', function($scope, $stateParams, OpenFB, $ionicLoading) {

    $scope.show = function() {
        $scope.loading = $ionicLoading.show({
            content: 'Loading User Feed(s)...'
        });
    };
    $scope.hide = function() {
        $scope.loading.hide();
    };

    function loadFeed() {
        $scope.show();
        OpenFB.get('/me/feed', { limit: 30 })
            .success(function(result) {
                $scope.hide();
                $scope.items = result.data;
                // Used with pull-to-refresh
                $scope.$broadcast('scroll.refreshComplete');
            })
            .error(function(data) {
                $scope.hide();
                alert(data.error.message);
            });
    }

    $scope.doRefresh = loadFeed;

    loadFeed();

});