
app.controller('myCtrl', ['$scope', 'MenuService', function ($scope, MenuService) {
    $scope.input1;
    $scope.input2;
    $scope.disableBtn = true;
    $scope.checkInput = function (event) {
        event.target.className = "text-plain";
        if (event.target.value >= 0 && angular.isNumber(parseInt(event.target.value))) {
            event.target.className = "text-plain";
        } else {
            event.target.className = "text-bold";
        }
        if (!isNaN($scope.input1) && !isNaN($scope.input2) && parseInt($scope.input1) > 0 && parseInt($scope.input2) > 0) {
            $scope.disableBtn = false;
        } else {
            $scope.disableBtn = true;
        }
    };

    $scope.postData = function (result) {
        if (isNaN(parseInt($scope.input1)) && isNaN(parseInt($scope.input1)) && isNaN(parseInt($scope.input1))) {
        } else {
            const obj = { "input1": parseInt($scope.input1), "input2": parseInt($scope.input2), "result": result }
            MenuService.addItem(obj).then(itemFetchedFromWebService => $scope.items.push(itemFetchedFromWebService.data)).catch(err => console.log(err));
            $scope.input1 = '';
            $scope.input2 = '';
            $scope.disableBtn = true;
        }

    };

    $scope.loadData = function () {
        MenuService.getData().then(function (data) {
            $scope.items = data.data;
            $scope.input1 = $scope.items[$scope.items.length - 1].input1;
            $scope.input2 = $scope.items[$scope.items.length - 1].input2;
        }, function (error) { console.log(error); });
    };

    $scope.loadData();
}]);
