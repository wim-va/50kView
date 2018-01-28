app.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/piraten', {
		templateUrl : 'partials/alle_piraten.html',
		controller : 'RoutesController',
		controllerAs : 'routesCtrl'
	}).when('/piratennamen', {
		templateUrl : 'partials/alle_piratennamen.html',
		controller : 'RoutesController',
		controllerAs : 'routesCtrl'
	}).when('/piraten/:id', {
		templateUrl : 'partials/piraatdetails.html',
		controller : 'PiraatDetailController'
	}).otherwise({
		redirectTo : '/piraten'
	});
} ]);