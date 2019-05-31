
var app = angular.module('scotchTodo', []);
app.controller('mainController', function($scope, $http) {
    console.log("1111111111111111111111")
  $scope.firstname = "Hello";
  $scope.lastname = "World";
  $scope.formData = {
    fname: $scope.firstname,
    lname: $scope.lastname
  };

// when landing on the page, get all todos and show them
  /*$http.get('/api/todos')
        .success(function(data) {
            $scope.todos = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
*/
     // when submitting the add form, send the text to the node API
    $scope.createTodo = function() {
        console.log("in function");
        console.log($scope.formData);
        $http.get('/api/todos')
            .success(function(data) {
                //$scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

});