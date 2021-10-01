
app.service('MenuService', function ($http) {
    var config = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;',
        }
    }
    this.addItem = function (data) {
        return $http({
            method: 'POST',
            url: 'http://localhost:8003/data/postData',
            data: data
        });
    }

    this.getData = function (item) {
        return $http.get('http://localhost:8003/data/getData', config
        );
    }
});