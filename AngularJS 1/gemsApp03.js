(function () {
	var gems = [new Gemstone('Azurite', 2.95, false, true, 1),
	new Gemstone('Cobalite', 3.5, false, false, 2),
	new Gemstone('Imperialite', 4.95, true, true, 3),
	new Gemstone('Nuage', 2.75, true, false, 1)];
	var app = angular.module('gemStore', []);
	app.directive('products', function () {
		return {
			restrict: 'E',
			templateUrl: 'products.html',
			controller: function () {
				this.products = gems;
			},
			controllerAs: 'store1'
		};
	});
	app.directive('addProduct', function () {
		return {
			restrict: 'E',
			templateUrl: 'add-product.html',
			controller: function () {
				this.products = gems;
				this.gem = new Gemstone();
				this.add = function () {
					gems.push(this.gem);
					alert(this.gem.name + " is toegevoegd");
					this.gem = new Gemstone();
				};
			},
			controllerAs: 'store'
		};
	});
})();