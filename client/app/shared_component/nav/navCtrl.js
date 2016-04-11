angular.module('teleportation')
.controller('navCtrl',['$scope','$interval', function navCtrl($scope, $interval){
    var nav = this;
    var colors = ['white','lightgreen', 'pink', 'wheat', '#cc99ff', '#abcdef'];
    nav.menuIsOpen = false;
    nav.menuIcon = 'menu';
    nav.iconFill = colors[0];
    nav.toggleMenu = function() {
        nav.menuIcon = {menu:'close', close: 'menu'}[nav.menuIcon];
    };
    $interval(function() {
        nav.iconFill = colors[Math.floor(Math.random() * colors.length)];
    }, 1700);
}]);