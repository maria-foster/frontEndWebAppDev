(function () {
    'use strict';

    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/'),

        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './src/menudata/templates/home.template.html'
        })
        .state('menuData', {
            url: '/menuData',
            templateUrl: 'src/menudata/templates/main-menudata.template.html',
            controller: 'MainMenuDataController as mainMenu'
        })

    }
})();