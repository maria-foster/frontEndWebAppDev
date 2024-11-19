angular.module('MenuApp')
.component('items', {
    templateURL: 'items.html',
    controller: ItemsController,
    binding : {
        items: '<',
        // onRemove: '&'
    }
});


function ItemsController () {
 var $ctrl = this;

 $ctrl.itemsInCategory = function () {}
//  for items in $ctrl.items

}