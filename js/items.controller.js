(function(){
	
	angular.module("MenuApp")
	.controller("ItemsController", ItemsController);	
	
	ItemsController.$inject = ["MenuDataService", "items"];
	function ItemsController(MenuDataService, items){
		this.items = items;
		console.log(items.data.menu_items);
	};
	
})();