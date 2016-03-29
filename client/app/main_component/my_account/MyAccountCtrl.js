angular.module('teleportation')
    .controller('MyAccountCtrl',[function MyAccountCtrl () {
        console.log("MyAccountCtrl");
        var vm = this;
        vm.pageClass = "my-account";
        vm.labels = ["Maurice", "Reunion", "Seychelles", "Madagascar", "Rodrigues", "Mayotte"];
        vm.data =  [30.3, 19.1, 4.0, 3.8, 3.2, 39.6];
        vm.onClick = function (points, evt) {
            console.log(points, evt);
        };
    }]);
    
