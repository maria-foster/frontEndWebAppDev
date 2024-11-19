component('categories', {
    templateURL: 'categories.html',
    controller: CategoriesController,
    binding : {
        categories: '<',
        // onRemove: '&'
    }
});


function CategoriesController () {
 var $ctrl = this;

 $ctrl.categories = function () {}
//  for items in $ctrl.items

}