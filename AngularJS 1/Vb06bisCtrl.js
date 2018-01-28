app.controller('personCtrl', function ($scope) {
    $scope.knopTekst = "Verbergen";
    $scope.voornaam = "Joske",
        $scope.familienaam = "Vermeulen"
    $scope.myVar = false;
    $scope.toggle = function () {
        $scope.myVar = !$scope.myVar;
        $scope.knopTekst = $scope.myVar ? "Tonen" : "Verbergen"
    }
});