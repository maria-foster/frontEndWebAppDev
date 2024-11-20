(function() {
    angular.module('MenuApp')
    .component('items', {
        templateUrl: 'src/menudata/templates/items.template.html',
        bindings: {
            items: '<'
        }
    })
})