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
        $ctrl.displaySuccessMessage = false; 
        $ctrl.displayErrorMessage1 = false;
        $ctrl.displayErrorMessage2 = false;
        $ctrl.displayErrorMessage3 = false;

        $ctrl.getMenuItems = function () {
            MenuService.getMenuItems($ctrl.selectedCategory.short_name).then(function(response) {
                $ctrl.menuItems = response.menu_items
                console.log($ctrl.menuItems)
            })
        }

        $ctrl.saveData = function() {
            console.log($ctrl.user.firstName == "" || $ctrl.user.lastName == "" || $ctrl.user.phoneNumber == ""  || $ctrl.user.email == "")
            if($ctrl.user.firstName == "" || $ctrl.user.lastName == "" || $ctrl.user.phoneNumber == ""  || $ctrl.user.email == "" || !$ctrl.menuItems || !$ctrl.selectedCategory ){
                $ctrl.displayErrorMessage1 = true
            }else {
                $ctrl.displayErrorMessage1 = false 
            }
            if(!/^[0-9]*$/.test($ctrl.user.phoneNumber)){
                $ctrl.displayErrorMessage2 = true
            }else {
                $ctrl.displayErrorMessage2 = false 
            }
            if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($ctrl.user.email) && $ctrl.user.email != ""){
                $ctrl.displayErrorMessage3 = true
            }else {
                $ctrl.displayErrorMessage3 = false 
            }

            if(!$ctrl.displayErrorMessage3 && !$ctrl.displayErrorMessage2 && !$ctrl.displayErrorMessage1){
                window.localStorage.setItem('menu_item', JSON.stringify($ctrl.selectedMenuItem));
                window.localStorage.setItem('user_info', JSON.stringify($ctrl.user));
                $ctrl.displaySuccessMessage = true
            }
            
          };

        
    }

})();
