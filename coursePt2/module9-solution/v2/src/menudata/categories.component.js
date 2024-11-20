(function() {
    angular.module('MenuApp')
    .component('categories', {
        templateUrl: 'src/menudata/templates/categories.template.html',
        bindings: {
            categories: '<'
        }
    })
})