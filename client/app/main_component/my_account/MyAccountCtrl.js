angular.module('teleportation')
    .controller('MyAccountCtrl',['$http','$timeout',function MyAccountCtrl ($http, $timeout) {
        console.log("MyAccountCtrl");
        var vm = this;
        vm.pageClass = "my-account";
        vm.onClick = function (points, evt) {
            console.log(points, evt);
        };
        /*$http.get('server/webservice/statistique.php')
           .then(function(config){
               console.log(config.data);

               vm.labels = config.data.labels;
               vm.data = config.data.data;
           })*/

        vm.paramSelectedUser = null;
        vm.paramUsers = null;
        vm.paramLoadUsers = function() {
            // Use timeout to simulate a 650ms request.
            return $timeout(function() {
                vm.paramUsers =  vm.paramSelectedUser  || [
                    { id: 1, name: 'Scooby Doo' },
                    { id: 2, name: 'Shaggy Rodgers' },
                    { id: 3, name: 'Fred Jones' },
                    { id: 4, name: 'Daphne Blake' },
                    { id: 5, name: 'Velma Dinkley' }
                ];
            }, 650);
        };

        vm.arrayOfStupidLines = [
            "01/04/2016 at 07:56 Travel from: Madagascar to: Reunion with purpose: Business",
            "01/04/2016 at 12:37 Travel from: Reunion to: Seychelles with purpose: Lunch",
            "01/04/2016 at 13:21 Travel from: Seychelles to: Reunion with purpose: Business",
        ];
        /*vm.labels = ["Maurice", "Reunion", "Seychelles", "Madagascar", "Rodrigues", "Mayotte"];
        vm.data =  [30.3, 19.1, 4.0, 3.8, 3.2, 39.6];*/
    }]);
    
