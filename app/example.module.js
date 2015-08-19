(function () {

    "use strict";

    var app = angular.module('example', []);

    app.config(function() {});

    app.controller ('HomeController', function($scope, UsersService) {


        $scope.oneUser = UsersService.find(1);

        $scope.hello = "Hello World";

        $scope.numbers = [12, 28, 43, 4];

        $scope.users = [
            {
                userName: "soccerChild10",
                password: "jello"
            },
            {
                userName: "spiderman8",
                password: "cat"
            },
            {
                userName: "crazyKid123",
                password: "dog"
            }
        ];
    });

    app.controller ('NewController', function($scope, UsersService) {

        $scope.people = UsersService.users;

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

    app.service('UsersService', function() {
        var people = [
            {
                userName: "Jill",
                email:"jill@gmail.com",
                id: 1
            },
            {
                userName: "Mark",
                email:"mark@yahoo.com",
                id: 2
            },
            {
                userName: "Debby",
                email:"debs@hotmail.com",
                id: 3
            }
        ];

        function find(id) {
            var foundUser;

            people.forEach(function(person) {
                if(person.id === id) {
                    foundUser = person;
                }
            });

            return foundUser;
        }

        return {
            users: people,
            find: find
        };
    });

}());




















