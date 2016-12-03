(function(){
	
	angular.module("MenuApp")
	.component("categories", {
		templateUrl: "templates/categories.template.html",
		controller: function(){},
		controllerAs: "ctrl",
		bindings: {
			categories: "<"
		}
	});
	
})();