(function () {
    'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.factory('NarrowItDownFactory', NarrowItDownFactory)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective () {
    return {
        template: '<div><ul><li ng-repeat="item in NarrowItDownController.found"> {{item.name}} <button ng-click="NarrowItDownController.removeItem(item)" class="btn btn-primary">Do not want this one!</button></li></ul></div>',
        scope: {
            found: '<',
            onRemove: '&'
        },
        controller: NarrowItDownController,
        controllerAs: 'list',
        bindToController: true
    };
}

function NarrowItDownController() {
    var list = this;

    list.unfilteredFound = []
    list.found = []
}



NarrowItDownController.$inject = ['NarrowItDownFactory', '$http']
function NarrowItDownController(NarrowItDownFactory, $http) {
    var list = this;

    var foundList = NarrowItDownFactory();

    list.found = foundList.getFound()

    list.removeItem = function(item){
        foundList.removeItem(item)
    }

    list.getItems = function() {
        console.log("TEST")
        foundList.getMatchedMenuItems() 
        foundList.filterMatchedItems()
        console.log(foundList.getFound())
        console.log(this.found)
        
    }

}

function NarrowItDownService(maxItems){
    var service = this; 

    var items = [] 
    var found = [] 
    var textIn = "" 

    service.getMatchedMenuItems = function () {
        console.log("GET")
        var url = 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json'
        var response = $http({method: "GET", url: url})
        items = response.data
       
    }
    service.filterMatchedItems = function () {
        console.log("filtering")
        found = []
        for (let dat in unfilteredFound) {
            for (let menuItem in unfilteredFound[dat]['menu_items']) {
                if (unfilteredFound[dat]['menu_items'][menuItem]['description'].includes(textIn)) {
                    found.push(unfilteredFound[dat]['menu_items'][menuItem])
                }



            }
        }
        console.log(found)
    }

    service.removeItem = function (itemToRemove) {
        console.log("1: " + found)
        index = found.indexOf(itemToRemove)
        found.splice(index, 1)
        console.log("2: " + found)
    }

    service.getItems = function () {
        return items 
    }
    service.getFound = function() {
        return found 
    }
    service.getTextIn = function() {
        return textIn 
    }
}

function NarrowItDownFactory() {
    var factory = function (maxItems) {
        return new NarrowItDownService(maxItems)
    }
    return factory 
}
})();









