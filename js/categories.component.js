(function(){
	
	angular.module("MenuApp")
	.component("categories", {
		templateUrl: "templates/categories.template.html",
		controller: CategoriesController,
		controllerAs: "ctrl",
		bindings: {
			categories: "<"
		}
	});
	
	function CategoriesController(){};
	
})();