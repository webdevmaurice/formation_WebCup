angular.module('teleportation')
    .controller('MyAccountCtrl',['$http','$timeout',function MyAccountCtrl ($http, $timeout) {
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
        vm.user = {
            fname: 'Hashim',
            lname: 'Mukoon',
            email: 'ipsum@lorem.com',
            gender: 'Male',
            address: '1600 Amphitheatre Pkwy',
            country: 'Mauritius'
        };


        vm.paramSelectedGender = null;
        vm.paramGenders = null;
        vm.paramLoadGenders = function() {
            // Use timeout to simulate a 650ms request.
            return $timeout(function() {
                vm.paramGenders =  vm.paramSelectedGender  || [
                    { id: 1, name: 'Male' },
                    { id: 2, name: 'Female' },
                    { id: 3, name: 'Others' }
                ];
            }, 650);
        };


        vm.paramSelectedCountry = null;
        vm.paramCountries = null;
        vm.paramLoadCountries = function() {
            // Use timeout to simulate a 650ms request.
            return $timeout(function() {
                vm.paramCountries =  vm.paramSelectedCountry  || [
                        { id: 1, name: 'Mauritius' },
                        { id: 2, name: 'Rodrigues' },
                        { id: 3, name: 'Reunion' },
                        { id: 4, name: 'Seychelles' },
                        { id: 5, name: 'Madagascar' },
                        { id: 6, name: 'Commores' }
                    ];
            }, 650);
        };



       /* vm.arrayOfStupidLines = [
            "01/04/2016 at 07:56 Travel from: Madagascar to: Reunion with purpose: Business",
            "01/04/2016 at 12:37 Travel from: Reunion to: Seychelles with purpose: Lunch",
            "01/04/2016 at 13:21 Travel from: Seychelles to: Reunion with purpose: Business",
        ];*/

        vm.arrayOfStupidLines = [
            "<pre>01/04/2016 at 07:56 Travel from: Madagascar to: Reunion with purpose: Business </pre>" +
            "<pre>01/04/2016 at 07:56 Travel from: Madagascar to: Reunion with purpose: Business</pre>" +
            "<pre>01/04/2016 at 12:37 Travel from: Reunion to: Seychelles with purpose: Lunch</pre>" +
            "<pre>01/04/2016 at 13:21 Travel from: Seychelles to: Reunion with purpose: Business</pre>" +
            "<pre>01/04/2016 at 17:05 Travel from: Reunion to: Madagascar with purpose: Home</pre>" +
            "<pre>02/04/2016 at 07:50 Travel from: Madagascar to: Reunion with purpose: Business</pre>" +
            "<pre>02/04/2016 at 12:32 Travel from: Reunion to: Rodrigues with purpose: Lunch</pre>" +
            "<pre>02/04/2016 at 13:28 Travel from: Rodrigues to: Reunion with purpose: Business</pre>" +
            "<pre>02/04/2016 at 17:05 Travel from: Reunion to: Madagascar with purpose: Home</pre>" +
            "<pre>03/04/2016 at 07:53 Travel from: Madagascar to: Reunion with purpose: Business</pre>" +
            "<pre>03/04/2016 at 12:30 Travel from: Reunion to: Rodrigues with purpose: Lunch</pre>" +
            "<pre>03/04/2016 at 13:22 Travel from: Rodrigues to: Reunion with purpose: Business</pre>" +
            "<pre>03/04/2016 at 17:05 Travel from: Reunion to: Mauritius with purpose: Shopping</pre>" +
            "<pre>03/04/2016 at 19:33 Travel from: Mauritius to: Madagascar with purpose: Home</pre>" +
            "<pre>02/04/2016 at 07:50 Travel from: Madagascar to: Reunion with purpose: Business</pre>" +
            "<pre>02/04/2016 at 12:32 Travel from: Reunion to: Rodrigues with purpose: Lunch</pre>" +
            "<pre>02/04/2016 at 13:28 Travel from: Rodrigues to: Reunion with purpose: Business</pre>" +
            "<pre>02/04/2016 at 17:05 Travel from: Reunion to: Madagascar with purpose: Home</pre>" +
            "<pre>02/04/2016 at 07:50 Travel from: Madagascar to: Reunion with purpose: Business</pre>" +
            "<pre>02/04/2016 at 12:32 Travel from: Reunion to: Rodrigues with purpose: Lunch</pre>" +
            "<pre>02/04/2016 at 13:28 Travel from: Rodrigues to: Reunion with purpose: Business</pre>" +
            "<pre>02/04/2016 at 17:05 Travel from: Reunion to: Madagascar with purpose: Home</pre>"
        ];
        
        vm.startType = false;
    }]);
    
