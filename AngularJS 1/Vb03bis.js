'use strict';
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.voornaam= "Joske";
    $scope.familienaam= "Vermeulen";
    $scope.naam = function() {
        return $scope.voornaam+ " " + $scope.familienaam;
    }
});
