describe("Spec v2: Login Controller", function() {

    beforeEach(function () {
  
      module('public');
    });
  
    var $controller;
    var LoginController;
  
    beforeEach(inject(function (_$controller_) {
      $controller = _$controller_;
      LoginController =
        $controller('LoginController');
        window.localStorage.setItem('menu_item', JSON.stringify({"test" : "test"}))
        window.localStorage.setItem('category', JSON.stringify({"test" : "test"}))
        window.localStorage.setItem('user_info', JSON.stringify({"test" : "test"}))

    }));
  
    it("should change fetch data from local storage", function() {
      shoppingListController.fetchData();
      expect(shoppingListController.menuItem).not.toBe(null);
      expect(shoppingListController.category).not.toBe(null);
      expect(shoppingListController.user).not.toBe(null);
    });
  
  });