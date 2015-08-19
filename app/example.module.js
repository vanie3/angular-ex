(function () {

    "use strict";

    var app = angular.module('example', []);

    app.config(function() {});

    app.controller ('HomeController', function($scope) {
        $scope.hello = "Hello World";

        $scope.numbers = [12, 28, 43, 4];

        $scope.users = [
            {
                userName: "soccerChild10",
                password: "jello",
                age: 20
            },
            {
                userName: "spiderman8",
                password: "cat",
                age: 34
            },
            {
                userName: "crazyKid123",
                password: "dog",
                age: 2
            }
        ];
    });

    app.controller ('NewController', function($scope) {

        $scope.users = [
            {
                name: "Joel",
                age: 20
            },
            {
                name: "Daniel",
                age: 34
            },
            {
                name: "Abby",
                age: 2
            }
        ];
    });

}());