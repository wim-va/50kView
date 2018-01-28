app.controller('RoutesController', function($scope) {
	$scope.piraten = piraten;
});

app.controller('PiraatDetailController', function($scope, $routeParams) {
	$scope.piraten = piraten;
	$scope.id = $routeParams.id;
	$scope.gezochtePiraat = function(id) {
		var i = 0;
		while (i < piraten.length) {
			if (piraten[i].id == id) {
				return piraten[i];
			}
			i++;
		}
		return null;
	}
});

