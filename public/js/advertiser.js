var app = angular.module("Advertiser", []);

app.controller('AdvertiserController', function($scope, $http) {
    $scope.advs = [];
    $http.get('/advertisers').then(function succesCallback(response) {
        $scope.advs = response.data;
        console.log(response.data);
    }, function errorCallback(response) {
        console.log("Ops: could not get any data");
    });

    $scope.addadvertiser = function() {
        $http.post('/advertiser', {
            ad_addr : $scope.advertiserText,
            agg_addr : $scope.aggregatorText,
            updatetime : $scope.updatetimeText,
            rssi : $scope.rssiText
            console.log("where??");
        }).success(function(data, status, headers, config) {
            $scope.advertisers.push({
                ad_addr : $scope.advertiserText,
                agg_addr : $scope.aggregatorText,
                updatetime : $scope.updatetimeText,
                rssi : $scope.rssiText
            });
            $scope.advertiserText = '';
        }).error(function(data, status, headers, config) {
            console.log("Ops: " + data);
        });
    };

});
