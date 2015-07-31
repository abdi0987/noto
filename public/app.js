angular.module('app',['ngRoute','ngResource'])

.config(function($routeProvider){
    $routeProvider
        
        .when('/',{
            templateUrl:'views/main.html',
            controller:'MainController'
        })
        .otherwise({
            redirect:'/'
        })
})