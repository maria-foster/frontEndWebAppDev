(function() {
    'use strict';
    angular.module('MenuApp')
    .controller('ItemsController', ItemsController)

    ItemsController.$inject = ['items']
    function ItemsController ( items) {
        var mainMenu = this;
        mainMenu.items = items


    }
})();