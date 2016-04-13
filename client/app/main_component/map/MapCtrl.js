/**
 * Created by Hashim on 4/12/2016.
 */
angular.module('teleportation')
    .controller('MapCtrl',['$http',function MapCtrl ($http) {
        console.log("MapCtrl");
        var vm = this;
        vm.pageClass = "map";
        vm.data = {
            group1 : 'Banana',
            group2 : '2',
            group3 : 'avatar-2'
        };
        vm.avatarData = [{
            id: "add_location",
            title: 'avatar 1',
            value: 'avatar-1'
        },{
            id: "add_location",
            title: 'avatar 2',
            value: 'avatar-2'
        },{
            id: "add_location",
            title: 'avatar 3',
            value: 'avatar-3'
        }];
        /*vm.labels = ["Maurice", "Reunion", "Seychelles", "Madagascar", "Rodrigues", "Mayotte"];
         vm.data =  [30.3, 19.1, 4.0, 3.8, 3.2, 39.6];*/
    }]);

