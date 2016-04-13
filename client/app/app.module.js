angular.module('teleportation',['ngAnimate','ngMaterial','ngMdIcons','materialCalendar','pascalprecht.translate','ngRoute','chart.js', 'angularTypewrite'])
    .config(function($mdThemingProvider){
        $mdThemingProvider.definePalette('amazingPaletteName', {
            '50': 'E5F7FF',
            '100': 'CCEFFF',
            '200': 'B2E8FF',
            '300': '99E0FF',
            '400': '7FD9FF',
            '500': '66D1FF',
            '600': '4CC9FF',
            '700': '33C2FF',
            '800': '19BAFF',
            '900': '00B3FF',
            'A100': 'CCF6FF',
            'A200': 'B2F2FF',
            'A400': '99EEFF',
            'A700': '7FEAFF',
            'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                                // on this palette should be dark or light
            'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
                '200', '300', '400', 'A100'],
            'contrastLightColors': undefined    // could also specify this if default was 'dark'

            /*"A100" : 'c9c9c9',
            "300" : '89bdd3',
            "800"  : '9ad3de',
            "900" : 'e3e3e3'*/
        })
       console.log($mdThemingProvider.theme('default').backgroundPalette('amazingPaletteName'))
    })
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