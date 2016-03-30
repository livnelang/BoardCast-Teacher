var app = angular.module("app", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider)  {

    $urlRouterProvider.otherwise("/admin");

    $stateProvider
        .state('locations', {
            url: '/?cat',
            templateUrl: 'templates/locations-list.html',
            controller: 'locationsController',
        })

        .state('add-location', {
            url: '/add',
            templateUrl: 'templates/create-location.html',
            controller: 'createController',
        })

        .state('view', {
            url: '/view',
            templateUrl: 'templates/location-view.html',
            controller: 'viewController',
        })

        .state('login', {
            url: '/login',
            templateUrl: '../views/login.html',
            controller: 'loginCtrl',
        })
        .state('admin', {
            url: '/admin',
            templateUrl: '../views/admin.html',
            controller: 'adminCtrl',
        })

});