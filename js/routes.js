(function(){
	
	var mod = angular.module("MenuApp");
	mod.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise("/");
		
		$stateProvider
		
		//Home state
		.state("home", {
			url: "/",
			templateUrl: "templates/home.template.html"
		})
		
		//Categories state
		.state("categories", {
			url: "/categories",
			templateUrl: "templates/categories.html",
			controller: "CategoriesController as ctrl",
			resolve: {
				categories: ['MenuDataService', function (MenuDataService) {
					return MenuDataService.getAllCategories();
				}]
			}
		})
		
		//Items from category 
		.state("items", {
			url: "/items/{categoryId}",
			templateUrl: "templates/items.template.html",
			controller: "ItemsController as ctrl",
			resolve: {
				items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
					return MenuDataService.getItemsForCategory($stateParams.categoryId);
				}]
			}
		});
	});
	
})();