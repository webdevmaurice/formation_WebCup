angular.module('teleportation')
    .config(['$routeProvider', function ($routeProvider) {
        var baseUrl = 'client/app/main_component/';
        $routeProvider
            .when('/page_acceuil',{
                templateUrl: baseUrl + 'page_acceuil/page_acceuil.html',
                controller: 'PageAcceuilCtrl',
                controllerAs: 'vm'
            })
            .when('/my_account',{
                templateUrl: baseUrl + 'my_account/my_account.html',
                controller: 'MyAccountCtrl',
                controllerAs: 'vm'
            })
            /*.when('/voyage')
            .when('/map')*/
            .otherwise({redirectTo: '/page_acceuil'});
    }]);