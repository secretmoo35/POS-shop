angular.module('ionic')

.controller('LoginfbCtrl', function($scope, $location, OpenFB) {

    $scope.facebookLogin = function() {

        OpenFB.login('email,public_profile,user_friends,user_photos,user_posts,publish_actions,user_birthday,email,manage_pages,publish_pages,read_page_mailboxes').then(
            function() {
                $location.path('/createshop');
            },
            function() {
                alert('OpenFB : Login Failed! Please Try Again...');
            });
    };
})