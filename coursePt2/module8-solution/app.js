var app = angular.module("NarrowItDownApp, []")
.Service('MenuSearchService', function () {
    this.foundItems = ["OneItem", "TwoItems"]
    this.getMatchedMenuItems = function( searchTerm){
        // https://coursera-jhu-default.rtdb.firebaseio.com/menu_items.json
        return $http(...).then(function(results) {
            this.foundItems = ["OneItem", "TwoItems", "ThreeItems"]
            return foundItems;
        })
    }
    this.removeItem = function(itemToRemove){
        console.log("1: " + this.foundItems )
        index = this.foundItems.indexOf(itemToRemove)
        this.foundItems.splice(index, 1)
        console.log("2: " + this.foundItems)
    }
})

app.controller("NarrowItDownController", function($scope, MenuSearchService){
    $scope.MenuSearchService = MenuSearchService;
    $scope.foundItems =  MenuSearchService.foudnItems
})