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
            email: 'hash.im@pharmagst.mu',
            gender: 'Homme',
            address: '1600 Amphitheatre Pkwy',
            country: 'Maurice',
            submissionDate : '01/02/1990'
        };


        vm.paramSelectedGender = null;
        vm.paramGenders = null;
        vm.paramLoadGenders = function() {
            // Use timeout to simulate a 650ms request.
            return $timeout(function() {
                vm.paramGenders =  vm.paramSelectedGender  || [
                    { id: 1, name: 'Homme' },
                    { id: 2, name: 'Femme' },
                    { id: 3, name: 'Autre' }
                ];
            }, 650);
        };


        vm.paramSelectedCountry = null;
        vm.paramCountries = null;
        vm.paramLoadCountries = function() {
            // Use timeout to simulate a 650ms request.
            return $timeout(function() {
                vm.paramCountries =  vm.paramSelectedCountry  || [
                        { id: 1, name: 'Maurice' },
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
            "<pre>01/04/2016 à 07:56 voyager depuis: Madagascar jusqu'à: Réunion avec objectif: Business </pre>" +
            "<pre>01/04/2016 à 07:56 voyager depuis: Madagascar jusqu'à: Réunion avec objectif: Business</pre>" +
            "<pre>01/04/2016 à 12:37 voyager depuis: Réunion jusqu'à: Seychelles avec objectif: Déjeuner</pre>" +
            "<pre>01/04/2016 à 13:21 voyager depuis: Seychelles jusqu'à: Réunion avec objectif: Business</pre>" +
            "<pre>01/04/2016 à 17:05 voyager depuis: Réunion jusqu'à: Madagascar avec objectif: Maison</pre>" +
            "<pre>02/04/2016 à 07:50 voyager depuis: Madagascar jusqu'à: Réunion avec objectif: Business</pre>" +
            "<pre>02/04/2016 à 12:32 voyager depuis: Réunion jusqu'à: Rodrigues avec objectif: Déjeuner</pre>" +
            "<pre>02/04/2016 à 13:28 voyager depuis: Rodrigues jusqu'à: Réunion avec objectif: Business</pre>" +
            "<pre>02/04/2016 à 17:05 voyager depuis: Réunion jusqu'à: Madagascar avec objectif: Maison</pre>" +
            "<pre>03/04/2016 à 07:53 voyager depuis: Madagascar jusqu'à: Réunion avec objectif: Business</pre>" +
            "<pre>03/04/2016 à 12:30 voyager depuis: Réunion jusqu'à: Rodrigues avec objectif: Déjeuner</pre>" +
            "<pre>03/04/2016 à 13:22 voyager depuis: Rodrigues jusqu'à: Réunion avec objectif: Business</pre>" +
            "<pre>03/04/2016 à 17:05 voyager depuis: Réunion jusqu'à: Mauritius avec objectif: Shopping</pre>" +
            "<pre>03/04/2016 à 19:33 voyager depuis: Mauritius jusqu'à: Madagascar avec objectif: Maison</pre>" +
            "<pre>02/04/2016 à 07:50 voyager depuis: Madagascar jusqu'à: Réunion avec objectif: Business</pre>" +
            "<pre>02/04/2016 à 12:32 voyager depuis: Réunion jusqu'à: Rodrigues avec objectif: Déjeuner</pre>" +
            "<pre>02/04/2016 à 13:28 voyager depuis: Rodrigues jusqu'à: Réunion avec objectif: Business</pre>" +
            "<pre>02/04/2016 à 17:05 voyager depuis: Réunion jusqu'à: Madagascar avec objectif: Maison</pre>" +
            "<pre>02/04/2016 à 07:50 voyager depuis: Madagascar jusqu'à: Réunion avec objectif: Business</pre>" +
            "<pre>02/04/2016 à 12:32 voyager depuis: Réunion jusqu'à: Rodrigues avec objectif: Déjeuner</pre>" +
            "<pre>02/04/2016 à 13:28 voyager depuis: Rodrigues jusqu'à: Réunion avec objectif: Business</pre>" +
            "<pre>02/04/2016 à 17:05 voyager depuis: Réunion jusqu'à: Madagascar avec objectif: Maison</pre>"
        ];
        
        vm.startType = false;
    }]);
    
