var matrozen=[
              {naam:"Jan", functie:'kapitein'},
              {naam:'Piet', functie:'matroos'},
              {naam:'Joris', functie:'scheepskok'},
              {naam: 'Korneel', functie:'machinist'}
              ];
var app= angular.module("customDirectivesApp",[]);
app.directive("hello", function(){
	return {
		restrict: "E",
		template:"<h3>Hello world!</h3>"
	};
});
app.directive("helloAgain", function(){
	return{
		restrict: "E",
		templateUrl: "hello-again.html"
	};
});
app.directive("matrozen", function(){
	return{
		restrict:"E",
		templateUrl: "matrozen.html",
		controller: function(){
			this.matrozen = matrozen;
		},
		controllerAs: 'matrozenCtrl'
	};
});

var INTEGER_REGEXP = /^-?\d+$/;
app.directive('integer', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.integer = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          // consider empty models to be valid
          return true;
        }

        if (INTEGER_REGEXP.test(viewValue)) {
          // it is valid
          return true;
        }

        // it is invalid
        return false;
      };
    }
  };
});