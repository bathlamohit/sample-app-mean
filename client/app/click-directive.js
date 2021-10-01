app.directive("clicker", function () { //Note the added dependency
    return {
        link: function (scope) {
            scope.postData = function () {
                const result = scope.$parent.input1 * scope.$parent.input2;
                scope.$parent.postData(result);
                // promise(MenuService.addItem(obj)).then(itemFetchedFromWebService => scope.$parent.items.push(itemFetchedFromWebService.data)).catch((err) => console.log(err));
            };
        },
        scope: {
            items: "=",
            input1: "=",
            input2: "=",
            disableBtn: "="
            //showMessage: "&"
        },
        template: "<button ng-click='postData()' ng-disabled='$parent.disableBtn'>Calculate</button>",
    };
});