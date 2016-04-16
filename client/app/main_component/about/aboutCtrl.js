/**
 * Created by MICHAEL on 4/16/16.
 */
angular.module('teleportation')
    .controller('aboutCtrl',['$http',function aboutCtrl ($http) {
        console.log("aboutCtrl");
        var vm = this;
        vm.pageClass = "about";


    }]);