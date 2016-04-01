angular.module('teleportation')
.controller('navCtrl',['$scope','$interval', function navCtrl($scope, $interval){
    var vm = this;
    var colors = ['white','lightgreen', 'pink', 'wheat', '#cc99ff', '#abcdef'];
    vm.menuIsOpen = false;
    vm.menuIcon = 'menu';
    vm.iconFill = colors[0];
    vm.toggleMenu = function() {
        vm.menuIcon = {menu:'close', close: 'menu'}[vm.menuIcon];
    }
    $interval(function() {
        vm.iconFill = colors[Math.floor(Math.random() * colors.length)];
    }, 1700);
}]);