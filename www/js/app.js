angular.module('sociogram', ['ionic', 'openfb'])

.run(function($rootScope, $state, $ionicPlatform, $window, OpenFB) {


    //Moo : for android
    // OpenFB.init('225936864423187', 'https://www.facebook.com/connect/login_success.html');
    //411951185655215
    //Moo : for Dev
    OpenFB.init('225936864423187', 'http://localhost:8100/oauthcallback.html');

    $ionicPlatform.ready(function() {
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });

    $rootScope.$on('$stateChangeStart', function(event, toState) {
        if (toState.name !== "app.login" && toState.name !== "app.logout" && !$window.sessionStorage['fbtoken']) {
            $state.go('login');
            event.preventDefault();
        }
    });

    $rootScope.$on('OAuthException', function() {
        $state.go('login');
    });

})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: "AppCtrl"
    })

    .state('login', {
        url: "/login",
        templateUrl: "templates/login.html",
        controller: "LoginfbCtrl"

    })

    .state('app.logout', {
        url: "/logout",
        views: {
            'menuContent': {
                templateUrl: "templates/logout.html",
                controller: "LogoutCtrl"
            }
        }
    })

    .state('app.profile', {
        url: "/profile",
        views: {
            'menuContent': {
                templateUrl: "templates/profile.html",
                controller: "ProfileCtrl"
            }
        }
    })

    .state('app.share', {
        url: "/share/:access_token/:category/:id/:name",
        views: {
            'menuContent': {
                templateUrl: "templates/share.html",
                controller: "ShareCtrl"
            }
        }
    })

    .state('app.pages', {
        url: "/pages",
        views: {
            'menuContent': {
                templateUrl: "templates/pages.html",
                controller: "PagesCtrl"
            }
        }
    })

    .state('app.allfriends', {
            url: "/person/:personId/allfriends",
            views: {
                'menuContent': {
                    templateUrl: "templates/all-friend-list.html",
                    controller: "AllFriendsCtrl"
                }
            }
        })
        .state('app.feed', {
            url: "/person/:personId/feed",
            views: {
                'menuContent': {
                    templateUrl: "templates/feed.html",
                    controller: "FeedCtrl"
                }
            }
        })
        .state('app.home', {
            url: "/home",
            views: {
                'menuContent': {
                    templateUrl: "templates/home.html",
                }
            }
        })
        .state('createshop', {
            url: "/createshop",
            templateUrl: "templates/createshop.html",
            controller: "createshopCtrl"

        })
        .state('selectpicshop', {
            url: "/selectpicshop",
            templateUrl: "templates/selectpicshop.html",
            controller: "selectpicshopCtrl"

        })
        .state('createname', {
            url: "/createname",
            templateUrl: "templates/createname.html",
            controller: "createnameCtrl"

        })
        .state('selectpage', {
            url: "/selectpage",
            templateUrl: "templates/selectpage.html",
            controller: "selectpageCtrl"

        })


    // fallback route
    $urlRouterProvider.otherwise('/login');

});