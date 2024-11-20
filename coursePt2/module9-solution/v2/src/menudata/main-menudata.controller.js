(function() {
    'use strict';
    angular.module('MenuApp')
    .controller('MainMenuDataController', MainMenuDataController)

    MainMenuDataController.$inject = ['categories']
    function MainMenuDataController ( categories) {
        var mainMenu = this;
        mainMenu.categories = categories


    }
})();