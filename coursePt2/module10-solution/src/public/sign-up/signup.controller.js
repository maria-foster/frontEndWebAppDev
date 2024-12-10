(function () {
    "use strict";

    angular.module('public')
        .controller('SignupController', SignupController);

    SignupController.$inject = ['menuCategories', 'MenuService'];
    function SignupController( menuCategories, MenuService) {
        var $ctrl = this;
        $ctrl.user =  {firstName: '', lastName: '', email: '', phoneNumber: ''};
        $ctrl.menuCategories = menuCategories;
        $ctrl.selectedCategory;
        $ctrl.menuItems; 
        $ctrl.selectedMenuItem;

        $ctrl.getMenuItems = function () {
            MenuService.getMenuItems($ctrl.selectedCategory.short_name).then(function(response) {
                $ctrl.menuItems = response.menu_items
                console.log($ctrl.menuItems)
            })
        }

        $ctrl.saveData = function() {
            window.localStorage.setItem('menu_item', JSON.stringify($ctrl.selectedMenuItem));
            window.localStorage.setItem('user_info', JSON.stringify($ctrl.user));
          };
    }

})();
