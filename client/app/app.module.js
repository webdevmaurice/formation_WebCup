angular.module('teleportation',['ngAnimate','ngMaterial','ngMdIcons','materialCalendar','pascalprecht.translate','ngRoute','chart.js', 'angularTypewrite'])
    .config(function($mdThemingProvider){
        var customPrimary = {
            '50': '#4eb9fa',
            '100': '#35aff9',
            '200': '#1ca5f8',
            '300': '#089af3',
            '400': '#078bdb',
            '500': '#067BC2',
            '600': '#056ba9',
            '700': '#045c91',
            '800': '#044c78',
            '900': '#033c5f',
            'A100': '#67c3fa',
            'A200': '#7fccfb',
            'A400': '#98d6fc',
            'A700': '#022d46'
        };
        $mdThemingProvider
            .definePalette('customPrimary',
            customPrimary);

        var customAccent = {
            '50': '#f9e27e',
            '100': '#f8dd65',
            '200': '#f7d84d',
            '300': '#f6d234',
            '400': '#f4cd1c',
            '500': '#ECC30B',
            '600': '#d4af0a',
            '700': '#bb9b09',
            '800': '#a38708',
            '900': '#8b7206',
            'A100': '#fae896',
            'A200': '#fbedae',
            'A400': '#fcf3c7',
            'A700': '#725e05'
        };
        $mdThemingProvider
            .definePalette('customAccent',
            customAccent);

        var customWarn = {
            '50': '#fbd0c0',
            '100': '#f9bea8',
            '200': '#f8ac90',
            '300': '#f69b78',
            '400': '#f58960',
            '500': '#f37748',
            '600': '#f16530',
            '700': '#f05318',
            '800': '#e0480f',
            '900': '#c8400d',
            'A100': '#fce2d8',
            'A200': '#fef3ef',
            'A400': '#ffffff',
            'A700': '#b0390c'
        };
        $mdThemingProvider
            .definePalette('customWarn',
            customWarn);

        var customBackground = {
            '50': '#98dafc',
            '100': '#7fd1fb',
            '200': '#66c8fa',
            '300': '#4dbffa',
            '400': '#35b6f9',
            '500': '#1cadf8',
            '600': '#08a3f3',
            '700': '#0792da',
            '800': '#0682c1',
            '900': '#0571a9',
            'A100': '#b0e3fd',
            'A200': '#c9ecfd',
            'A400': '#e2f4fe',
            'A700': '#046090'
        };
        $mdThemingProvider
            .definePalette('customBackground',
            customBackground);

        $mdThemingProvider.theme('default')
            .primaryPalette('customPrimary')
            .accentPalette('customAccent')
            .warnPalette('customWarn')
            .backgroundPalette('customBackground');
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