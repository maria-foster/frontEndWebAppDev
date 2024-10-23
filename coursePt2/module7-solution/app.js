var app = angular.module("ShoppingListCheckOff", [])
    .service('ShoppingListCheckOffService', function () {
        this.toBuy = [ {name: "cookies", quantity: 10, pricePerItem: 1 }, {name: "pies", quantity: 10, pricePerItem: 1 }, {name: "doritos", quantity: 10, pricePerItem: 1 }, {name: "chickens", quantity: 10, pricePerItem: 1 }]
        this.bought = []
        // Service logic here
        this.buy = function (itemBought) {
            this.bought.push(itemBought);
            index = this.toBuy.indexOf(itemBought)
            this.toBuy.splice(index, 1)
        }
    })

app.filter('angularCustomCurrency', function() {
        return function(item) {
            totalCost = item.quantity * item.pricePerItem
            return "$$$" + String(totalCost)
        }
     })
app.controller('ToBuyController', function ($scope, ShoppingListCheckOffService) { 
    $scope.ShoppingListCheckOffService= ShoppingListCheckOffService;
    $scope.toBuy = ShoppingListCheckOffService.toBuy

})
app.controller('AlreadyBoughtController', function ($scope, ShoppingListCheckOffService) {
    $scope.ShoppingListCheckOffService= ShoppingListCheckOffService;
    $scope.bought = ShoppingListCheckOffService.bought

 })

