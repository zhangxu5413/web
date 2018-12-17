var router = angular.module('appRoute', []);

router.config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('hello', {
        template: "<h1>HELLO!</h1>"
    });

}]);