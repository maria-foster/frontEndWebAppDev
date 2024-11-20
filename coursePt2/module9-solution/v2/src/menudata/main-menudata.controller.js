(function() {
    'use strict';
    angular.module('MenuApp')
    .controller('MainMenuDataController', MainMenuDataController)

    // MainMenuDataController.$inject = ['svcNameHere']
    function MainMenuDataController () {
        var mainMenu = this;
        mainMenu.categories = [{Name : "test 1"}, {Name: "test 2"}]
        mainMenu.items = [{Name : "test 3"}, {Name: "test 4"}]
    }
})();