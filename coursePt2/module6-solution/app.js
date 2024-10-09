var app = angular.module("LunchCheck", []);

app.controller('lunchCtrl', function($scope) {
    $scope.lunchMenu = "";
    $scope.retVal = ""
    $scope.dict = {
        0: "Empty",
        1: "Enjoy!",
        2: "Too Much"
    }
    $scope.checkIfTooMuch = function() {
        $scope.retVal = $scope.lunchMenu == "" ? $scope.dict[0] : $scope.lunchMenu.split(",").length > 3 ?  $scope.dict[2] : $scope.dict[1]
        $scope.lunchMenu = ""
    }
  });



