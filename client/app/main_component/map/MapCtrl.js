/**
 * Created by Hashim on 4/12/2016.
 */
angular.module('teleportation')
    .controller('MapCtrl',['$http',function MapCtrl ($http) {
        console.log("MapCtrl");
        var vm = this;
        vm.pageClass = "map";
        vm.selectedMap = 'Comores';
        vm.avatarData = [{
            id: "add_location",
            title: 'comoros',
            value: 'Comores'
        },{
            id: "add_location",
            title: 'mauritius',
            value: 'Maurice'
        },{
            id: "add_location",
            title: 'reunion',
            value: 'Reunion'
        },{
            id: "add_location",
            title: 'madagascar',
            value: 'Madagascar'
        },{
            id: "add_location",
            title: 'seychelles',
            value: 'Seychelles'
        },{
            id: "add_location",
            title: 'mayotte',
            value: 'Mayotte'
        },{
            id: "add_location",
            title: 'rodrigues',
            value: 'Rodrigues'
        }];
        vm.radioData = [
            { label: '1', value: 1 },
            { label: '2', value: 2 },
            { label: '3', value: '3', isDisabled: true },
            { label: '4', value: '4' }
        ];
        /*vm.labels = ["Maurice", "Reunion", "Seychelles", "Madagascar", "Rodrigues", "Mayotte"];
         vm.data =  [30.3, 19.1, 4.0, 3.8, 3.2, 39.6];*/
    }]);

