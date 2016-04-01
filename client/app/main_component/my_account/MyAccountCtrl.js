angular.module('teleportation')
    .controller('MyAccountCtrl',['$http',function MyAccountCtrl ($http) {
        console.log("MyAccountCtrl");
        var vm = this;
        vm.pageClass = "my-account";
        vm.onClick = function (points, evt) {
            console.log(points, evt);
        };
       $http.get('server/webservice/statistique.php')
           .then(function(config){
               console.log(config.data);
               vm.labels = config.data.labels;
               vm.data = config.data.data;
           })

        /*vm.labels = ["Maurice", "Reunion", "Seychelles", "Madagascar", "Rodrigues", "Mayotte"];
        vm.data =  [30.3, 19.1, 4.0, 3.8, 3.2, 39.6];*/
    }]);
    
