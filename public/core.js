// created by Daniel
var NMessage = angular.module('NMessage', []);

function mainController($scope, $http) {
    $scope.formData = {};

//get messages
    $scope.getMsgs = function() {
    $http.get('/api/message')
        .success(function(data) {
            $scope.messages = data;
            
            $scope.deets = { "timestamp": "22","sender": "User" };

            console.log(data);
            setTimeout(function() {$scope.getMsgs() }, 500); //longPolling in process
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
}
//create message
    $scope.createMsg = function() {
        //($scope.timestamp);
        for (var attrname in $scope.deets) { $scope.formData[attrname] = $scope.deets[attrname]; }
        $http.post('/api/message', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; 
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });

    };

//delete message
    $scope.deleteMsg = function(id) {
        $http.delete('/api/message/' + id)
            .success(function(data) {
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}
