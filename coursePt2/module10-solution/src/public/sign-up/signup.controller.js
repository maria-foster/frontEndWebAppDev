(function () {
    "use strict";

    angular.module('public')
        .controller('SignupController', SignupController);

    SignupController.$inject = ['menuCategories', 'allMenuItems', 'MenuService'];
    function SignupController(menuCategories, allMenuItems, MenuService) {
        var $ctrl = this;
        $ctrl.user = { firstName: '', lastName: '', email: '', phoneNumber: '' };
        $ctrl.menuCategories = menuCategories;
        $ctrl.allMenuItems = allMenuItems;
        $ctrl.selectedCategory = null;
        $ctrl.menuItems;
        $ctrl.selectedMenuItem;
        $ctrl.menuItemNumber = null;
        $ctrl.displaySuccessMessage = false;
        $ctrl.displayErrorMessage1 = false;
        $ctrl.displayErrorMessage2 = false;
        $ctrl.displayErrorMessage3 = false;
        $ctrl.displayErrorMessage4 = false;

        $ctrl.getMenuItems = function () {
            $ctrl.selectedMenuItem = null
            MenuService.getMenuItems($ctrl.selectedCategory.short_name).then(function (response) {
                $ctrl.menuItems = response.menu_items
            })
        }
        $ctrl.validateMenuItem = function () {
            let letter = ""
            if (/^[a-zA-Z]+$/.test($ctrl.menuItemNumber.substring(0, 2))) {
                letter = $ctrl.menuItemNumber.substring(0, 2)
                if ($ctrl.allMenuItems[letter].menu_items) {
                    for (let item in $ctrl.allMenuItems[letter].menu_items) {
                        if ($ctrl.menuItemNumber ==  $ctrl.allMenuItems[letter].menu_items[item].short_name) {
                            $ctrl.selectedMenuItem = $ctrl.allMenuItems[letter].menu_items[item]
                            $ctrl.selectedCategory = $ctrl.allMenuItems[letter].category
                            $ctrl.displayErrorMessage4 = true
                            return true
                        }
                    }
                }

            } else if (/^[a-zA-Z]+$/.test($ctrl.menuItemNumber.substring(0, 1))) {
                let letter = $ctrl.menuItemNumber.substring(0, 1)
                if ($ctrl.allMenuItems[letter].menu_items) {
                    for (let item in $ctrl.allMenuItems[letter].menu_items) {
                        if ($ctrl.menuItemNumber == $ctrl.allMenuItems[letter].menu_items[item].short_name ) {
                            $ctrl.selectedMenuItem = $ctrl.allMenuItems[letter].menu_items[item]
                            $ctrl.selectedCategory = $ctrl.allMenuItems[letter].category
                            $ctrl.displayErrorMessage4 = true
                            return true
                        }
                    }
                }

            }
            $ctrl.displayErrorMessage4 = false
            $ctrl.selectedCategory = null
            $ctrl.selectedMenuItem = null

        }
        $ctrl.saveData = function () {
            if ($ctrl.user.firstName == "" || $ctrl.user.lastName == "" || $ctrl.user.phoneNumber == "" || $ctrl.user.email == "" || !$ctrl.selectedMenuItem || !$ctrl.selectedCategory) {
                $ctrl.displayErrorMessage1 = true
            } else {
                $ctrl.displayErrorMessage1 = false
            }
            if (!/^[0-9]*$/.test($ctrl.user.phoneNumber)) {
                $ctrl.displayErrorMessage2 = true
            } else {
                $ctrl.displayErrorMessage2 = false
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($ctrl.user.email) && $ctrl.user.email != "") {
                $ctrl.displayErrorMessage3 = true
            } else {
                $ctrl.displayErrorMessage3 = false
            }

            if (!$ctrl.displayErrorMessage3 && !$ctrl.displayErrorMessage2 && !$ctrl.displayErrorMessage1) {
                window.localStorage.setItem('menu_item', JSON.stringify($ctrl.selectedMenuItem));
                window.localStorage.setItem('user_info', JSON.stringify($ctrl.user));
                window.localStorage.setItem('category', JSON.stringify($ctrl.selectedCategory));

                $ctrl.displaySuccessMessage = true
            }

        };


    }

})();
