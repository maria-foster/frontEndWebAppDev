(function () {
    "use strict";

    angular.module('public')
        .controller('LoginController', LoginController);

    // LoginController.$inject = ['menuCategories'];
    // function LoginController(menuCategories) {
    function LoginController() {
        var $ctrl = this;
        $ctrl.menuItem;
        $ctrl.user;

        $ctrl.fetchData = function () {
            $ctrl.menuItem = JSON.parse(window.localStorage.getItem('menu_item'));
            $ctrl.category = JSON.parse(window.localStorage.getItem('category'));
            $ctrl.user = JSON.parse(window.localStorage.getItem('user_info'));
        }
    }


})();
