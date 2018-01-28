app.controller('currencyCtrl', function ($scope, $http) {
    $scope.bedrag = 0;
    $http.get("http://api.fixer.io/latest")
        .then(function (response) {
            var rates = response.data.rates;
            $scope.munteenheden = Object.keys(rates);
            $scope.munteenheden.push("EUR");
            $scope.munteenheden.sort();
            $scope.bronMunt = "EUR";
            $scope.doelMunt = "EUR";
        }, function (response) {
            alert("er liep iets fout bij het opvragen van de munteenheden");
            $scope.munteenheden = [];
        });
    $scope.converteer = function () {
        $http.get("http://api.fixer.io/latest?base=" + $scope.bronMunt)
            .then(function (response) {
                var rates = response.data.rates;
                $scope.wisselkoers = rates[$scope.doelMunt] * $scope.bedrag;
            }, function (response) {
                alert("er liep iets fout bij het opvragen van de wisselkoers");
                $scope.wisselkoers = "";
            });
    }

});
