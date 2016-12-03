(function(){
	
	angular.module("MenuApp")
	.controller("CategoriesController", CategoriesController);	
	
	CategoriesController.$inject = ["MenuDataService", "categories"];
	function CategoriesController(MenuDataService, categories){
		this.categories = categories;
	};
	
})();