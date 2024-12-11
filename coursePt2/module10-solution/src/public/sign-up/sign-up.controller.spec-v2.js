describe("Spec v2: SignupController", function () {

    beforeEach(function () {
        module(function ($provide) {
            $provide.service('MenuServiceMock', function () {
                var service = this;
                service.getMenuItems = function (category) {
                    return {
                        "menu_items": {
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
                { MenuService: MenuServiceMock });

    }));

    it("should get menu items ", function () {
        SignupController.getMenuItems();
        expect(SignupController.menuItems.length).not.toBe(0);
    });

    it("should validate custom typed menu items ", function () {
        SignupController.menuItemNumber = "D12"
        SignupController.allMenuItems = {
            "A": {
                "category": {
                    "id": 82,
                    "name": "Soup",
                    "short_name": "A",
                    "special_instructions": ""
                },
                "menu_items": [
                    {
                        "description": "chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions",
                        "large_portion_name": "quart",
                        "name": "Won Ton Soup with Chicken",
                        "price_large": 5,
                        "price_small": 2.55,
                        "short_name": "A1",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "chicken broth with egg drop",
                        "large_portion_name": "quart",
                        "name": "Egg Drop Soup",
                        "price_large": 4.5,
                        "price_small": 2.25,
                        "short_name": "A2",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "clear chicken broth with creamy corn and egg drop with white meat chicken pieces",
                        "large_portion_name": "quart",
                        "name": "Chicken Corn Soup",
                        "price_large": 5.5,
                        "price_small": 2.75,
                        "short_name": "A3",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "tofu, chicken, mushroom, bamboo shoot, and egg",
                        "large_portion_name": "quart",
                        "name": "Hot and Sour Soup",
                        "price_large": 5,
                        "price_small": 2.55,
                        "short_name": "A4",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "chicken soup with egg drop and won tons",
                        "large_portion_name": "quart",
                        "name": "Egg Drop with Won Ton Soup",
                        "price_large": 6,
                        "price_small": 3,
                        "short_name": "A5",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "clear broth and lo mein noodles or white rice, chicken pieces",
                        "large_portion_name": "quart",
                        "name": "Chicken Noodle (or Rice) Soup",
                        "price_large": 5,
                        "price_small": 2.55,
                        "short_name": "A6",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "clear chicken broth with mixed vegetables (carrots, cabbage, baby corn, mushroom, snow peas)",
                        "large_portion_name": "quart",
                        "name": "Garden Vegetable Soup",
                        "price_large": 5,
                        "price_small": 2.55,
                        "short_name": "A7",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "clear chicken broth with mixed vegetables (carrots, cabbage, baby corn, mushroom, snow peas) with tofu pieces",
                        "large_portion_name": "quart",
                        "name": "Garden Vegetable Soup with Tofu",
                        "price_large": 6,
                        "price_small": 3,
                        "short_name": "A8",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "clear chicken broth with mixed vegetables (carrots, cabbage, baby corn, mushroom, snow peas) and chicken pieces",
                        "large_portion_name": "quart",
                        "name": "Chicken with Garden Vegetable Soup",
                        "price_large": 6.4,
                        "price_small": 3.25,
                        "short_name": "A9",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "clear chicken broth with carrots, mushrooms, snow peas, and broccoli, and a few pieces of Hong Kong style won tons",
                        "large_portion_name": "quart",
                        "name": "Hong Kong Style Won Ton Soup",
                        "price_large": 8.5,
                        "price_small": 4.25,
                        "short_name": "A10",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "clear chicken broth with vegetables, veal, chicken, and beef and won tons",
                        "name": "Young Chow Won Ton Soup (for 2)",
                        "price_large": 11.95,
                        "short_name": "A11"
                    }
                ]
            },
            "B": {
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
            },
            "C": {
                "category": {
                    "id": 85,
                    "name": "Chicken",
                    "short_name": "C",
                    "special_instructions": ""
                },
                "menu_items": [
                    {
                        "description": "chunks of chicken, breaded and deep-fried with sauce containing orange peels; white meat by request: for pint $1 extra, for large $2 extra",
                        "large_portion_name": "large",
                        "name": "Orange Chicken",
                        "price_large": 14.95,
                        "price_small": 10.95,
                        "short_name": "C1",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "chunks of chicken, breaded and deep-fried with sauce and scallions; white meat by request: for pint $1 extra, for large $2 extra",
                        "large_portion_name": "large",
                        "name": "General Tso's Chicken",
                        "price_large": 14.95,
                        "price_small": 10.95,
                        "short_name": "C2",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "white meat chicken sauteed with string beans and soy sauce",
                        "large_portion_name": "large",
                        "name": "White Meat Chicken with String Bean",
                        "price_large": 14.95,
                        "price_small": 10.95,
                        "short_name": "C3",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "white meat chicken, string beans, waterchestnuts, mushrooms, and eggplant, in garlic sauce",
                        "large_portion_name": "large",
                        "name": "White Meat Chicken with Eggplant In Garlic Sauce",
                        "price_large": 14.95,
                        "price_small": 10.95,
                        "short_name": "C4",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "diced chicken with waterchestnuts, green peppers, and celery, and cashewnuts; white meat by request: for pint $1 extra, for large $2 extra",
                        "large_portion_name": "large",
                        "name": "Chicken Cashewnuts",
                        "price_large": 14.95,
                        "price_small": 10.95,
                        "short_name": "C5",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "white meat chicken in a clear white sauce sauteed with mixed vegetables",
                        "large_portion_name": "large",
                        "name": "White Meat Chicken with Fresh Vegetables",
                        "price_large": 14.95,
                        "price_small": 10.95,
                        "short_name": "C6",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "chunks of chicken, breaded and deep-fried with a sesame seed sauce",
                        "large_portion_name": "large",
                        "name": "Sesame Chicken",
                        "price_large": 14.95,
                        "price_small": 10.95,
                        "short_name": "C7",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "white meat chicken sauteed with broccoli, mushrooms, and baby corn in Hunan sauce",
                        "large_portion_name": "large",
                        "name": "Hunan Chicken",
                        "price_large": 14.95,
                        "price_small": 10.95,
                        "short_name": "C8",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "white meat chicken sauteed with carrots, celery, and bean sprouts in Szechuan sauce",
                        "large_portion_name": "large",
                        "name": "Szechuan Chicken",
                        "price_large": 14.95,
                        "price_small": 10.95,
                        "short_name": "C9",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "diced chicken sauteed with peanuts, and celery in delicious kung pao sauce; white meat by request: for pint $1 extra, for large $2 extra",
                        "large_portion_name": "large",
                        "name": "Kung Pao Chicken",
                        "price_large": 14.95,
                        "price_small": 10.95,
                        "short_name": "C10",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "chicken sauteed with string beans, mushrooms, and waterchestnuts in garlic sauce",
                        "large_portion_name": "large",
                        "name": "White Meat Chicken with Garlic Sauce",
                        "price_large": 14.95,
                        "price_small": 10.95,
                        "short_name": "C11",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "white meat chicken lightly breaded and fried until crip, then sauteed with celery and carrots in a special chef's sauce",
                        "large_portion_name": "large",
                        "name": "Dry Shredded Chicken",
                        "price_large": 16.95,
                        "price_small": 11.95,
                        "short_name": "C12",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "white meat chicken sauteed with shredded cabbage, mushrooms and eggs, then wrapped with pancake and delicious plum sauce",
                        "large_portion_name": "large",
                        "name": "Moo Shu Chicken",
                        "price_large": 14.95,
                        "price_small": 10.95,
                        "short_name": "C13",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "white meat chicken sauteed with broccoli, snow peas, mushrooms, and waterchestnuts in a white sauce",
                        "large_portion_name": "large",
                        "name": "Moo Goo Gau Pan",
                        "price_large": 14.95,
                        "price_small": 10.95,
                        "short_name": "C14",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "white meat chicken, breaded and fried with some green pepper, onion, and pineapples",
                        "large_portion_name": "large",
                        "name": "Sweet and Sour Chicken",
                        "price_large": 14.95,
                        "price_small": 10.95,
                        "short_name": "C15",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "white meat chicken sauteed with broccoli in brown sauce",
                        "large_portion_name": "large",
                        "name": "Chicken with Broccoli",
                        "price_large": 14.95,
                        "price_small": 10.95,
                        "short_name": "C16",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "white meat chicken breaded and fried, served with lemon sauce on the side",
                        "large_portion_name": "large",
                        "name": "Lemon Chicken",
                        "price_large": 15.95,
                        "price_small": 11.95,
                        "short_name": "C17",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "diced chicken sauteed with mushrooms, waterchestnuts, celery, peas, carrots, peanuts, and cahsews in a chef's sauce; white meat by request: for pint $1 extra, for large $2 extra",
                        "large_portion_name": "large",
                        "name": "Eight Treasure Chicken",
                        "price_large": 14.95,
                        "price_small": 10.95,
                        "short_name": "C18",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "chunks of chicken breaded and fried, the sauteed with green peppers",
                        "large_portion_name": "large",
                        "name": "Salt & Pepper Chicken",
                        "price_large": 15.95,
                        "price_small": 11.95,
                        "short_name": "C19",
                        "small_portion_name": "pint"
                    }
                ]
            },
            "CM": {
                "category": {
                    "id": 95,
                    "name": "Chow Mein",
                    "short_name": "CM",
                    "special_instructions": ""
                },
                "menu_items": [
                    {
                        "description": "broccoli, snow peas, onions, bean sprouts, and celery sauteed with white sauce",
                        "large_portion_name": "large",
                        "name": "Vegetable Chow Mein",
                        "price_large": 11.45,
                        "price_small": 8.95,
                        "short_name": "CM1",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "white meat chicken sauteed with bean sprouts, onions, and celery in white sauce",
                        "large_portion_name": "large",
                        "name": "Chicken Chow Mein",
                        "price_large": 12.45,
                        "price_small": 9.95,
                        "short_name": "CM2",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "beef sauteed with bean sprouts, onions, and celery in brown sauce",
                        "large_portion_name": "large",
                        "name": "Beef Chow Mein",
                        "price_large": 12.45,
                        "price_small": 9.95,
                        "short_name": "CM3",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "veal sauteed with bean sprouts, onions, and celery in brown sauce",
                        "large_portion_name": "large",
                        "name": "Veal Chow Mein",
                        "price_large": 13.45,
                        "price_small": 10.95,
                        "short_name": "CM4",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "veal, beef, and chicken sauteed with bean sprouts, onions, and celery in brown sauce",
                        "large_portion_name": "large",
                        "name": "House Special Chow Mein",
                        "price_large": 14.45,
                        "price_small": 11.95,
                        "short_name": "CM5",
                        "small_portion_name": "pint"
                    }
                ]
            },
            "CU": {
                "category": {
                    "id": 90,
                    "name": "Curry",
                    "short_name": "CU",
                    "special_instructions": ""
                },
                "menu_items": [
                    {
                        "description": "white meat chicken sauteed with ionions, peas, carrots, and broccoli",
                        "large_portion_name": "large",
                        "name": "Curry Chicken",
                        "price_large": 14.95,
                        "price_small": 11.95,
                        "short_name": "CU21",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "beef sauteed with ionions, peas, carrots, and broccoli",
                        "large_portion_name": "large",
                        "name": "Curry Beef",
                        "price_large": 16.95,
                        "price_small": 12.95,
                        "short_name": "CU22",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "veal sauteed with ionions, peas, carrots, and broccoli",
                        "large_portion_name": "large",
                        "name": "Curry Veal",
                        "price_large": 17.95,
                        "price_small": 12.95,
                        "short_name": "CU23",
                        "small_portion_name": "pint"
                    }
                ]
            },
            "D": {
                "category": {
                    "id": 99,
                    "name": "Dinner Combo",
                    "short_name": "D",
                    "special_instructions": "Served with your choice of rice (Vegetable Fried RIce, Steamed Rice, Brown Rice), AND EITHER soup (Hot & Sour, Wonton, Vegetable, Egg Drop, Chicken Corn Soup) OR veggie egg roll."
                },
                "menu_items": [
                    {
                        "description": "chunks of chicken, breaded and deep-fried with sauce containing orange peels; white meat by request: for pint $1 extra, for large $2 extra",
                        "name": "Orange Chicken",
                        "price_large": 13.95,
                        "short_name": "D1"
                    },
                    {
                        "description": "chunks of chicken, breaded and deep-fried with sauce and scallions; white meat by request: for pint $1 extra, for large $2 extra",
                        "name": "General Tso's Chicken",
                        "price_large": 13.95,
                        "short_name": "D2"
                    },
                    {
                        "description": "chunks of chicken, breaded and deep-fried with a sesame seed sauce",
                        "name": "Sesame Chicken",
                        "price_large": 13.95,
                        "short_name": "D3"
                    },
                    {
                        "description": "diced chicken sauteed with peanuts, and celery in delicious kung pao sauce; white meat by request: for pint $1 extra, for large $2 extra",
                        "name": "Kung Pao Chicken",
                        "price_large": 13.95,
                        "short_name": "D4"
                    },
                    {
                        "description": "diced chicken with waterchestnuts, green peppers, and celery, and cashewnuts; white meat by request: for pint $1 extra, for large $2 extra",
                        "name": "Chicken Cashewnuts",
                        "price_large": 13.95,
                        "short_name": "D5"
                    },
                    {
                        "description": "white meat chicken in a clear white sauce",
                        "name": "Chicken with Vegetables",
                        "price_large": 13.95,
                        "short_name": "D6"
                    },
                    {
                        "description": "white meat chicken, breaded and fried with some green pepper, onion, and pineapples",
                        "name": "Sweet and Sour Chicken",
                        "price_large": 13.95,
                        "short_name": "D7"
                    },
                    {
                        "description": "sliced beef sauteed with broccoli in brown sauce",
                        "name": "Beef Broccoli",
                        "price_large": 13.95,
                        "short_name": "D8"
                    },
                    {
                        "description": "sliced beef sauteed in garlic sauce",
                        "name": "Beef with Garlic Sauce",
                        "price_large": 13.95,
                        "short_name": "D9"
                    },
                    {
                        "description": "sliced beef sauteed with mixed vegetables",
                        "name": "Beef with Fresh Vegetables",
                        "price_large": 13.95,
                        "short_name": "D10"
                    },
                    {
                        "description": "sliced veal sauteed with mixed vegetables",
                        "name": "Veal with Fresh Vegetables",
                        "price_large": 13.95,
                        "short_name": "D11"
                    },
                    {
                        "description": "sliced veal sauteed in garlic sauce",
                        "name": "Veal with Garlic Sauce",
                        "price_large": 13.95,
                        "short_name": "D12"
                    },
                    {
                        "description": "bean curd lightly fried then sauteed with green pepper, snow peas, and water chestnuts in brown sauce",
                        "name": "Hunan Bean Curd",
                        "price_large": 13.95,
                        "short_name": "D13"
                    },
                    {
                        "description": "Tofu lightly breaded and fried and sauteed with carrots, broccoli, snow peas, string beans, water chestnuts, and mushrooms in brown sauce",
                        "name": "Bean Curd with Fresh Vegetables",
                        "price_large": 13.95,
                        "short_name": "D14"
                    },
                    {
                        "description": "broccoli, carrots, baby corn, water chestnuts, mushrooms, and snow peas sauteed in brown sauce",
                        "name": "Mixed Vegetables",
                        "price_large": 13.95,
                        "short_name": "D15"
                    },
                    {
                        "description": "eggplant sauteed with water chestnuts and string beans in garlic sauce",
                        "name": "Eggplant with Garlic Sauce",
                        "price_large": 13.95,
                        "short_name": "D16"
                    },
                    {
                        "description": "onions, and bean sprouts sauteed with soft lo mein noodles",
                        "name": "Lo Mein",
                        "price_large": 13.95,
                        "short_name": "D17"
                    },
                    {
                        "description": "chow mein noodles sauteed with bean sprouts, onions, and celery in brown sauce",
                        "name": "Chow Mein",
                        "price_large": 13.95,
                        "short_name": "D18"
                    }
                ]
            },
            "DK": {
                "category": {
                    "id": 88,
                    "name": "Duck",
                    "short_name": "DK",
                    "special_instructions": ""
                },
                "menu_items": [
                    {
                        "description": "marinated duck roasted crisp and served with pancake and green onion with special sauce",
                        "large_portion_name": "whole",
                        "name": "Peking Duck",
                        "price_large": 52.95,
                        "price_small": 28.95,
                        "short_name": "DK1",
                        "small_portion_name": "half"
                    },
                    {
                        "description": "boneless duck meat, lightly breaded, deep fried to a crisp, topped with vegetables in chef's special sauce",
                        "name": "Crispy Duck",
                        "price_large": 30.95,
                        "short_name": "DK2"
                    },
                    {
                        "description": "sliced lean duck meat sauteed with mixed vegtables in brown sauce",
                        "name": "Duck with Vegetables",
                        "price_large": 30.95,
                        "short_name": "DK3"
                    }
                ]
            },
            "DS": {
                "category": {
                    "id": 98,
                    "name": "Desserts",
                    "short_name": "DS",
                    "special_instructions": ""
                },
                "menu_items": [
                    {
                        "description": "",
                        "large_portion_name": "slice",
                        "name": "Chocolate Truffle Cake",
                        "price_large": 4.25,
                        "short_name": "DS1"
                    },
                    {
                        "description": "",
                        "large_portion_name": "slice",
                        "name": "Cappuccino Apricot Cake",
                        "price_large": 4.25,
                        "short_name": "DS2"
                    }
                ]
            },
            "F": {
                "category": {
                    "id": 86,
                    "name": "Beef",
                    "short_name": "F",
                    "special_instructions": ""
                },
                "menu_items": [
                    {
                        "description": "sliced beef sauteed with broccoli in brown sauce",
                        "large_portion_name": "large",
                        "name": "Beef Broccoli",
                        "price_large": 15.45,
                        "price_small": 11.45,
                        "short_name": "F1",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "beef sauteed with broccoli, mushrooms, and carrots in spicy Hunan sauce",
                        "large_portion_name": "large",
                        "name": "Hunan Beef",
                        "price_large": 15.45,
                        "price_small": 11.45,
                        "short_name": "F2",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "beef sauteed with carrots and celery, in a spicy Szechuan sauce",
                        "large_portion_name": "large",
                        "name": "Szechuan Beef",
                        "price_large": 15.45,
                        "price_small": 11.45,
                        "short_name": "F3",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "sliced beef sauteed with mixed vegetables",
                        "large_portion_name": "large",
                        "name": "Beef with Mixed Vegetables",
                        "price_large": 15.45,
                        "price_small": 11.45,
                        "short_name": "F4",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "sliced beef sauteed in garlic sauce",
                        "large_portion_name": "large",
                        "name": "Beef with Garlic Sauce",
                        "price_large": 15.45,
                        "price_small": 11.45,
                        "short_name": "F5",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "sliced beef sauteed with eggplant in garlic sauce",
                        "large_portion_name": "large",
                        "name": "Beef with Eggplant in Garlic Sauce",
                        "price_large": 15.45,
                        "price_small": 11.45,
                        "short_name": "F6",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "sliced beef sauteed with snow peas in brown sauce",
                        "large_portion_name": "large",
                        "name": "Beef with Snow Peas",
                        "price_large": 15.45,
                        "price_small": 11.45,
                        "short_name": "F7",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "sliced beef sauteed with green peppers and onions in brown sauce",
                        "large_portion_name": "large",
                        "name": "Beef with Green Pepper",
                        "price_large": 15.45,
                        "price_small": 11.45,
                        "short_name": "F8",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "sliced beef sauteed with peanuts and celery in delicious Kung Pao sauce",
                        "large_portion_name": "large",
                        "name": "Kung Pao Beef",
                        "price_large": 15.45,
                        "price_small": 11.45,
                        "short_name": "F9",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "sliced beef sauteed with bamboo shoots, onions, and green onions in chef's sauce",
                        "large_portion_name": "large",
                        "name": "Mongolian Beef",
                        "price_large": 15.45,
                        "price_small": 11.45,
                        "short_name": "F10",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "sliced beef sauteed  with shredded cabbage, mushrooms and eggs, then wrapped with pancake and delicious plum sauce",
                        "large_portion_name": "large",
                        "name": "Moo Shu Beef",
                        "price_large": 15.45,
                        "price_small": 11.45,
                        "short_name": "F11",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "sliced beef sauteed with string beans and onions",
                        "large_portion_name": "large",
                        "name": "Beef with String Bean",
                        "price_large": 15.45,
                        "price_small": 11.45,
                        "short_name": "F12",
                        "small_portion_name": "pint"
                    }
                ]
            },
            "FR": {
                "category": {
                    "id": 94,
                    "name": "Fried Rice",
                    "short_name": "FR",
                    "special_instructions": ""
                },
                "menu_items": [
                    {
                        "description": "broccoli, snow peas, onions, and bean sprouts sauteed with rice",
                        "large_portion_name": "large",
                        "name": "Vegetable Fried Rice",
                        "price_large": 11.45,
                        "price_small": 8.95,
                        "short_name": "FR1",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "white meat chicken sauteed with onions and bean sprouts with rice",
                        "large_portion_name": "large",
                        "name": "Chicken Fried Rice",
                        "price_large": 12.45,
                        "price_small": 9.95,
                        "short_name": "FR2",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "sliced beef sauteed with onions and bean sprouts with rice",
                        "large_portion_name": "large",
                        "name": "Beef Fried Rice",
                        "price_large": 12.45,
                        "price_small": 9.95,
                        "short_name": "FR3",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "sliced veal sauteed with onions and bean sprouts with rice",
                        "large_portion_name": "large",
                        "name": "Veal Fried Rice",
                        "price_large": 13.45,
                        "price_small": 10.95,
                        "short_name": "FR4",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "veal, beef, and chicken sauteed with onions and bean sprouts with rice",
                        "large_portion_name": "large",
                        "name": "House Fried Rice",
                        "price_large": 14.45,
                        "price_small": 11.95,
                        "short_name": "FR5",
                        "small_portion_name": "pint"
                    }
                ]
            },
            "FY": {
                "category": {
                    "id": 96,
                    "name": "Egg Foo Young",
                    "short_name": "FY",
                    "special_instructions": ""
                },
                "menu_items": [
                    {
                        "description": "shredded cabbage, onions, bean sprouts, celery, snow peas, and carrots in egg",
                        "name": "Vegetable Egg Foo Young",
                        "price_large": 11.45,
                        "short_name": "FY1"
                    },
                    {
                        "description": "white meat chicken, shredded cabbage, onions, bean sprouts, celery, snow peas, and carrots in egg",
                        "name": "Chicken Egg Foo Young",
                        "price_large": 13.45,
                        "short_name": "FY2"
                    },
                    {
                        "description": "beef, shredded cabbage, onions, bean sprouts, celery, snow peas, and carrots in egg",
                        "name": "Beef Egg Foo Young",
                        "price_large": 13.45,
                        "short_name": "FY3"
                    },
                    {
                        "description": "veal, shredded cabbage, onions, bean sprouts, celery, snow peas, and carrots in egg",
                        "name": "Veal Egg Foo Young",
                        "price_large": 14.45,
                        "short_name": "FY4"
                    },
                    {
                        "description": "veal, beef, and chicken, shredded cabbage, onions, bean sprouts, celery, snow peas, and carrots in egg",
                        "name": "House Egg Foo Young",
                        "price_large": 15.45,
                        "short_name": "FY5"
                    }
                ]
            },
            "L": {
                "category": {
                    "id": 81,
                    "name": "Lunch",
                    "short_name": "L",
                    "special_instructions": "Sunday-Friday 11:15am-3:00pm. Served with your choice of rice (Vegetable Fried RIce, Steamed Rice, Brown Rice), AND EITHER soup (Hot & Sour, Wonton, Vegetable, Egg Drop, Chicken Corn Soup) OR veggie egg roll. $1.00 extra to have both soup and egg roll."
                },
                "menu_items": [
                    {
                        "description": "chunks of chicken, breaded and deep-fried with sauce containing orange peels; white meat by request: for pint $1 extra, for large $2 extra",
                        "name": "Orange Chicken",
                        "price_large": 9.75,
                        "short_name": "L1"
                    },
                    {
                        "description": "chunks of chicken, breaded and deep-fried with sauce and scallions; white meat by request: for pint $1 extra, for large $2 extra",
                        "name": "General Tso's Chicken",
                        "price_large": 9.75,
                        "short_name": "L2"
                    },
                    {
                        "description": "diced chicken with waterchestnuts, green peppers, and celery, and cashewnuts; white meat by request: for pint $1 extra, for large $2 extra",
                        "name": "Chicken Cashewnuts",
                        "price_large": 9.75,
                        "short_name": "L3"
                    },
                    {
                        "description": "beef sauteed with carrots and celery, in a spicy Szechuan sauce",
                        "name": "Kung Pao Chicken",
                        "price_large": 9.75,
                        "short_name": "L4"
                    },
                    {
                        "description": "white meat chicken sauteed with string beans and soy sauce",
                        "name": "Chicken String Bean",
                        "price_large": 9.75,
                        "short_name": "L5"
                    },
                    {
                        "description": "white meat chicken in a clear white sauce sauteed with mixed vegetables",
                        "name": "Chicken Vegetable",
                        "price_large": 9.75,
                        "short_name": "L6"
                    },
                    {
                        "description": "chicken sauteed with string beans, mushrooms, and waterchestnuts in garlic sauce",
                        "name": "Chicken Garlic Sauce",
                        "price_large": 9.75,
                        "short_name": "L7"
                    },
                    {
                        "description": "white meat chicken, string beans, waterchestnuts, mushrooms, and eggplant, in garlic sauce",
                        "name": "Chicken Eggplant with Garlic Sauce",
                        "price_large": 9.75,
                        "short_name": "L8"
                    },
                    {
                        "description": "white meat chicken, breaded and fried with some green pepper, onion, and pineapples",
                        "name": "Sweet and Sour Chicken",
                        "price_large": 9.75,
                        "short_name": "L9"
                    },
                    {
                        "description": "white meat chicken sauteed with broccoli in brown sauce",
                        "name": "Chicken Broccoli",
                        "price_large": 9.75,
                        "short_name": "L10"
                    },
                    {
                        "description": "white meat chicken sauteed with broccoli, mushrooms, and baby corn in Hunan sauce",
                        "name": "Hunan Chicken",
                        "price_large": 9.75,
                        "short_name": "L11"
                    },
                    {
                        "description": "white meat chicken sauteed with carrots, celery, and bean sprouts in Szechuan sauce",
                        "name": "Szechuan Chicken",
                        "price_large": 9.75,
                        "short_name": "L12"
                    },
                    {
                        "description": "beef sauteed with broccoli, mushrooms, and carrots in spicy Hunan sauce",
                        "name": "Hunan Beef",
                        "price_large": 9.75,
                        "short_name": "L13"
                    },
                    {
                        "description": "sliced beef sauteed with broccoli in brown sauce",
                        "name": "Beef with Broccoli",
                        "price_large": 9.75,
                        "short_name": "L14"
                    },
                    {
                        "description": "sliced beef sauteed in garlic sauce",
                        "name": "Beef with Garlic Sauce",
                        "price_large": 9.75,
                        "short_name": "L15"
                    },
                    {
                        "description": "sliced beef sauteed with string beans and onions",
                        "name": "Beef String Bean",
                        "price_large": 9.75,
                        "short_name": "L16"
                    },
                    {
                        "description": "sliced beef sauteed with green peppers and onions in brown sauce",
                        "name": "Beef with Green Pepper",
                        "price_large": 9.75,
                        "short_name": "L17"
                    },
                    {
                        "description": "sliced veal sauteed with carrots, broccoli, snow peas, string beans, water chestnuts, and mushrooms in brown sauce",
                        "name": "Veal with Mixed Vegetables",
                        "price_large": 9.75,
                        "short_name": "L18"
                    },
                    {
                        "description": "bean curd lightly fried then sauteed with green pepper, snow peas, and water chestnuts in brown sauce",
                        "name": "Hunan Bean Curd",
                        "price_large": 9.75,
                        "short_name": "L19"
                    },
                    {
                        "description": "Tofu lightly breaded and fried and sauteed with carrots, broccoli, snow peas, string beans, water chestnuts, and mushrooms in brown sauce",
                        "name": "Bean Curd with Vegetables",
                        "price_large": 9.75,
                        "short_name": "L20"
                    },
                    {
                        "description": "broccoli, carrots, baby corn, water chestnuts, mushrooms, and snow peas sauteed in brown sauce",
                        "name": "Wok's Mixed Vegetables",
                        "price_large": 9.75,
                        "short_name": "L21"
                    },
                    {
                        "description": "onions and string beans sauteed with chef's sauce",
                        "name": "Szechuan String Bean",
                        "price_large": 9.75,
                        "short_name": "L22"
                    },
                    {
                        "description": "eggplant sauteed with water chestnuts and string beans in garlic sauce",
                        "name": "Eggplant with Garlic Sauce",
                        "price_large": 9.75,
                        "short_name": "L23"
                    },
                    {
                        "description": "white meat chicken sauteed with onions and bean sprouts",
                        "name": "Chicken Mei Fan",
                        "price_large": 9.75,
                        "short_name": "L24"
                    },
                    {
                        "description": "white meat chicken OR beef OR vegetables, sauteed with bean sprouts, onions, and celery in white sauce",
                        "name": "Chow Mein",
                        "price_large": 9.75,
                        "short_name": "L26"
                    },
                    {
                        "description": "white meat chicken OR beef OR vegetables, sauteed with onions, and bean sprouts and soft lo mein noodles",
                        "name": "Lo Mein",
                        "price_large": 9.75,
                        "short_name": "L27"
                    },
                    {
                        "description": "chunks of chicken, breaded and deep-fried with a sesame seed sauce",
                        "name": "Sesame Chicken",
                        "price_large": 9.75,
                        "short_name": "L28"
                    }
                ]
            },
            "NF": {
                "category": {
                    "id": 92,
                    "name": "Mei Fan (Very Fine Noodles)",
                    "short_name": "NF",
                    "special_instructions": ""
                },
                "menu_items": [
                    {
                        "description": "broccoli, snow peas, onions, and bean sprouts sauteed with rice noodles",
                        "name": "Vegetable Mei Fan",
                        "price_large": 12.95,
                        "short_name": "NF10"
                    },
                    {
                        "description": "white meat chicken sauteed with onions and bean sprouts",
                        "name": "Chicken Mei Fan",
                        "price_large": 14.95,
                        "short_name": "NF11"
                    },
                    {
                        "description": "beef sauteed with onions and bean sprouts",
                        "name": "Beef Mei Fan",
                        "price_large": 15.95,
                        "short_name": "NF12"
                    },
                    {
                        "description": "white meat chicken, beef, and veal sauteed with onions and bean sprouts",
                        "name": "House Special Mei Fan",
                        "price_large": 17.95,
                        "short_name": "NF13"
                    }
                ]
            },
            "NL": {
                "category": {
                    "id": 91,
                    "name": "Noodles (Lo Mein)",
                    "short_name": "NL",
                    "special_instructions": ""
                },
                "menu_items": [
                    {
                        "description": "broccoli, carrots, onions, snow peas, and bean sprouts sauteed with soft lo mein noodles",
                        "large_portion_name": "large",
                        "name": "Vegetable Lo Mein",
                        "price_large": 10.95,
                        "price_small": 8.95,
                        "short_name": "NL1",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "white meat chicken, onions, and bean sprouts sauteed with soft lo mein noodles",
                        "large_portion_name": "large",
                        "name": "Chicken Lo Mein",
                        "price_large": 11.95,
                        "price_small": 9.95,
                        "short_name": "NL2",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "beef, onions, and bean sprouts sauteed with soft lo mein noodles",
                        "large_portion_name": "large",
                        "name": "Beef Lo Mein",
                        "price_large": 11.95,
                        "price_small": 9.95,
                        "short_name": "NL3",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "veal, onions, and bean sprouts sauteed with soft lo mein noodles",
                        "large_portion_name": "large",
                        "name": "Veal Lo Mein",
                        "price_large": 12.95,
                        "price_small": 10.95,
                        "short_name": "NL4",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "white meat chicken, beef, veal, onions, and bean sprouts sauteed with soft lo mein noodles",
                        "large_portion_name": "large",
                        "name": "House Special Lo Mein",
                        "price_large": 13.95,
                        "price_small": 11.95,
                        "short_name": "NL5",
                        "small_portion_name": "pint"
                    }
                ]
            },
            "PF": {
                "category": {
                    "id": 93,
                    "name": "Pan Fried Noodles",
                    "short_name": "PF",
                    "special_instructions": ""
                },
                "menu_items": [
                    {
                        "description": "broccoli, snow peas, mushrooms, water chestnuts, and carrots sauteed with brown sauce on a bed of crispy crunchy noodles",
                        "name": "Pan Fried Noodles with Vegetables",
                        "price_large": 12.45,
                        "short_name": "PF1"
                    },
                    {
                        "description": "white meat chicken sauteed with broccoli, snow peas, mushrooms, water chestnuts, and carrots with brown sauce on a bed of crispy crunchy noodles",
                        "name": "Pan Fried Noodles with Chicken",
                        "price_large": 16.45,
                        "short_name": "PF2"
                    },
                    {
                        "description": "sliced beef sauteed with broccoli, snow peas, mushrooms, water chestnuts, and carrots with brown sauce on a bed of crispy crunchy noodles",
                        "name": "Pan Fried Noodles with Beef",
                        "price_large": 16.45,
                        "short_name": "PF3"
                    },
                    {
                        "description": "sliced veal sauteed with broccoli, snow peas, mushrooms, water chestnuts, and carrots with brown sauce on a bed of crispy crunchy noodles",
                        "name": "Pan Fried Noodles with Veal",
                        "price_large": 17.45,
                        "short_name": "PF4"
                    },
                    {
                        "description": "veal, beef, and chicken sauteed with broccoli, snow peas, mushrooms, water chestnuts, and carrots with brown sauce on a bed of crispy crunchy noodles",
                        "name": "House Special Pan Fried Noodles",
                        "price_large": 18.45,
                        "short_name": "PF5"
                    }
                ]
            },
            "SO": {
                "category": {
                    "id": 97,
                    "name": "Side Orders",
                    "short_name": "SO",
                    "special_instructions": ""
                },
                "menu_items": [
                    {
                        "description": "",
                        "name": "Chicken Nuggets with French Fries",
                        "price_large": 7.25,
                        "short_name": "SO1"
                    },
                    {
                        "description": "",
                        "name": "French Fries",
                        "price_large": 4.25,
                        "short_name": "SO2"
                    },
                    {
                        "description": "",
                        "large_portion_name": "large",
                        "name": "Brown Rice",
                        "price_large": 4,
                        "price_small": 2.5,
                        "short_name": "SO3",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "",
                        "large_portion_name": "large",
                        "name": "Extra White Rice",
                        "price_large": 4,
                        "price_small": 2.5,
                        "short_name": "SO4",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "",
                        "large_portion_name": "large",
                        "name": "Extra Fried Rice",
                        "price_large": 4,
                        "price_small": 2.5,
                        "short_name": "SO5",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "",
                        "name": "Fortune Cookies (12)",
                        "price_large": 2.5,
                        "short_name": "SO6"
                    },
                    {
                        "description": "",
                        "name": "Fountain Soda Large",
                        "price_large": 2,
                        "short_name": "SO7"
                    }
                ]
            },
            "SP": {
                "category": {
                    "id": 84,
                    "name": "Chef's Recommendations",
                    "short_name": "SP",
                    "special_instructions": ""
                },
                "menu_items": [
                    {
                        "description": "with choice of string bean, string bean chicken, string bean beef, beef onions, moo shu vegetable",
                        "name": "Chinese Scallion Pancake Wrap",
                        "price_large": 18.95,
                        "short_name": "SP1"
                    },
                    {
                        "description": "marinated grilled chicken breast with vegetables and lo mein on the side",
                        "name": "Teriyaki Chicken",
                        "price_large": 18.95,
                        "short_name": "SP2"
                    },
                    {
                        "description": "assorted vegetables breaded and fried, served with lo mein on the side",
                        "name": "Vegetable Tempura",
                        "price_large": 15.95,
                        "short_name": "SP3"
                    },
                    {
                        "description": "white meat chicken and beef, breaded and deep-fried with special house sauce; served with lo mein and vegetables",
                        "name": "Orange Chicken and Beef Combo",
                        "price_large": 19.95,
                        "short_name": "SP4"
                    },
                    {
                        "description": "beef, veal, and chicken sauteed with mixed vegetables in chef's special sauce; lo mein served on the side",
                        "name": "Happy Family",
                        "price_large": 19.95,
                        "short_name": "SP5"
                    },
                    {
                        "description": "marinated and grilled veal served with vegetables and lo mein on the side",
                        "name": "Grilled Veal",
                        "price_large": 19.95,
                        "short_name": "SP6"
                    },
                    {
                        "description": "a few cuts of beef, breaded, deep-fried with sauce containing orange peels; served with lo mein on the side",
                        "name": "Orange Beef",
                        "price_large": 19.95,
                        "short_name": "SP7"
                    },
                    {
                        "description": "a few cuts of beef, breaded, deep-fried with sauce containing sesame seeds; served with lo mein on the side",
                        "name": "Sesame Beef",
                        "price_large": 19.95,
                        "short_name": "SP8"
                    }
                ]
            },
            "SR": {
                "category": {
                    "id": 100,
                    "name": "Sushi Menu",
                    "short_name": "SR",
                    "special_instructions": "Contains raw ingredients. Consuming raw or undercooked meat, poultry, or seafood may increase your risk of food borne illness."
                },
                "menu_items": [
                    {
                        "description": "",
                        "name": "Cucumber Sushi Roll",
                        "price_large": 4.5,
                        "short_name": "SR1"
                    },
                    {
                        "description": "",
                        "name": "Asparagus Sushi Roll",
                        "price_large": 5,
                        "short_name": "SR2"
                    },
                    {
                        "description": "",
                        "name": "Avocado Sushi Roll",
                        "price_large": 5,
                        "short_name": "SR3"
                    },
                    {
                        "description": "",
                        "name": "Garden Vegetable Sushi Roll",
                        "price_large": 6.5,
                        "short_name": "SR4"
                    },
                    {
                        "description": "",
                        "name": "California Sushi Roll",
                        "price_large": 6,
                        "short_name": "SR5"
                    },
                    {
                        "description": "",
                        "name": "Salmon Sushi Roll",
                        "price_large": 5.5,
                        "short_name": "SR6"
                    },
                    {
                        "description": "",
                        "name": "Tuna Sushi Roll",
                        "price_large": 5.5,
                        "short_name": "SR7"
                    },
                    {
                        "description": "",
                        "name": "Yellowtail Sushi Roll",
                        "price_large": 6,
                        "short_name": "SR8"
                    },
                    {
                        "description": "",
                        "name": "Salmon Skin & Cucumber Sushi Roll",
                        "price_large": 5.5,
                        "short_name": "SR9"
                    },
                    {
                        "description": "",
                        "name": "Tuna and Avocado Sushi Roll",
                        "price_large": 6.5,
                        "short_name": "SR10"
                    },
                    {
                        "description": "",
                        "name": "Salmon and Avocado Sushi Roll",
                        "price_large": 6.5,
                        "short_name": "SR11"
                    },
                    {
                        "description": "",
                        "name": "Yellowtail and Avocado Sushi Roll",
                        "price_large": 6.5,
                        "short_name": "SR12"
                    },
                    {
                        "description": "",
                        "name": "Spicy Tuna Sushi Roll",
                        "price_large": 6.5,
                        "short_name": "SR13"
                    },
                    {
                        "description": "",
                        "name": "Spicy Salmon Sushi Roll",
                        "price_large": 6.5,
                        "short_name": "SR14"
                    },
                    {
                        "description": "",
                        "name": "Fried Sweet Potato Sushi Roll",
                        "price_large": 6.5,
                        "short_name": "SR15"
                    },
                    {
                        "description": "",
                        "name": "Philadelphia Sushi Roll",
                        "price_large": 6.5,
                        "short_name": "SR16"
                    },
                    {
                        "description": "",
                        "name": "Salmon Tempura Cooked Sushi Roll",
                        "price_large": 9.5,
                        "short_name": "SR17"
                    },
                    {
                        "description": "",
                        "name": "Teriyaki Tuna Cooked Sushi Roll",
                        "price_large": 8,
                        "short_name": "SR18"
                    },
                    {
                        "description": "",
                        "name": "Teriyaki Salmon Cooked Sushi Roll",
                        "price_large": 8,
                        "short_name": "SR19"
                    },
                    {
                        "description": "",
                        "name": "Tiriyaki Combo Cooked Sushi Roll",
                        "price_large": 9.5,
                        "short_name": "SR20"
                    },
                    {
                        "description": "",
                        "name": "Tuna and Cucumber Temaki Roll",
                        "price_large": 7,
                        "short_name": "SR21"
                    },
                    {
                        "description": "",
                        "name": "Salmon Skin and Cucumber Temaki Roll",
                        "price_large": 7,
                        "short_name": "SR22"
                    },
                    {
                        "description": "",
                        "name": "Yellowtail Avocado Temaki Roll",
                        "price_large": 7,
                        "short_name": "SR23"
                    },
                    {
                        "description": "",
                        "name": "Salmon Tartar Temaki Roll",
                        "price_large": 8,
                        "short_name": "SR24"
                    },
                    {
                        "description": "",
                        "name": "Salmon Sashimi",
                        "price_large": 2.5,
                        "short_name": "SR25"
                    },
                    {
                        "description": "",
                        "name": "Tuna Sashimi",
                        "price_large": 2.5,
                        "short_name": "SR26"
                    },
                    {
                        "description": "",
                        "name": "Yellowtail Sashimi",
                        "price_large": 2.75,
                        "short_name": "SR27"
                    },
                    {
                        "description": "",
                        "name": "Imitation Crab Stick Sashimi",
                        "price_large": 2.5,
                        "short_name": "SR28"
                    },
                    {
                        "description": "",
                        "name": "Garden Salad",
                        "price_large": 5.95,
                        "short_name": "SR29"
                    },
                    {
                        "description": "",
                        "name": "Double Happiness",
                        "price_large": 13,
                        "short_name": "SR30"
                    },
                    {
                        "description": "",
                        "name": "Las Vegas Roll",
                        "price_large": 14,
                        "short_name": "SR31"
                    },
                    {
                        "description": "",
                        "name": "Love Roll",
                        "price_large": 13,
                        "short_name": "SR32"
                    },
                    {
                        "description": "",
                        "name": "Volcano Roll",
                        "price_large": 13,
                        "short_name": "SR33"
                    },
                    {
                        "description": "",
                        "name": "Alaska Roll",
                        "price_large": 12,
                        "short_name": "SR34"
                    },
                    {
                        "description": "",
                        "name": "Rainbow Roll",
                        "price_large": 12,
                        "short_name": "SR35"
                    },
                    {
                        "description": "",
                        "name": "Orioles",
                        "price_large": 12,
                        "short_name": "SR36"
                    },
                    {
                        "description": "",
                        "name": "Dragon Roll",
                        "price_large": 12,
                        "short_name": "SR37"
                    },
                    {
                        "description": "",
                        "name": "Blossom Roll",
                        "price_large": 13,
                        "short_name": "SR38"
                    },
                    {
                        "description": "",
                        "name": "Golden Dragon Roll",
                        "price_large": 13,
                        "short_name": "SR39"
                    },
                    {
                        "description": "",
                        "name": "Festival Roll",
                        "price_large": 15,
                        "short_name": "SR40"
                    },
                    {
                        "description": "",
                        "name": "Sashimi Combo",
                        "price_large": 18,
                        "short_name": "SR41"
                    },
                    {
                        "description": "",
                        "name": "Sushi Sashimi Combo",
                        "price_large": 27.95,
                        "short_name": "SR42"
                    },
                    {
                        "description": "",
                        "name": "Sashimi Maki Combo",
                        "price_large": 15,
                        "short_name": "SR43"
                    }
                ]
            },
            "V": {
                "category": {
                    "id": 87,
                    "name": "Veal",
                    "short_name": "V",
                    "special_instructions": ""
                },
                "menu_items": [
                    {
                        "description": "veal sauteed with broccoli, mushrooms, and carrots in spicy Hunan sauce",
                        "large_portion_name": "large",
                        "name": "Hunan Veal",
                        "price_large": 18.45,
                        "price_small": 12.45,
                        "short_name": "V1",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "sliced veal sauteed with carrots, broccoli, snow peas, string beans, water chestnuts, and mushrooms in brown sauce",
                        "large_portion_name": "large",
                        "name": "Veal with Mixed Vegetables",
                        "price_large": 18.45,
                        "price_small": 12.45,
                        "short_name": "V2",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "sliced veal sauteed with mushrooms, string beans, and water chestnuts in garlic sauce",
                        "large_portion_name": "large",
                        "name": "Veal with Garlic Sauce",
                        "price_large": 18.45,
                        "price_small": 12.45,
                        "short_name": "V3",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "sliced veal sauteed with peanuts and celery in delicious Kung Pao sauce",
                        "large_portion_name": "large",
                        "name": "Kung Pao Veal",
                        "price_large": 18.45,
                        "price_small": 12.45,
                        "short_name": "V4",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "veal sauteed with onions, green onions, and bamboo shoots in chef's sauce",
                        "large_portion_name": "large",
                        "name": "Mongolian Veal",
                        "price_large": 18.45,
                        "price_small": 12.45,
                        "short_name": "V5",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "sliced veal sauteed with onions and green peppers in brown sauce",
                        "large_portion_name": "large",
                        "name": "Veal with Green Peppers",
                        "price_large": 18.45,
                        "price_small": 12.45,
                        "short_name": "V6",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "veal sauteed with carrots, celery, and bean sprouts in Szechuan sauce",
                        "large_portion_name": "large",
                        "name": "Szechuan Veal",
                        "price_large": 18.45,
                        "price_small": 12.45,
                        "short_name": "V7",
                        "small_portion_name": "pint"
                    }
                ]
            },
            "VG": {
                "category": {
                    "id": 89,
                    "name": "Vegetables",
                    "short_name": "VG",
                    "special_instructions": ""
                },
                "menu_items": [
                    {
                        "description": "broccoli, carrots, baby corn, water chestnuts, mushrooms, and snow peas sauteed in brown sauce",
                        "large_portion_name": "large",
                        "name": "Wok's Mixed Vegetables",
                        "price_large": 11.45,
                        "price_small": 9.45,
                        "short_name": "VG1",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "onions and string beans sauteed with chef's sauce",
                        "large_portion_name": "large",
                        "name": "Sauteed String Beans, Szechuan",
                        "price_large": 11.45,
                        "price_small": 9.45,
                        "short_name": "VG2",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "eggplant sauteed with water chestnuts and string beans in garlic sauce",
                        "large_portion_name": "large",
                        "name": "Eggplant in Garlic Sauce",
                        "price_large": 11.45,
                        "price_small": 9.45,
                        "short_name": "VG3",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "breaded and fried eggplants sauteed in sweet garlic sauce and sesame seeds",
                        "large_portion_name": "large",
                        "name": "Crispy Eggplant in Garlic Sauce",
                        "price_large": 11.45,
                        "price_small": 9.45,
                        "short_name": "VG4",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "broccoli sauteed with fresh mushrooms in white sauce",
                        "large_portion_name": "large",
                        "name": "Broccoli Sauteed wtih Mushrooms in Light Sauce",
                        "price_large": 11.45,
                        "price_small": 9.45,
                        "short_name": "VG5",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "shredded cabbage sauteed with mushrooms, carrots, and scrambled eggs",
                        "large_portion_name": "large",
                        "name": "Moo Shu Vegetables",
                        "price_large": 11.45,
                        "price_small": 9.45,
                        "short_name": "VG6",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "snow peas and water chestnuts sauteed in brown sauce",
                        "large_portion_name": "large",
                        "name": "Sauteed Snow Peas & Waterchestnuts in Brown Sauce",
                        "price_large": 11.45,
                        "price_small": 9.45,
                        "short_name": "VG7",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "silky soft bean curd braised in chef's brown sauce",
                        "large_portion_name": "large",
                        "name": "Bean Curd, Szechuan Style",
                        "price_large": 11.45,
                        "price_small": 9.45,
                        "short_name": "VG8",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "bean curd lightly fried then sauteed with green pepper, snow peas, and water chestnuts in brown sauce",
                        "large_portion_name": "large",
                        "name": "Bean Curd, Hunan Style",
                        "price_large": 11.45,
                        "price_small": 9.45,
                        "short_name": "VG9",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "Tofu lightly breaded and fried and sauteed with carrots, broccoli, snow peas, string beans, water chestnuts, and mushrooms in brown sauce",
                        "large_portion_name": "large",
                        "name": "Bean Curd with Mixed Vegetables",
                        "price_large": 11.45,
                        "price_small": 9.45,
                        "short_name": "VG10",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "bean curd sauteed with black mushrooms and regular mushrooms in brown sauce",
                        "large_portion_name": "large",
                        "name": "Bean Curd with Mushrooms",
                        "price_large": 11.45,
                        "price_small": 9.45,
                        "short_name": "VG11",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "Tofu lightly breaded and fried and sauteed with orange peel in sweet brown sauce",
                        "large_portion_name": "large",
                        "name": "Orange Bean Curd",
                        "price_large": 11.45,
                        "price_small": 9.45,
                        "short_name": "VG12",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "Tofu lightly breaded and fried and sauteed with water chestnuts, string beans, and mushrooms in garlic sauce",
                        "large_portion_name": "large",
                        "name": "Bean Curd with Eggplant in Garlic Sauce",
                        "price_large": 11.45,
                        "price_small": 9.45,
                        "short_name": "VG13",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "fresh bean sprouts sauteed with scallions",
                        "large_portion_name": "large",
                        "name": "Sauteed Bean Sprouts",
                        "price_large": 11.45,
                        "price_small": 9.45,
                        "short_name": "VG14",
                        "small_portion_name": "pint"
                    }
                ]
            }
        }
        SignupController.validateMenuItems();
        expect(SignupController.displayErrorMessage4).toBeTruthy() 
    });

    it("should validate custom typed menu items ", function () {
        SignupController.menuItemNumber = "D122"
        SignupController.allMenuItems = {
            "A": {
                "category": {
                    "id": 82,
                    "name": "Soup",
                    "short_name": "A",
                    "special_instructions": ""
                },
                "menu_items": [
                    {
                        "description": "chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions",
                        "large_portion_name": "quart",
                        "name": "Won Ton Soup with Chicken",
                        "price_large": 5,
                        "price_small": 2.55,
                        "short_name": "A1",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "chicken broth with egg drop",
                        "large_portion_name": "quart",
                        "name": "Egg Drop Soup",
                        "price_large": 4.5,
                        "price_small": 2.25,
                        "short_name": "A2",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "clear chicken broth with creamy corn and egg drop with white meat chicken pieces",
                        "large_portion_name": "quart",
                        "name": "Chicken Corn Soup",
                        "price_large": 5.5,
                        "price_small": 2.75,
                        "short_name": "A3",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "tofu, chicken, mushroom, bamboo shoot, and egg",
                        "large_portion_name": "quart",
                        "name": "Hot and Sour Soup",
                        "price_large": 5,
                        "price_small": 2.55,
                        "short_name": "A4",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "chicken soup with egg drop and won tons",
                        "large_portion_name": "quart",
                        "name": "Egg Drop with Won Ton Soup",
                        "price_large": 6,
                        "price_small": 3,
                        "short_name": "A5",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "clear broth and lo mein noodles or white rice, chicken pieces",
                        "large_portion_name": "quart",
                        "name": "Chicken Noodle (or Rice) Soup",
                        "price_large": 5,
                        "price_small": 2.55,
                        "short_name": "A6",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "clear chicken broth with mixed vegetables (carrots, cabbage, baby corn, mushroom, snow peas)",
                        "large_portion_name": "quart",
                        "name": "Garden Vegetable Soup",
                        "price_large": 5,
                        "price_small": 2.55,
                        "short_name": "A7",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "clear chicken broth with mixed vegetables (carrots, cabbage, baby corn, mushroom, snow peas) with tofu pieces",
                        "large_portion_name": "quart",
                        "name": "Garden Vegetable Soup with Tofu",
                        "price_large": 6,
                        "price_small": 3,
                        "short_name": "A8",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "clear chicken broth with mixed vegetables (carrots, cabbage, baby corn, mushroom, snow peas) and chicken pieces",
                        "large_portion_name": "quart",
                        "name": "Chicken with Garden Vegetable Soup",
                        "price_large": 6.4,
                        "price_small": 3.25,
                        "short_name": "A9",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "clear chicken broth with carrots, mushrooms, snow peas, and broccoli, and a few pieces of Hong Kong style won tons",
                        "large_portion_name": "quart",
                        "name": "Hong Kong Style Won Ton Soup",
                        "price_large": 8.5,
                        "price_small": 4.25,
                        "short_name": "A10",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "clear chicken broth with vegetables, veal, chicken, and beef and won tons",
                        "name": "Young Chow Won Ton Soup (for 2)",
                        "price_large": 11.95,
                        "short_name": "A11"
                    }
                ]
            },
            "B": {
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
            },
            "C": {
                "category": {
                    "id": 85,
                    "name": "Chicken",
                    "short_name": "C",
                    "special_instructions": ""
                },
                "menu_items": [
                    {
                        "description": "chunks of chicken, breaded and deep-fried with sauce containing orange peels; white meat by request: for pint $1 extra, for large $2 extra",
                        "large_portion_name": "large",
                        "name": "Orange Chicken",
                        "price_large": 14.95,
                        "price_small": 10.95,
                        "short_name": "C1",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "chunks of chicken, breaded and deep-fried with sauce and scallions; white meat by request: for pint $1 extra, for large $2 extra",
                        "large_portion_name": "large",
                        "name": "General Tso's Chicken",
                        "price_large": 14.95,
                        "price_small": 10.95,
                        "short_name": "C2",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "white meat chicken sauteed with string beans and soy sauce",
                        "large_portion_name": "large",
                        "name": "White Meat Chicken with String Bean",
                        "price_large": 14.95,
                        "price_small": 10.95,
                        "short_name": "C3",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "white meat chicken, string beans, waterchestnuts, mushrooms, and eggplant, in garlic sauce",
                        "large_portion_name": "large",
                        "name": "White Meat Chicken with Eggplant In Garlic Sauce",
                        "price_large": 14.95,
                        "price_small": 10.95,
                        "short_name": "C4",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "diced chicken with waterchestnuts, green peppers, and celery, and cashewnuts; white meat by request: for pint $1 extra, for large $2 extra",
                        "large_portion_name": "large",
                        "name": "Chicken Cashewnuts",
                        "price_large": 14.95,
                        "price_small": 10.95,
                        "short_name": "C5",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "white meat chicken in a clear white sauce sauteed with mixed vegetables",
                        "large_portion_name": "large",
                        "name": "White Meat Chicken with Fresh Vegetables",
                        "price_large": 14.95,
                        "price_small": 10.95,
                        "short_name": "C6",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "chunks of chicken, breaded and deep-fried with a sesame seed sauce",
                        "large_portion_name": "large",
                        "name": "Sesame Chicken",
                        "price_large": 14.95,
                        "price_small": 10.95,
                        "short_name": "C7",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "white meat chicken sauteed with broccoli, mushrooms, and baby corn in Hunan sauce",
                        "large_portion_name": "large",
                        "name": "Hunan Chicken",
                        "price_large": 14.95,
                        "price_small": 10.95,
                        "short_name": "C8",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "white meat chicken sauteed with carrots, celery, and bean sprouts in Szechuan sauce",
                        "large_portion_name": "large",
                        "name": "Szechuan Chicken",
                        "price_large": 14.95,
                        "price_small": 10.95,
                        "short_name": "C9",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "diced chicken sauteed with peanuts, and celery in delicious kung pao sauce; white meat by request: for pint $1 extra, for large $2 extra",
                        "large_portion_name": "large",
                        "name": "Kung Pao Chicken",
                        "price_large": 14.95,
                        "price_small": 10.95,
                        "short_name": "C10",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "chicken sauteed with string beans, mushrooms, and waterchestnuts in garlic sauce",
                        "large_portion_name": "large",
                        "name": "White Meat Chicken with Garlic Sauce",
                        "price_large": 14.95,
                        "price_small": 10.95,
                        "short_name": "C11",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "white meat chicken lightly breaded and fried until crip, then sauteed with celery and carrots in a special chef's sauce",
                        "large_portion_name": "large",
                        "name": "Dry Shredded Chicken",
                        "price_large": 16.95,
                        "price_small": 11.95,
                        "short_name": "C12",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "white meat chicken sauteed with shredded cabbage, mushrooms and eggs, then wrapped with pancake and delicious plum sauce",
                        "large_portion_name": "large",
                        "name": "Moo Shu Chicken",
                        "price_large": 14.95,
                        "price_small": 10.95,
                        "short_name": "C13",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "white meat chicken sauteed with broccoli, snow peas, mushrooms, and waterchestnuts in a white sauce",
                        "large_portion_name": "large",
                        "name": "Moo Goo Gau Pan",
                        "price_large": 14.95,
                        "price_small": 10.95,
                        "short_name": "C14",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "white meat chicken, breaded and fried with some green pepper, onion, and pineapples",
                        "large_portion_name": "large",
                        "name": "Sweet and Sour Chicken",
                        "price_large": 14.95,
                        "price_small": 10.95,
                        "short_name": "C15",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "white meat chicken sauteed with broccoli in brown sauce",
                        "large_portion_name": "large",
                        "name": "Chicken with Broccoli",
                        "price_large": 14.95,
                        "price_small": 10.95,
                        "short_name": "C16",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "white meat chicken breaded and fried, served with lemon sauce on the side",
                        "large_portion_name": "large",
                        "name": "Lemon Chicken",
                        "price_large": 15.95,
                        "price_small": 11.95,
                        "short_name": "C17",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "diced chicken sauteed with mushrooms, waterchestnuts, celery, peas, carrots, peanuts, and cahsews in a chef's sauce; white meat by request: for pint $1 extra, for large $2 extra",
                        "large_portion_name": "large",
                        "name": "Eight Treasure Chicken",
                        "price_large": 14.95,
                        "price_small": 10.95,
                        "short_name": "C18",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "chunks of chicken breaded and fried, the sauteed with green peppers",
                        "large_portion_name": "large",
                        "name": "Salt & Pepper Chicken",
                        "price_large": 15.95,
                        "price_small": 11.95,
                        "short_name": "C19",
                        "small_portion_name": "pint"
                    }
                ]
            },
            "CM": {
                "category": {
                    "id": 95,
                    "name": "Chow Mein",
                    "short_name": "CM",
                    "special_instructions": ""
                },
                "menu_items": [
                    {
                        "description": "broccoli, snow peas, onions, bean sprouts, and celery sauteed with white sauce",
                        "large_portion_name": "large",
                        "name": "Vegetable Chow Mein",
                        "price_large": 11.45,
                        "price_small": 8.95,
                        "short_name": "CM1",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "white meat chicken sauteed with bean sprouts, onions, and celery in white sauce",
                        "large_portion_name": "large",
                        "name": "Chicken Chow Mein",
                        "price_large": 12.45,
                        "price_small": 9.95,
                        "short_name": "CM2",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "beef sauteed with bean sprouts, onions, and celery in brown sauce",
                        "large_portion_name": "large",
                        "name": "Beef Chow Mein",
                        "price_large": 12.45,
                        "price_small": 9.95,
                        "short_name": "CM3",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "veal sauteed with bean sprouts, onions, and celery in brown sauce",
                        "large_portion_name": "large",
                        "name": "Veal Chow Mein",
                        "price_large": 13.45,
                        "price_small": 10.95,
                        "short_name": "CM4",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "veal, beef, and chicken sauteed with bean sprouts, onions, and celery in brown sauce",
                        "large_portion_name": "large",
                        "name": "House Special Chow Mein",
                        "price_large": 14.45,
                        "price_small": 11.95,
                        "short_name": "CM5",
                        "small_portion_name": "pint"
                    }
                ]
            },
            "CU": {
                "category": {
                    "id": 90,
                    "name": "Curry",
                    "short_name": "CU",
                    "special_instructions": ""
                },
                "menu_items": [
                    {
                        "description": "white meat chicken sauteed with ionions, peas, carrots, and broccoli",
                        "large_portion_name": "large",
                        "name": "Curry Chicken",
                        "price_large": 14.95,
                        "price_small": 11.95,
                        "short_name": "CU21",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "beef sauteed with ionions, peas, carrots, and broccoli",
                        "large_portion_name": "large",
                        "name": "Curry Beef",
                        "price_large": 16.95,
                        "price_small": 12.95,
                        "short_name": "CU22",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "veal sauteed with ionions, peas, carrots, and broccoli",
                        "large_portion_name": "large",
                        "name": "Curry Veal",
                        "price_large": 17.95,
                        "price_small": 12.95,
                        "short_name": "CU23",
                        "small_portion_name": "pint"
                    }
                ]
            },
            "D": {
                "category": {
                    "id": 99,
                    "name": "Dinner Combo",
                    "short_name": "D",
                    "special_instructions": "Served with your choice of rice (Vegetable Fried RIce, Steamed Rice, Brown Rice), AND EITHER soup (Hot & Sour, Wonton, Vegetable, Egg Drop, Chicken Corn Soup) OR veggie egg roll."
                },
                "menu_items": [
                    {
                        "description": "chunks of chicken, breaded and deep-fried with sauce containing orange peels; white meat by request: for pint $1 extra, for large $2 extra",
                        "name": "Orange Chicken",
                        "price_large": 13.95,
                        "short_name": "D1"
                    },
                    {
                        "description": "chunks of chicken, breaded and deep-fried with sauce and scallions; white meat by request: for pint $1 extra, for large $2 extra",
                        "name": "General Tso's Chicken",
                        "price_large": 13.95,
                        "short_name": "D2"
                    },
                    {
                        "description": "chunks of chicken, breaded and deep-fried with a sesame seed sauce",
                        "name": "Sesame Chicken",
                        "price_large": 13.95,
                        "short_name": "D3"
                    },
                    {
                        "description": "diced chicken sauteed with peanuts, and celery in delicious kung pao sauce; white meat by request: for pint $1 extra, for large $2 extra",
                        "name": "Kung Pao Chicken",
                        "price_large": 13.95,
                        "short_name": "D4"
                    },
                    {
                        "description": "diced chicken with waterchestnuts, green peppers, and celery, and cashewnuts; white meat by request: for pint $1 extra, for large $2 extra",
                        "name": "Chicken Cashewnuts",
                        "price_large": 13.95,
                        "short_name": "D5"
                    },
                    {
                        "description": "white meat chicken in a clear white sauce",
                        "name": "Chicken with Vegetables",
                        "price_large": 13.95,
                        "short_name": "D6"
                    },
                    {
                        "description": "white meat chicken, breaded and fried with some green pepper, onion, and pineapples",
                        "name": "Sweet and Sour Chicken",
                        "price_large": 13.95,
                        "short_name": "D7"
                    },
                    {
                        "description": "sliced beef sauteed with broccoli in brown sauce",
                        "name": "Beef Broccoli",
                        "price_large": 13.95,
                        "short_name": "D8"
                    },
                    {
                        "description": "sliced beef sauteed in garlic sauce",
                        "name": "Beef with Garlic Sauce",
                        "price_large": 13.95,
                        "short_name": "D9"
                    },
                    {
                        "description": "sliced beef sauteed with mixed vegetables",
                        "name": "Beef with Fresh Vegetables",
                        "price_large": 13.95,
                        "short_name": "D10"
                    },
                    {
                        "description": "sliced veal sauteed with mixed vegetables",
                        "name": "Veal with Fresh Vegetables",
                        "price_large": 13.95,
                        "short_name": "D11"
                    },
                    {
                        "description": "sliced veal sauteed in garlic sauce",
                        "name": "Veal with Garlic Sauce",
                        "price_large": 13.95,
                        "short_name": "D12"
                    },
                    {
                        "description": "bean curd lightly fried then sauteed with green pepper, snow peas, and water chestnuts in brown sauce",
                        "name": "Hunan Bean Curd",
                        "price_large": 13.95,
                        "short_name": "D13"
                    },
                    {
                        "description": "Tofu lightly breaded and fried and sauteed with carrots, broccoli, snow peas, string beans, water chestnuts, and mushrooms in brown sauce",
                        "name": "Bean Curd with Fresh Vegetables",
                        "price_large": 13.95,
                        "short_name": "D14"
                    },
                    {
                        "description": "broccoli, carrots, baby corn, water chestnuts, mushrooms, and snow peas sauteed in brown sauce",
                        "name": "Mixed Vegetables",
                        "price_large": 13.95,
                        "short_name": "D15"
                    },
                    {
                        "description": "eggplant sauteed with water chestnuts and string beans in garlic sauce",
                        "name": "Eggplant with Garlic Sauce",
                        "price_large": 13.95,
                        "short_name": "D16"
                    },
                    {
                        "description": "onions, and bean sprouts sauteed with soft lo mein noodles",
                        "name": "Lo Mein",
                        "price_large": 13.95,
                        "short_name": "D17"
                    },
                    {
                        "description": "chow mein noodles sauteed with bean sprouts, onions, and celery in brown sauce",
                        "name": "Chow Mein",
                        "price_large": 13.95,
                        "short_name": "D18"
                    }
                ]
            },
            "DK": {
                "category": {
                    "id": 88,
                    "name": "Duck",
                    "short_name": "DK",
                    "special_instructions": ""
                },
                "menu_items": [
                    {
                        "description": "marinated duck roasted crisp and served with pancake and green onion with special sauce",
                        "large_portion_name": "whole",
                        "name": "Peking Duck",
                        "price_large": 52.95,
                        "price_small": 28.95,
                        "short_name": "DK1",
                        "small_portion_name": "half"
                    },
                    {
                        "description": "boneless duck meat, lightly breaded, deep fried to a crisp, topped with vegetables in chef's special sauce",
                        "name": "Crispy Duck",
                        "price_large": 30.95,
                        "short_name": "DK2"
                    },
                    {
                        "description": "sliced lean duck meat sauteed with mixed vegtables in brown sauce",
                        "name": "Duck with Vegetables",
                        "price_large": 30.95,
                        "short_name": "DK3"
                    }
                ]
            },
            "DS": {
                "category": {
                    "id": 98,
                    "name": "Desserts",
                    "short_name": "DS",
                    "special_instructions": ""
                },
                "menu_items": [
                    {
                        "description": "",
                        "large_portion_name": "slice",
                        "name": "Chocolate Truffle Cake",
                        "price_large": 4.25,
                        "short_name": "DS1"
                    },
                    {
                        "description": "",
                        "large_portion_name": "slice",
                        "name": "Cappuccino Apricot Cake",
                        "price_large": 4.25,
                        "short_name": "DS2"
                    }
                ]
            },
            "F": {
                "category": {
                    "id": 86,
                    "name": "Beef",
                    "short_name": "F",
                    "special_instructions": ""
                },
                "menu_items": [
                    {
                        "description": "sliced beef sauteed with broccoli in brown sauce",
                        "large_portion_name": "large",
                        "name": "Beef Broccoli",
                        "price_large": 15.45,
                        "price_small": 11.45,
                        "short_name": "F1",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "beef sauteed with broccoli, mushrooms, and carrots in spicy Hunan sauce",
                        "large_portion_name": "large",
                        "name": "Hunan Beef",
                        "price_large": 15.45,
                        "price_small": 11.45,
                        "short_name": "F2",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "beef sauteed with carrots and celery, in a spicy Szechuan sauce",
                        "large_portion_name": "large",
                        "name": "Szechuan Beef",
                        "price_large": 15.45,
                        "price_small": 11.45,
                        "short_name": "F3",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "sliced beef sauteed with mixed vegetables",
                        "large_portion_name": "large",
                        "name": "Beef with Mixed Vegetables",
                        "price_large": 15.45,
                        "price_small": 11.45,
                        "short_name": "F4",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "sliced beef sauteed in garlic sauce",
                        "large_portion_name": "large",
                        "name": "Beef with Garlic Sauce",
                        "price_large": 15.45,
                        "price_small": 11.45,
                        "short_name": "F5",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "sliced beef sauteed with eggplant in garlic sauce",
                        "large_portion_name": "large",
                        "name": "Beef with Eggplant in Garlic Sauce",
                        "price_large": 15.45,
                        "price_small": 11.45,
                        "short_name": "F6",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "sliced beef sauteed with snow peas in brown sauce",
                        "large_portion_name": "large",
                        "name": "Beef with Snow Peas",
                        "price_large": 15.45,
                        "price_small": 11.45,
                        "short_name": "F7",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "sliced beef sauteed with green peppers and onions in brown sauce",
                        "large_portion_name": "large",
                        "name": "Beef with Green Pepper",
                        "price_large": 15.45,
                        "price_small": 11.45,
                        "short_name": "F8",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "sliced beef sauteed with peanuts and celery in delicious Kung Pao sauce",
                        "large_portion_name": "large",
                        "name": "Kung Pao Beef",
                        "price_large": 15.45,
                        "price_small": 11.45,
                        "short_name": "F9",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "sliced beef sauteed with bamboo shoots, onions, and green onions in chef's sauce",
                        "large_portion_name": "large",
                        "name": "Mongolian Beef",
                        "price_large": 15.45,
                        "price_small": 11.45,
                        "short_name": "F10",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "sliced beef sauteed  with shredded cabbage, mushrooms and eggs, then wrapped with pancake and delicious plum sauce",
                        "large_portion_name": "large",
                        "name": "Moo Shu Beef",
                        "price_large": 15.45,
                        "price_small": 11.45,
                        "short_name": "F11",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "sliced beef sauteed with string beans and onions",
                        "large_portion_name": "large",
                        "name": "Beef with String Bean",
                        "price_large": 15.45,
                        "price_small": 11.45,
                        "short_name": "F12",
                        "small_portion_name": "pint"
                    }
                ]
            },
            "FR": {
                "category": {
                    "id": 94,
                    "name": "Fried Rice",
                    "short_name": "FR",
                    "special_instructions": ""
                },
                "menu_items": [
                    {
                        "description": "broccoli, snow peas, onions, and bean sprouts sauteed with rice",
                        "large_portion_name": "large",
                        "name": "Vegetable Fried Rice",
                        "price_large": 11.45,
                        "price_small": 8.95,
                        "short_name": "FR1",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "white meat chicken sauteed with onions and bean sprouts with rice",
                        "large_portion_name": "large",
                        "name": "Chicken Fried Rice",
                        "price_large": 12.45,
                        "price_small": 9.95,
                        "short_name": "FR2",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "sliced beef sauteed with onions and bean sprouts with rice",
                        "large_portion_name": "large",
                        "name": "Beef Fried Rice",
                        "price_large": 12.45,
                        "price_small": 9.95,
                        "short_name": "FR3",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "sliced veal sauteed with onions and bean sprouts with rice",
                        "large_portion_name": "large",
                        "name": "Veal Fried Rice",
                        "price_large": 13.45,
                        "price_small": 10.95,
                        "short_name": "FR4",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "veal, beef, and chicken sauteed with onions and bean sprouts with rice",
                        "large_portion_name": "large",
                        "name": "House Fried Rice",
                        "price_large": 14.45,
                        "price_small": 11.95,
                        "short_name": "FR5",
                        "small_portion_name": "pint"
                    }
                ]
            },
            "FY": {
                "category": {
                    "id": 96,
                    "name": "Egg Foo Young",
                    "short_name": "FY",
                    "special_instructions": ""
                },
                "menu_items": [
                    {
                        "description": "shredded cabbage, onions, bean sprouts, celery, snow peas, and carrots in egg",
                        "name": "Vegetable Egg Foo Young",
                        "price_large": 11.45,
                        "short_name": "FY1"
                    },
                    {
                        "description": "white meat chicken, shredded cabbage, onions, bean sprouts, celery, snow peas, and carrots in egg",
                        "name": "Chicken Egg Foo Young",
                        "price_large": 13.45,
                        "short_name": "FY2"
                    },
                    {
                        "description": "beef, shredded cabbage, onions, bean sprouts, celery, snow peas, and carrots in egg",
                        "name": "Beef Egg Foo Young",
                        "price_large": 13.45,
                        "short_name": "FY3"
                    },
                    {
                        "description": "veal, shredded cabbage, onions, bean sprouts, celery, snow peas, and carrots in egg",
                        "name": "Veal Egg Foo Young",
                        "price_large": 14.45,
                        "short_name": "FY4"
                    },
                    {
                        "description": "veal, beef, and chicken, shredded cabbage, onions, bean sprouts, celery, snow peas, and carrots in egg",
                        "name": "House Egg Foo Young",
                        "price_large": 15.45,
                        "short_name": "FY5"
                    }
                ]
            },
            "L": {
                "category": {
                    "id": 81,
                    "name": "Lunch",
                    "short_name": "L",
                    "special_instructions": "Sunday-Friday 11:15am-3:00pm. Served with your choice of rice (Vegetable Fried RIce, Steamed Rice, Brown Rice), AND EITHER soup (Hot & Sour, Wonton, Vegetable, Egg Drop, Chicken Corn Soup) OR veggie egg roll. $1.00 extra to have both soup and egg roll."
                },
                "menu_items": [
                    {
                        "description": "chunks of chicken, breaded and deep-fried with sauce containing orange peels; white meat by request: for pint $1 extra, for large $2 extra",
                        "name": "Orange Chicken",
                        "price_large": 9.75,
                        "short_name": "L1"
                    },
                    {
                        "description": "chunks of chicken, breaded and deep-fried with sauce and scallions; white meat by request: for pint $1 extra, for large $2 extra",
                        "name": "General Tso's Chicken",
                        "price_large": 9.75,
                        "short_name": "L2"
                    },
                    {
                        "description": "diced chicken with waterchestnuts, green peppers, and celery, and cashewnuts; white meat by request: for pint $1 extra, for large $2 extra",
                        "name": "Chicken Cashewnuts",
                        "price_large": 9.75,
                        "short_name": "L3"
                    },
                    {
                        "description": "beef sauteed with carrots and celery, in a spicy Szechuan sauce",
                        "name": "Kung Pao Chicken",
                        "price_large": 9.75,
                        "short_name": "L4"
                    },
                    {
                        "description": "white meat chicken sauteed with string beans and soy sauce",
                        "name": "Chicken String Bean",
                        "price_large": 9.75,
                        "short_name": "L5"
                    },
                    {
                        "description": "white meat chicken in a clear white sauce sauteed with mixed vegetables",
                        "name": "Chicken Vegetable",
                        "price_large": 9.75,
                        "short_name": "L6"
                    },
                    {
                        "description": "chicken sauteed with string beans, mushrooms, and waterchestnuts in garlic sauce",
                        "name": "Chicken Garlic Sauce",
                        "price_large": 9.75,
                        "short_name": "L7"
                    },
                    {
                        "description": "white meat chicken, string beans, waterchestnuts, mushrooms, and eggplant, in garlic sauce",
                        "name": "Chicken Eggplant with Garlic Sauce",
                        "price_large": 9.75,
                        "short_name": "L8"
                    },
                    {
                        "description": "white meat chicken, breaded and fried with some green pepper, onion, and pineapples",
                        "name": "Sweet and Sour Chicken",
                        "price_large": 9.75,
                        "short_name": "L9"
                    },
                    {
                        "description": "white meat chicken sauteed with broccoli in brown sauce",
                        "name": "Chicken Broccoli",
                        "price_large": 9.75,
                        "short_name": "L10"
                    },
                    {
                        "description": "white meat chicken sauteed with broccoli, mushrooms, and baby corn in Hunan sauce",
                        "name": "Hunan Chicken",
                        "price_large": 9.75,
                        "short_name": "L11"
                    },
                    {
                        "description": "white meat chicken sauteed with carrots, celery, and bean sprouts in Szechuan sauce",
                        "name": "Szechuan Chicken",
                        "price_large": 9.75,
                        "short_name": "L12"
                    },
                    {
                        "description": "beef sauteed with broccoli, mushrooms, and carrots in spicy Hunan sauce",
                        "name": "Hunan Beef",
                        "price_large": 9.75,
                        "short_name": "L13"
                    },
                    {
                        "description": "sliced beef sauteed with broccoli in brown sauce",
                        "name": "Beef with Broccoli",
                        "price_large": 9.75,
                        "short_name": "L14"
                    },
                    {
                        "description": "sliced beef sauteed in garlic sauce",
                        "name": "Beef with Garlic Sauce",
                        "price_large": 9.75,
                        "short_name": "L15"
                    },
                    {
                        "description": "sliced beef sauteed with string beans and onions",
                        "name": "Beef String Bean",
                        "price_large": 9.75,
                        "short_name": "L16"
                    },
                    {
                        "description": "sliced beef sauteed with green peppers and onions in brown sauce",
                        "name": "Beef with Green Pepper",
                        "price_large": 9.75,
                        "short_name": "L17"
                    },
                    {
                        "description": "sliced veal sauteed with carrots, broccoli, snow peas, string beans, water chestnuts, and mushrooms in brown sauce",
                        "name": "Veal with Mixed Vegetables",
                        "price_large": 9.75,
                        "short_name": "L18"
                    },
                    {
                        "description": "bean curd lightly fried then sauteed with green pepper, snow peas, and water chestnuts in brown sauce",
                        "name": "Hunan Bean Curd",
                        "price_large": 9.75,
                        "short_name": "L19"
                    },
                    {
                        "description": "Tofu lightly breaded and fried and sauteed with carrots, broccoli, snow peas, string beans, water chestnuts, and mushrooms in brown sauce",
                        "name": "Bean Curd with Vegetables",
                        "price_large": 9.75,
                        "short_name": "L20"
                    },
                    {
                        "description": "broccoli, carrots, baby corn, water chestnuts, mushrooms, and snow peas sauteed in brown sauce",
                        "name": "Wok's Mixed Vegetables",
                        "price_large": 9.75,
                        "short_name": "L21"
                    },
                    {
                        "description": "onions and string beans sauteed with chef's sauce",
                        "name": "Szechuan String Bean",
                        "price_large": 9.75,
                        "short_name": "L22"
                    },
                    {
                        "description": "eggplant sauteed with water chestnuts and string beans in garlic sauce",
                        "name": "Eggplant with Garlic Sauce",
                        "price_large": 9.75,
                        "short_name": "L23"
                    },
                    {
                        "description": "white meat chicken sauteed with onions and bean sprouts",
                        "name": "Chicken Mei Fan",
                        "price_large": 9.75,
                        "short_name": "L24"
                    },
                    {
                        "description": "white meat chicken OR beef OR vegetables, sauteed with bean sprouts, onions, and celery in white sauce",
                        "name": "Chow Mein",
                        "price_large": 9.75,
                        "short_name": "L26"
                    },
                    {
                        "description": "white meat chicken OR beef OR vegetables, sauteed with onions, and bean sprouts and soft lo mein noodles",
                        "name": "Lo Mein",
                        "price_large": 9.75,
                        "short_name": "L27"
                    },
                    {
                        "description": "chunks of chicken, breaded and deep-fried with a sesame seed sauce",
                        "name": "Sesame Chicken",
                        "price_large": 9.75,
                        "short_name": "L28"
                    }
                ]
            },
            "NF": {
                "category": {
                    "id": 92,
                    "name": "Mei Fan (Very Fine Noodles)",
                    "short_name": "NF",
                    "special_instructions": ""
                },
                "menu_items": [
                    {
                        "description": "broccoli, snow peas, onions, and bean sprouts sauteed with rice noodles",
                        "name": "Vegetable Mei Fan",
                        "price_large": 12.95,
                        "short_name": "NF10"
                    },
                    {
                        "description": "white meat chicken sauteed with onions and bean sprouts",
                        "name": "Chicken Mei Fan",
                        "price_large": 14.95,
                        "short_name": "NF11"
                    },
                    {
                        "description": "beef sauteed with onions and bean sprouts",
                        "name": "Beef Mei Fan",
                        "price_large": 15.95,
                        "short_name": "NF12"
                    },
                    {
                        "description": "white meat chicken, beef, and veal sauteed with onions and bean sprouts",
                        "name": "House Special Mei Fan",
                        "price_large": 17.95,
                        "short_name": "NF13"
                    }
                ]
            },
            "NL": {
                "category": {
                    "id": 91,
                    "name": "Noodles (Lo Mein)",
                    "short_name": "NL",
                    "special_instructions": ""
                },
                "menu_items": [
                    {
                        "description": "broccoli, carrots, onions, snow peas, and bean sprouts sauteed with soft lo mein noodles",
                        "large_portion_name": "large",
                        "name": "Vegetable Lo Mein",
                        "price_large": 10.95,
                        "price_small": 8.95,
                        "short_name": "NL1",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "white meat chicken, onions, and bean sprouts sauteed with soft lo mein noodles",
                        "large_portion_name": "large",
                        "name": "Chicken Lo Mein",
                        "price_large": 11.95,
                        "price_small": 9.95,
                        "short_name": "NL2",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "beef, onions, and bean sprouts sauteed with soft lo mein noodles",
                        "large_portion_name": "large",
                        "name": "Beef Lo Mein",
                        "price_large": 11.95,
                        "price_small": 9.95,
                        "short_name": "NL3",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "veal, onions, and bean sprouts sauteed with soft lo mein noodles",
                        "large_portion_name": "large",
                        "name": "Veal Lo Mein",
                        "price_large": 12.95,
                        "price_small": 10.95,
                        "short_name": "NL4",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "white meat chicken, beef, veal, onions, and bean sprouts sauteed with soft lo mein noodles",
                        "large_portion_name": "large",
                        "name": "House Special Lo Mein",
                        "price_large": 13.95,
                        "price_small": 11.95,
                        "short_name": "NL5",
                        "small_portion_name": "pint"
                    }
                ]
            },
            "PF": {
                "category": {
                    "id": 93,
                    "name": "Pan Fried Noodles",
                    "short_name": "PF",
                    "special_instructions": ""
                },
                "menu_items": [
                    {
                        "description": "broccoli, snow peas, mushrooms, water chestnuts, and carrots sauteed with brown sauce on a bed of crispy crunchy noodles",
                        "name": "Pan Fried Noodles with Vegetables",
                        "price_large": 12.45,
                        "short_name": "PF1"
                    },
                    {
                        "description": "white meat chicken sauteed with broccoli, snow peas, mushrooms, water chestnuts, and carrots with brown sauce on a bed of crispy crunchy noodles",
                        "name": "Pan Fried Noodles with Chicken",
                        "price_large": 16.45,
                        "short_name": "PF2"
                    },
                    {
                        "description": "sliced beef sauteed with broccoli, snow peas, mushrooms, water chestnuts, and carrots with brown sauce on a bed of crispy crunchy noodles",
                        "name": "Pan Fried Noodles with Beef",
                        "price_large": 16.45,
                        "short_name": "PF3"
                    },
                    {
                        "description": "sliced veal sauteed with broccoli, snow peas, mushrooms, water chestnuts, and carrots with brown sauce on a bed of crispy crunchy noodles",
                        "name": "Pan Fried Noodles with Veal",
                        "price_large": 17.45,
                        "short_name": "PF4"
                    },
                    {
                        "description": "veal, beef, and chicken sauteed with broccoli, snow peas, mushrooms, water chestnuts, and carrots with brown sauce on a bed of crispy crunchy noodles",
                        "name": "House Special Pan Fried Noodles",
                        "price_large": 18.45,
                        "short_name": "PF5"
                    }
                ]
            },
            "SO": {
                "category": {
                    "id": 97,
                    "name": "Side Orders",
                    "short_name": "SO",
                    "special_instructions": ""
                },
                "menu_items": [
                    {
                        "description": "",
                        "name": "Chicken Nuggets with French Fries",
                        "price_large": 7.25,
                        "short_name": "SO1"
                    },
                    {
                        "description": "",
                        "name": "French Fries",
                        "price_large": 4.25,
                        "short_name": "SO2"
                    },
                    {
                        "description": "",
                        "large_portion_name": "large",
                        "name": "Brown Rice",
                        "price_large": 4,
                        "price_small": 2.5,
                        "short_name": "SO3",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "",
                        "large_portion_name": "large",
                        "name": "Extra White Rice",
                        "price_large": 4,
                        "price_small": 2.5,
                        "short_name": "SO4",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "",
                        "large_portion_name": "large",
                        "name": "Extra Fried Rice",
                        "price_large": 4,
                        "price_small": 2.5,
                        "short_name": "SO5",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "",
                        "name": "Fortune Cookies (12)",
                        "price_large": 2.5,
                        "short_name": "SO6"
                    },
                    {
                        "description": "",
                        "name": "Fountain Soda Large",
                        "price_large": 2,
                        "short_name": "SO7"
                    }
                ]
            },
            "SP": {
                "category": {
                    "id": 84,
                    "name": "Chef's Recommendations",
                    "short_name": "SP",
                    "special_instructions": ""
                },
                "menu_items": [
                    {
                        "description": "with choice of string bean, string bean chicken, string bean beef, beef onions, moo shu vegetable",
                        "name": "Chinese Scallion Pancake Wrap",
                        "price_large": 18.95,
                        "short_name": "SP1"
                    },
                    {
                        "description": "marinated grilled chicken breast with vegetables and lo mein on the side",
                        "name": "Teriyaki Chicken",
                        "price_large": 18.95,
                        "short_name": "SP2"
                    },
                    {
                        "description": "assorted vegetables breaded and fried, served with lo mein on the side",
                        "name": "Vegetable Tempura",
                        "price_large": 15.95,
                        "short_name": "SP3"
                    },
                    {
                        "description": "white meat chicken and beef, breaded and deep-fried with special house sauce; served with lo mein and vegetables",
                        "name": "Orange Chicken and Beef Combo",
                        "price_large": 19.95,
                        "short_name": "SP4"
                    },
                    {
                        "description": "beef, veal, and chicken sauteed with mixed vegetables in chef's special sauce; lo mein served on the side",
                        "name": "Happy Family",
                        "price_large": 19.95,
                        "short_name": "SP5"
                    },
                    {
                        "description": "marinated and grilled veal served with vegetables and lo mein on the side",
                        "name": "Grilled Veal",
                        "price_large": 19.95,
                        "short_name": "SP6"
                    },
                    {
                        "description": "a few cuts of beef, breaded, deep-fried with sauce containing orange peels; served with lo mein on the side",
                        "name": "Orange Beef",
                        "price_large": 19.95,
                        "short_name": "SP7"
                    },
                    {
                        "description": "a few cuts of beef, breaded, deep-fried with sauce containing sesame seeds; served with lo mein on the side",
                        "name": "Sesame Beef",
                        "price_large": 19.95,
                        "short_name": "SP8"
                    }
                ]
            },
            "SR": {
                "category": {
                    "id": 100,
                    "name": "Sushi Menu",
                    "short_name": "SR",
                    "special_instructions": "Contains raw ingredients. Consuming raw or undercooked meat, poultry, or seafood may increase your risk of food borne illness."
                },
                "menu_items": [
                    {
                        "description": "",
                        "name": "Cucumber Sushi Roll",
                        "price_large": 4.5,
                        "short_name": "SR1"
                    },
                    {
                        "description": "",
                        "name": "Asparagus Sushi Roll",
                        "price_large": 5,
                        "short_name": "SR2"
                    },
                    {
                        "description": "",
                        "name": "Avocado Sushi Roll",
                        "price_large": 5,
                        "short_name": "SR3"
                    },
                    {
                        "description": "",
                        "name": "Garden Vegetable Sushi Roll",
                        "price_large": 6.5,
                        "short_name": "SR4"
                    },
                    {
                        "description": "",
                        "name": "California Sushi Roll",
                        "price_large": 6,
                        "short_name": "SR5"
                    },
                    {
                        "description": "",
                        "name": "Salmon Sushi Roll",
                        "price_large": 5.5,
                        "short_name": "SR6"
                    },
                    {
                        "description": "",
                        "name": "Tuna Sushi Roll",
                        "price_large": 5.5,
                        "short_name": "SR7"
                    },
                    {
                        "description": "",
                        "name": "Yellowtail Sushi Roll",
                        "price_large": 6,
                        "short_name": "SR8"
                    },
                    {
                        "description": "",
                        "name": "Salmon Skin & Cucumber Sushi Roll",
                        "price_large": 5.5,
                        "short_name": "SR9"
                    },
                    {
                        "description": "",
                        "name": "Tuna and Avocado Sushi Roll",
                        "price_large": 6.5,
                        "short_name": "SR10"
                    },
                    {
                        "description": "",
                        "name": "Salmon and Avocado Sushi Roll",
                        "price_large": 6.5,
                        "short_name": "SR11"
                    },
                    {
                        "description": "",
                        "name": "Yellowtail and Avocado Sushi Roll",
                        "price_large": 6.5,
                        "short_name": "SR12"
                    },
                    {
                        "description": "",
                        "name": "Spicy Tuna Sushi Roll",
                        "price_large": 6.5,
                        "short_name": "SR13"
                    },
                    {
                        "description": "",
                        "name": "Spicy Salmon Sushi Roll",
                        "price_large": 6.5,
                        "short_name": "SR14"
                    },
                    {
                        "description": "",
                        "name": "Fried Sweet Potato Sushi Roll",
                        "price_large": 6.5,
                        "short_name": "SR15"
                    },
                    {
                        "description": "",
                        "name": "Philadelphia Sushi Roll",
                        "price_large": 6.5,
                        "short_name": "SR16"
                    },
                    {
                        "description": "",
                        "name": "Salmon Tempura Cooked Sushi Roll",
                        "price_large": 9.5,
                        "short_name": "SR17"
                    },
                    {
                        "description": "",
                        "name": "Teriyaki Tuna Cooked Sushi Roll",
                        "price_large": 8,
                        "short_name": "SR18"
                    },
                    {
                        "description": "",
                        "name": "Teriyaki Salmon Cooked Sushi Roll",
                        "price_large": 8,
                        "short_name": "SR19"
                    },
                    {
                        "description": "",
                        "name": "Tiriyaki Combo Cooked Sushi Roll",
                        "price_large": 9.5,
                        "short_name": "SR20"
                    },
                    {
                        "description": "",
                        "name": "Tuna and Cucumber Temaki Roll",
                        "price_large": 7,
                        "short_name": "SR21"
                    },
                    {
                        "description": "",
                        "name": "Salmon Skin and Cucumber Temaki Roll",
                        "price_large": 7,
                        "short_name": "SR22"
                    },
                    {
                        "description": "",
                        "name": "Yellowtail Avocado Temaki Roll",
                        "price_large": 7,
                        "short_name": "SR23"
                    },
                    {
                        "description": "",
                        "name": "Salmon Tartar Temaki Roll",
                        "price_large": 8,
                        "short_name": "SR24"
                    },
                    {
                        "description": "",
                        "name": "Salmon Sashimi",
                        "price_large": 2.5,
                        "short_name": "SR25"
                    },
                    {
                        "description": "",
                        "name": "Tuna Sashimi",
                        "price_large": 2.5,
                        "short_name": "SR26"
                    },
                    {
                        "description": "",
                        "name": "Yellowtail Sashimi",
                        "price_large": 2.75,
                        "short_name": "SR27"
                    },
                    {
                        "description": "",
                        "name": "Imitation Crab Stick Sashimi",
                        "price_large": 2.5,
                        "short_name": "SR28"
                    },
                    {
                        "description": "",
                        "name": "Garden Salad",
                        "price_large": 5.95,
                        "short_name": "SR29"
                    },
                    {
                        "description": "",
                        "name": "Double Happiness",
                        "price_large": 13,
                        "short_name": "SR30"
                    },
                    {
                        "description": "",
                        "name": "Las Vegas Roll",
                        "price_large": 14,
                        "short_name": "SR31"
                    },
                    {
                        "description": "",
                        "name": "Love Roll",
                        "price_large": 13,
                        "short_name": "SR32"
                    },
                    {
                        "description": "",
                        "name": "Volcano Roll",
                        "price_large": 13,
                        "short_name": "SR33"
                    },
                    {
                        "description": "",
                        "name": "Alaska Roll",
                        "price_large": 12,
                        "short_name": "SR34"
                    },
                    {
                        "description": "",
                        "name": "Rainbow Roll",
                        "price_large": 12,
                        "short_name": "SR35"
                    },
                    {
                        "description": "",
                        "name": "Orioles",
                        "price_large": 12,
                        "short_name": "SR36"
                    },
                    {
                        "description": "",
                        "name": "Dragon Roll",
                        "price_large": 12,
                        "short_name": "SR37"
                    },
                    {
                        "description": "",
                        "name": "Blossom Roll",
                        "price_large": 13,
                        "short_name": "SR38"
                    },
                    {
                        "description": "",
                        "name": "Golden Dragon Roll",
                        "price_large": 13,
                        "short_name": "SR39"
                    },
                    {
                        "description": "",
                        "name": "Festival Roll",
                        "price_large": 15,
                        "short_name": "SR40"
                    },
                    {
                        "description": "",
                        "name": "Sashimi Combo",
                        "price_large": 18,
                        "short_name": "SR41"
                    },
                    {
                        "description": "",
                        "name": "Sushi Sashimi Combo",
                        "price_large": 27.95,
                        "short_name": "SR42"
                    },
                    {
                        "description": "",
                        "name": "Sashimi Maki Combo",
                        "price_large": 15,
                        "short_name": "SR43"
                    }
                ]
            },
            "V": {
                "category": {
                    "id": 87,
                    "name": "Veal",
                    "short_name": "V",
                    "special_instructions": ""
                },
                "menu_items": [
                    {
                        "description": "veal sauteed with broccoli, mushrooms, and carrots in spicy Hunan sauce",
                        "large_portion_name": "large",
                        "name": "Hunan Veal",
                        "price_large": 18.45,
                        "price_small": 12.45,
                        "short_name": "V1",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "sliced veal sauteed with carrots, broccoli, snow peas, string beans, water chestnuts, and mushrooms in brown sauce",
                        "large_portion_name": "large",
                        "name": "Veal with Mixed Vegetables",
                        "price_large": 18.45,
                        "price_small": 12.45,
                        "short_name": "V2",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "sliced veal sauteed with mushrooms, string beans, and water chestnuts in garlic sauce",
                        "large_portion_name": "large",
                        "name": "Veal with Garlic Sauce",
                        "price_large": 18.45,
                        "price_small": 12.45,
                        "short_name": "V3",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "sliced veal sauteed with peanuts and celery in delicious Kung Pao sauce",
                        "large_portion_name": "large",
                        "name": "Kung Pao Veal",
                        "price_large": 18.45,
                        "price_small": 12.45,
                        "short_name": "V4",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "veal sauteed with onions, green onions, and bamboo shoots in chef's sauce",
                        "large_portion_name": "large",
                        "name": "Mongolian Veal",
                        "price_large": 18.45,
                        "price_small": 12.45,
                        "short_name": "V5",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "sliced veal sauteed with onions and green peppers in brown sauce",
                        "large_portion_name": "large",
                        "name": "Veal with Green Peppers",
                        "price_large": 18.45,
                        "price_small": 12.45,
                        "short_name": "V6",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "veal sauteed with carrots, celery, and bean sprouts in Szechuan sauce",
                        "large_portion_name": "large",
                        "name": "Szechuan Veal",
                        "price_large": 18.45,
                        "price_small": 12.45,
                        "short_name": "V7",
                        "small_portion_name": "pint"
                    }
                ]
            },
            "VG": {
                "category": {
                    "id": 89,
                    "name": "Vegetables",
                    "short_name": "VG",
                    "special_instructions": ""
                },
                "menu_items": [
                    {
                        "description": "broccoli, carrots, baby corn, water chestnuts, mushrooms, and snow peas sauteed in brown sauce",
                        "large_portion_name": "large",
                        "name": "Wok's Mixed Vegetables",
                        "price_large": 11.45,
                        "price_small": 9.45,
                        "short_name": "VG1",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "onions and string beans sauteed with chef's sauce",
                        "large_portion_name": "large",
                        "name": "Sauteed String Beans, Szechuan",
                        "price_large": 11.45,
                        "price_small": 9.45,
                        "short_name": "VG2",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "eggplant sauteed with water chestnuts and string beans in garlic sauce",
                        "large_portion_name": "large",
                        "name": "Eggplant in Garlic Sauce",
                        "price_large": 11.45,
                        "price_small": 9.45,
                        "short_name": "VG3",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "breaded and fried eggplants sauteed in sweet garlic sauce and sesame seeds",
                        "large_portion_name": "large",
                        "name": "Crispy Eggplant in Garlic Sauce",
                        "price_large": 11.45,
                        "price_small": 9.45,
                        "short_name": "VG4",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "broccoli sauteed with fresh mushrooms in white sauce",
                        "large_portion_name": "large",
                        "name": "Broccoli Sauteed wtih Mushrooms in Light Sauce",
                        "price_large": 11.45,
                        "price_small": 9.45,
                        "short_name": "VG5",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "shredded cabbage sauteed with mushrooms, carrots, and scrambled eggs",
                        "large_portion_name": "large",
                        "name": "Moo Shu Vegetables",
                        "price_large": 11.45,
                        "price_small": 9.45,
                        "short_name": "VG6",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "snow peas and water chestnuts sauteed in brown sauce",
                        "large_portion_name": "large",
                        "name": "Sauteed Snow Peas & Waterchestnuts in Brown Sauce",
                        "price_large": 11.45,
                        "price_small": 9.45,
                        "short_name": "VG7",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "silky soft bean curd braised in chef's brown sauce",
                        "large_portion_name": "large",
                        "name": "Bean Curd, Szechuan Style",
                        "price_large": 11.45,
                        "price_small": 9.45,
                        "short_name": "VG8",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "bean curd lightly fried then sauteed with green pepper, snow peas, and water chestnuts in brown sauce",
                        "large_portion_name": "large",
                        "name": "Bean Curd, Hunan Style",
                        "price_large": 11.45,
                        "price_small": 9.45,
                        "short_name": "VG9",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "Tofu lightly breaded and fried and sauteed with carrots, broccoli, snow peas, string beans, water chestnuts, and mushrooms in brown sauce",
                        "large_portion_name": "large",
                        "name": "Bean Curd with Mixed Vegetables",
                        "price_large": 11.45,
                        "price_small": 9.45,
                        "short_name": "VG10",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "bean curd sauteed with black mushrooms and regular mushrooms in brown sauce",
                        "large_portion_name": "large",
                        "name": "Bean Curd with Mushrooms",
                        "price_large": 11.45,
                        "price_small": 9.45,
                        "short_name": "VG11",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "Tofu lightly breaded and fried and sauteed with orange peel in sweet brown sauce",
                        "large_portion_name": "large",
                        "name": "Orange Bean Curd",
                        "price_large": 11.45,
                        "price_small": 9.45,
                        "short_name": "VG12",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "Tofu lightly breaded and fried and sauteed with water chestnuts, string beans, and mushrooms in garlic sauce",
                        "large_portion_name": "large",
                        "name": "Bean Curd with Eggplant in Garlic Sauce",
                        "price_large": 11.45,
                        "price_small": 9.45,
                        "short_name": "VG13",
                        "small_portion_name": "pint"
                    },
                    {
                        "description": "fresh bean sprouts sauteed with scallions",
                        "large_portion_name": "large",
                        "name": "Sauteed Bean Sprouts",
                        "price_large": 11.45,
                        "price_small": 9.45,
                        "short_name": "VG14",
                        "small_portion_name": "pint"
                    }
                ]
            }
        }
        SignupController.validateMenuItems();
        expect(SignupController.displayErrorMessage4).toBeFalsy() 
    });


    it(" should NOT validate and save data validate", function () {
        SignupController.saveData();
        SignupController.user.phoneNumber = "412a"
        SignupController.user.email = "Tes"
        expect(SignupController.displayErrorMessage1).toBeFalsy();
        expect(SignupController.displayErrorMessage2).toBeFalsy();
        expect(SignupController.displayErrorMessage3).toBeFalsy();
    });
    it("validate and save data validate", function () {
        SignupController.user.firstName = "Test"
        SignupController.user.lastName = "Tmest"
        SignupController.user.phoneNumber = "412"
        SignupController.user.email = "Test@gmail.com"
        SignupController.selectedCategory = "Test Cat";
        SignupController.selectedMenuItem = "Test Menu Item";
        SignupController.saveData();
        expect(SignupController.displayErrorMessage1).toBeTruthy();
        expect(SignupController.displayErrorMessage2).toBeTruthy();
        expect(SignupController.displayErrorMessage3).toBeTruthy();
    });

});