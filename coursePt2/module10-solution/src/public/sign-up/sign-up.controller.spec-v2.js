describe("Spec v2: SignupController", function() {

    beforeEach(function () {
      module(function ($provide) {
        $provide.service('MenuServiceMock', function () {
          var service = this;
          service.getMenuItems = function (category) {
            return {
                "menu_items" :{
                "category": {
                    "id": 83,
                    "name": "Appetizers",
                    "short_name": "B",
                    "special_instructions": ""
                },
                "menu_items": [
                    {
                        "description": "eggroll with cabbage, carrots and beef",
                        "name": "Beef Egg Roll",
                        "price_large": 3,
                        "short_name": "B1"
                    },
                    {
                        "description": "thin wraps with white meat and cabbage",
                        "name": "Spring Roll (1)",
                        "price_large": 3,
                        "short_name": "B2"
                    },
                    {
                        "description": "cabbage and carrots in eggroll wrappers",
                        "name": "Vegetable Egg Roll (1)",
                        "price_large": 2.25,
                        "short_name": "B3"
                    },
                    {
                        "description": "triangle shaped won ton with ground white meat chicken inside",
                        "name": "Fried Won Ton with Chicken Meat (6)",
                        "price_large": 6.25,
                        "short_name": "B4"
                    },
                    {
                        "description": "ground chicken meat on bread, deep-fried, comes with 4 pieces",
                        "name": "Chicken Toast (4)",
                        "price_large": 6.25,
                        "short_name": "B5"
                    },
                    {
                        "description": "4 large tofu cubes, breaded and deep-fried, with garlic sauce on the side",
                        "name": "Fried Silky Tofu with Special Garlic Sauce",
                        "price_large": 5.95,
                        "short_name": "B6"
                    },
                    {
                        "description": "dough mixed with scallion and pan-fried",
                        "name": "Scallion Pancake",
                        "price_large": 5.75,
                        "short_name": "B7"
                    },
                    {
                        "description": "house-made dough dumpling with chicken",
                        "name": "Steamed (or Pan Fried) Chicken Dumplings (6)",
                        "price_large": 7.95,
                        "short_name": "B8"
                    },
                    {
                        "description": "house-made dough dumpling with carrot, mushroom, cellophane noodles, cabbage (6 pieces)",
                        "name": "Steamed (or Pan Fried) Vegetable Dumplings (6)",
                        "price_large": 7.95,
                        "short_name": "B9"
                    },
                    {
                        "description": "soft won tons filled with chicken, with garlic sauce",
                        "name": "Szechuan Soft Won Ton (8)",
                        "price_large": 8.55,
                        "short_name": "B10"
                    },
                    {
                        "description": "white-meat chicken with mushrooms, green peppers, water chestnuts, carrots sauteed with special house sauce, wrapped in fresh lettuce",
                        "name": "Chicken in Soothing Lettuce Wraps",
                        "price_large": 8.9,
                        "short_name": "B11"
                    },
                    {
                        "description": "6 pieces of beef on skewers with teriyaki sauce",
                        "name": "Teriyaki Beef (6)",
                        "price_large": 7.95,
                        "short_name": "B12"
                    },
                    {
                        "description": "6 pieces of curry-flavored chicken wings",
                        "name": "Fried Chicken Wing (6)",
                        "price_large": 4.95,
                        "short_name": "B13"
                    },
                    {
                        "description": "marinated grilled roast barbeque ribs",
                        "name": "B.B.Q. Spareribs",
                        "price_large": 13.95,
                        "short_name": "B14"
                    },
                    {
                        "description": "2 spring egg rolls, 2 fried won tons, 2 BBQ ribs, 2 chicken toast, 2 teriyaki beef",
                        "name": "Pu Pu Platter (for 2)",
                        "price_large": 18.95,
                        "short_name": "B15"
                    },
                    {
                        "description": "Peanut butter sauce and sesame seeds on lo mein noodles ",
                        "name": "Cold Sesame Noodle",
                        "price_large": 6.95,
                        "short_name": "B16"
                    }
                ]
            }
        }
          };

        });
      });
  
      module('public');
    });
  
    var $controller;
    var shoppingListController;
  
    beforeEach(inject(function (_$controller_, MenuServiceMock) {
      $controller = _$controller_;
  
      SignupController =
        $controller('SignupController',
                    {MenuService: MenuServiceMock});
  
    }));
  
    it("should get menu items ", function() {
        SignupController.getMenuItems(); 
        expect(SignupController.menuItems.length).not.toBe(0);
    });

    it(" should NOT validate and save data validate", function() {
        SignupController.saveData();
        SignupController.user.phoneNumber = "412a"
        SignupController.user.email = "Tes"
        expect(SignupController.displayErrorMessage1).toBeFalsy();
        expect(SignupController.displayErrorMessage2).toBeFalsy();
        expect(SignupController.displayErrorMessage3).toBeFalsy();
    });
    it("validate and save data validate", function() {
        SignupController.user.firstName = "Test"
        SignupController.user.lastName = "Tmest"
        SignupController.user.phoneNumber = "412"
        SignupController.user.email = "Test@gmail.com"
        SignupController.selectedCategory = "Test Cat" ;
        SignupController.selectedMenuItem = "Test Menu Item";
        SignupController.saveData();
        expect(SignupController.displayErrorMessage1).toBeTruthy();
        expect(SignupController.displayErrorMessage2).toBeTruthy();
        expect(SignupController.displayErrorMessage3).toBeTruthy();
    });
  
  });