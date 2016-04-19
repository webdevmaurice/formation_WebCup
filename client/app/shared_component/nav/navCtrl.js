angular.module('teleportation')
.controller('navCtrl',['$scope', function navCtrl($scope){
    var nav = this;
    nav.menuIsOpen = false;
    nav.menuIcon = 'menu';
    nav.toggleMenu = function() {
        nav.menuIcon = {menu:'close', close: 'menu'}[nav.menuIcon];
    };
}]);