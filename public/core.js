// created by Daniel
var NMessage = angular.module('NMessage', []);

function mainController($scope, $http) {
    $scope.formData = {};

//get messages
    $scope.getMsgs = function() {
    $http.get('/api/message')
        .success(function(data) {
            $scope.messages = data;
            
            $scope.deets = '{ "timestamp": "22","sender": "User" }';
            //data.timestamp;
            console.log(data);
            $scope.getMsgs(); //longPolling in process
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
}
//create message
    $scope.createMsg = function() {
        //($scope.timestamp);
        for (var attrname in $scope.formData) { $scope.deets[attrname] = $scope.formData[attrname]; }
        alert(JSON.stringify($scope.deets));
        $http.post('/api/message', $scope.deets)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                //$scope.messages = data;
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
                $scope.messages = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}
