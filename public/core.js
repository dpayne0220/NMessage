// created by Daniel
var NMessage = angular.module('NMessage', []);

function mainController($scope, $http) {
    $scope.formData = {};

//get messages
    $http.get('/api/message')
        .success(function(data) {
            $scope.messages = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

//create message
    $scope.createMsg = function() {
        alert(JSON.stringify($scope.formData));
        $http.post('/api/message', $scope.formData)
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
