(function () {
    'use strict';
    angular.module('MenuApp')
        .service('MenuDataService', MenuDataService);
    MenuDataService.$inject = ['$http', '$q']
    function MenuDataService(maxItems, $http, $q) {
        var service = this;


        service.getAllCategories = function () {
            console.log("Getting all categories ..... ")
            var response = $http({
                method: "GET",
                url: 'https://coursera-jhu-default-rtdb.firebaseio.com/categories.json'
            })
            return response;
            
            
        };

        service.getItemsForCategory = function (shortName) {
            console.log("Getting all items for category  ..... ")
            var response = $http({
                method: "GET",
                url: 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/' + categoryShortName + '.json'
            })
            return response;
        };
    }

})();

