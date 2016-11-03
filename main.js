angular.module('Portfolio', ['ngRoute'])
    .config(Router);

Router.$inject = ['$routeProvider'];

function Router($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "home.html"
        })
        .when("/about", {
            templateUrl: "views/about.html"
        })
        .when("/contact", {
            templateUrl: "views/contact.html"
        })
        .when("/projects", {
            templateUrl: "views/projects.html"
        })
        .when("/skills", {
            templateUrl: "views/skills.html"
        })
        .otherwise({
            redirectTo: "/"
        });

}
