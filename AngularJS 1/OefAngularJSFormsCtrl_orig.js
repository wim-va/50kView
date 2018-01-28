app.controller("BroodjesController", function ($scope) {
    $scope.broodjes = [new Broodje("Kaas", 3.10),
    new Broodje("Ham", 2.80),
    new Broodje("Kaas en ham", 4.20),
    new Broodje("Pr\u00E9par\u00E9", 2.30),
    new Broodje("Kip curry", 3.0)];
    $scope.bestelling = new Bestelling();
    $scope.aantal = 1;
    $scope.submit = function () {
        $scope.bestelling.voegLijnToe(new BestelLijn( JSON.parse( $scope.gekozenBroodje), $scope.aantal));
        $scope.aantal = 1;
    }
    $scope.totaalprijs = function(){
        return $scope.bestelling.totaalprijs();
    }
})