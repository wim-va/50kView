	var app = angular.module('gemstore-directives', []);
	app.directive('products', function() {
		return {
			restrict : 'E',
			templateUrl : 'products.html',
			controller : function() {
				this.products = gems;
			},
			controllerAs : 'store1'
		};
	});
	app.directive('addProduct', function(){
		return{
			restrict: 'E',
			templateUrl:'add-product.html',
			controller:function() {
				this.products = gems;
				this.gem = new Gemstone();
				this.add = function() {
					gems.push(this.gem);
					alert(this.gem.name + " is toegevoegd");
					this.gem = new Gemstone();
				};
			},
			controllerAs : 'store'
		};
	});
