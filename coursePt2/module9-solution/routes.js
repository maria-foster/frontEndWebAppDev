angular.module('MenuApp')
.config(RoutesConfig)

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider']
function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('');
    
    $stateProvider
    .state('', {
        url: '',
        templateUrl: './index.html'
    })
}