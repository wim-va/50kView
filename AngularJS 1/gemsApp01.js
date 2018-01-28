(function() {
	var gems = [ new Gemstone('Azurite', 2.95, false, true), 
				 new Gemstone('Cobalite', 3.5, false, false),
				 new Gemstone('Imperialite', 4.95, true, true),
				 new Gemstone('Nuage', 2.75, true, false)];
	var app = angular.module('gemStore', []);
	app.controller('StoreController', function() {
		this.products = gems;
	});

})();