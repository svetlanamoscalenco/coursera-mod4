(function(){
	
	angular.module("MenuApp")
	.component("items", {
		templateUrl: "templates/items.template.html",
		controller: ItemsController,
		controllerAs: "ctrl",
		bindings: {
			items: "<",
			categoryName: "<"
		}
	});
	
	function ItemsController(){};
	
})();