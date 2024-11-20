(function () {
    'use strict';

    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/'),

        $stateProvider
        coursePt2/module9-solution/v2/templates/home.template.html
        .state('home', {
            url: '/',
            templateUrl: 'coursePt2/module9-solution/v2/templates/home.template.html'
        })

        .state('categoriesList', {
            url: '/categoriesList',
            templateUrl: 'coursePt2/module9-solution/v2/templates/categories.template.html'
        })

        .state('itemsList', {
            url: '/itemsList',
            templateUrl: 'coursePt2/module9-solution/v2/templates/items.template.html'
        })
    }
})