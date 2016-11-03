angular.module('Portfolio', ['ngRoute'])
    .config(Router);

Router.$inject = ['$routeProvider'];

function Router($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "index.html"
        })
        .when("/about", {
            templateUrl: "about.html"
        })
        .when("/contact", {
            templateUrl: "contact.html"
        })
        .when("/projects", {
            templateUrl: "projects.html"
        });
}
