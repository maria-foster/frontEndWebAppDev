// angular.factory("MenuDataService", function($http) {
//     return {
//         getAllCategories: function () {
//             var promise = $http.get('https://coursera-jhu-default-rtdb.firebaseio.com/categories.json)').then(function(response){
//                 return response.data
//             }, function(error) {

//             })
//             return promise;
//         },
//         getItemsForCategory: function (categoryShortName) {
//             var promise = $http.get('https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/' + categoryShortName + '.json').then(function(response){
//                 return response.data
//             }, function(error) {

//             })
//             return promise;
//         }
//     }
// })


MenuDataService.$inject = ['$http', 'ApiBasePath']
function MenuDataService(maxItems) {
    var service = this;

    service.getAllCategories = function () {
        var response = $http({
            method: "GET",
            url: 'https://coursera-jhu-default-rtdb.firebaseio.com/categories.json)'
        });
        return response
    };

    service.getItemsForCategory = function (shortName) {
        var response = $http({
            method: "GET",
            url: 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/' + categoryShortName + '.json'
        });
        return response
    };
}