angular.module('teleportation',['ngAnimate','ngMaterial','ngMdIcons','pascalprecht.translate','ngRoute','chart.js'])
    .run(function($rootScope){
        $rootScope.$on('$routeChangeStart', function(){
            $rootScope.isRouteLoading = true;
            console.log("start");
        });

        $rootScope.$on('$routeChangeSuccess', function(){
            $rootScope.isRouteLoading = false;
            console.log("end");
        });
    });