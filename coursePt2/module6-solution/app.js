var app = angular.module("LunchCheck", []);

app.controller('lunchCtrl', function($scope) {
    $scope.lunchMenu = "";
    $scope.retVal = ""
    $scope.fontColor = "",
    $scope.dict = {
        0: "Please enter data first",
        1: "Enjoy!",
        2: "Too Much"
    }
    $scope.checkIfTooMuch = function() {
        split = $scope.lunchMenu.split(",")
        $scope.retVal = split.includes(" ") || split.includes("") ? $scope.dict[0] : $scope.lunchMenu == "" ? $scope.dict[0] : split.length > 3 ?  $scope.dict[2] : $scope.dict[1]
        $scope.lunchMenu = ""
        $scope.fontColor = $scope.retVal == "Enjoy!" || $scope.retVal == "Too Much" ? "Green" : "Red"
    }
  });



