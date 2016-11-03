angular.module('Portfolio')
    .controller('mainCtrl', mainController);

function mainController() {
    var main = this;
    console.log('Controller working baby baby');
    main.greeting = "It's Jerome :)";
}
