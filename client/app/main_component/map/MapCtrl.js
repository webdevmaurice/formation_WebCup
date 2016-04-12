/**
 * Created by Hashim on 4/12/2016.
 */
angular.module('teleportation')
    .controller('MapCtrl',['$http',function MapCtrl ($http) {
        console.log("MapCtrl");
        var vm = this;
        vm.pageClass = "map";
        vm.onClick = function (points, evt) {
            console.log(points, evt);
        };

        /*vm.labels = ["Maurice", "Reunion", "Seychelles", "Madagascar", "Rodrigues", "Mayotte"];
         vm.data =  [30.3, 19.1, 4.0, 3.8, 3.2, 39.6];*/
    }]);

