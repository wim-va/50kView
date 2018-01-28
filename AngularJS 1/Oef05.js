var app = angular.module("appOef05", []);
app.controller("hogerLagerCtrl", function ($scope) {
    $scope.hogerLager = new HogerLager();
    $scope.gok = "";
    $scope.tip = "";
    $scope.aantalBeurten = function(){
        return $scope.hogerLager.aantalBeurten;
    }
    $scope.verwerkGok = function () {
        $scope.tip = $scope.hogerLager.verwerkGok($scope.gok);
    }
    $scope.geraden = function () {
        return $scope.hogerLager.geraden;
    }
    $scope.reset = function () {
       $scope.hogerLager.reset();
       $scope.tip = "";
    }
});