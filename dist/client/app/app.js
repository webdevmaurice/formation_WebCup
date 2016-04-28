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
            'A200': '#ffffff',
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
            '500': '#C2C2C2',
            '600': '#08a3f3',
            '700': '#0792da',
            '800': '#0682c1',
            '900': '#0571a9',
            'A100': '#ffffff',
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
angular.module('teleportation')
    .config(['$routeProvider', function ($routeProvider) {
        var baseUrl = 'client/app/main_component/';
        $routeProvider
            .when('/page_acceuil',{
                templateUrl: baseUrl + 'page_acceuil/page_acceuil.html',
                controller: 'PageAccueilCtrl',
                controllerAs: 'vm'
            })
            .when('/my_account',{
                templateUrl: baseUrl + 'my_account/my_account.html',
                controller: 'MyAccountCtrl',
                controllerAs: 'vm'
            })
            .when('/voyage', {
                //templateUrl: baseUrl + 'voyage/voyage.html',
                templateUrl: baseUrl + 'voyage/voyages.html',
                controller: 'VoyageCtrl1',
                controllerAs: 'vm'
            })
            .when('/events', {
                //templateUrl: baseUrl + 'voyage/voyage.html',
                templateUrl: baseUrl + 'event/event.html',
                controller: 'EventCtrl',
                controllerAs: 'vm'
            })
            .when('/map', {
                templateUrl: baseUrl + 'map/map.html',
                controller: 'MapCtrl',
                controllerAs: 'vm'
            })
            .when('/about', {
                templateUrl: baseUrl + 'about/about.html',
                controller: 'aboutCtrl',
                controllerAs: 'vm'
            })
            .otherwise({redirectTo: '/page_acceuil'});
    }]);
angular.module('teleportation').directive('bindToHeight', function ($window) {

    return {
        restrict: 'A',

        link: function (scope, elem, attrs) {
            var attributes = scope.$eval(attrs['bindToHeight']);
            var targetElem = angular.element(document.querySelector(attributes[1]));
            // Watch for changes
            scope.$watch(function () {
                return targetElem.height();
            },
            function (newValue, oldValue) {
                console.log("oldValue = ",oldValue);
                console.log("newValue = ",newValue);
                if (newValue != oldValue) {
                    elem.css(attributes[0], oldValue);
                }
            });
        }
    };
});
/**
 * Created by ballgobina on 28/3/2016.
 */
angular.module('teleportation')
    .directive('scrollToItem', function() {
        return {
            restrict: 'A',
            scope: {
                scrollTo: "@"
            },
            link: function(scope, $elm,attr) {

                $elm.on('click', function() {
                    $('html,body').animate({scrollTop: $(scope.scrollTo).offset().top }, "slow");
                });
            }
        }})
/**
 * Created by MICHAEL on 4/16/16.
 */
angular.module('teleportation')
    .controller('aboutCtrl',['$http',function aboutCtrl ($http) {
        console.log("aboutCtrl");
        var vm = this;
        vm.pageClass = "about";



    }]);
/**
 * Created by ballgobina on 28/3/2016.
 */

angular.module('teleportation')
    .controller('EventCtrl',['$window','$location','$anchorScroll', function EventCtrl ($window, $location, $anchorScroll) {
        var vm = this;
        var $sidescroll	= (function() {

            // the row elements
            var $rows			= $('#ss-container > div.ss-row'),
            // we will cache the inviewport rows and the outside viewport rows
                $rowsViewport, $rowsOutViewport,
            // navigation menu links
                $links			= $('#ss-links > a'),
            // the window element
                $win			= $('#divEvent'),
            // $win			= $('#divVoyage'),
            // we will store the window sizes here
                winSize			= {},
            // used in the scroll setTimeout function
                anim			= false,
            // page scroll speed
                scollPageSpeed	= 50 ,
            // page scroll easing
                scollPageEasing = 'easeInOutExpo',
            // perspective?
                hasPerspective	= true,

                perspective		= hasPerspective && Modernizr.csstransforms3d,
            // perspective		= true,
            // initialize function
                init			= function() {
                    $rows			= $('#ss-container > div.ss-row');
                    // get window sizes
                    getWinSize();

                    // initialize events
                    initEvents();
                    // define the inviewport selector
                    defineViewport();
                    // gets the elements that match the previous selector
                    setViewportRows();
                    // if perspective add css
                    if( perspective ) {
                        $rows.css({
                            '-webkit-perspective'			: 600,
                            '-webkit-perspective-origin'	: '50% 0%'
                        });
                    }
                    // show the pointers for the inviewport rows
                    $rowsViewport.find('a.ss-circle').addClass('ss-circle-deco');
                    // set positions for each row
                    placeRows();

                },
            // defines a selector that gathers the row elems that are initially visible.
            // the element is visible if its top is less than the window's height.
            // these elements will not be affected when scrolling the page.
                defineViewport	= function() {

                    $.extend( $.expr[':'], {

                        inviewport	: function ( el ) {

                            if ( $(el).offset().top < winSize.height ) {
                                return true;
                            }
                            return false;
                        }

                    });

                },
            // checks which rows are initially visible
                setViewportRows	= function() {

                    $rowsViewport 		= $rows.filter(':inviewport');
                    $rowsOutViewport	= $rows.not( $rowsViewport )

                },
            // get window sizes
                getWinSize		= function() {

                    winSize.width	= $win.width();
                    winSize.height	= $win.height();
                },
            // initialize some events
                initEvents		= function() {

                    // navigation menu links.
                    // scroll to the respective section.
                    console.log('initialized events');
                    $links.on( 'click.Scrolling', function( event ) {

                        // scroll to the element that has id = menu's href
                        $('html, body').stop().animate({
                            scrollTop: $( $(this).attr('href') ).offset().top
                        }, scollPageSpeed, scollPageEasing );

                        return false;

                    });

                    $(window).on({
                        // on window resize we need to redefine which rows are initially visible (this ones we will not animate).
                        'resize.Scrolling' : function( event ) {
                            // get the window sizes again
                            getWinSize();
                            // redefine which rows are initially visible (:inviewport)
                            setViewportRows();
                            // remove pointers for every row
                            $rows.find('a.ss-circle').removeClass('ss-circle-deco');
                            // show inviewport rows and respective pointers
                            $rowsViewport.each( function() {

                                $(this).find('div.ss-left')
                                    .css({ left   : '0%' })
                                    .end()
                                    .find('div.ss-right')
                                    .css({ right  : '0%' })
                                    .end()
                                    .find('a.ss-circle')
                                    .addClass('ss-circle-deco');

                            });

                        },
                        // when scrolling the page change the position of each row
                        'scroll.Scrolling' : function( event ) {
                            // set a timeout to avoid that the
                            // placeRows function gets called on every scroll trigger
                            if( anim ) return false;
                            anim = true;
                            setTimeout( function() {

                                placeRows();
                                anim = false;

                            }, 10 );

                        }
                    });
                    $( ".cube" ).on({
                        // on window resize we need to redefine which rows are initially visible (this ones we will not animate).
                        'resize.Scrolling' : function( event ) {
                            // get the window sizes again
                            getWinSize();
                            // redefine which rows are initially visible (:inviewport)
                            setViewportRows();
                            // remove pointers for every row
                            $rows.find('a.ss-circle').removeClass('ss-circle-deco');
                            // show inviewport rows and respective pointers
                            $rowsViewport.each( function() {

                                $(this).find('div.ss-left')
                                    .css({ left   : '0%' })
                                    .end()
                                    .find('div.ss-right')
                                    .css({ right  : '0%' })
                                    .end()
                                    .find('a.ss-circle')
                                    .addClass('ss-circle-deco');

                            });

                        },
                        // when scrolling the page change the position of each row
                        'scroll.Scrolling' : function( event ) {
                            // set a timeout to avoid that the
                            // placeRows function gets called on every scroll trigger
                            if( anim ) return false;
                            anim = true;
                            setTimeout( function() {

                                placeRows();
                                anim = false;

                            }, 10 );

                        }
                    });
                },
            // sets the position of the rows (left and right row elements).
            // Both of these elements will start with -50% for the left/right (not visible)
            // and this value should be 0% (final position) when the element is on the
            // center of the window.
                placeRows		= function() {

                    // how much we scrolled so far
                    var winscroll	= $win.scrollTop(),
                    // the y value for the center of the screen
                        winCenter	= winSize.height + winscroll;

                    // for every row that is not inviewport
                    $rowsOutViewport.each( function(i) {
//console.log($(this));
                        var $row	= $(this),
                        // the left side element
                            $rowL	= $row.find('div.ss-left'),
                        // the right side element
                            $rowR	= $row.find('div.ss-right');
                        // top value
                        if($window.innerHeight >= 1500 && $window.innerHeight <= 1700){
                            var rowT	= $row.offset().top - 580;//Arvind set transition start point
                        }
                        else if($window.innerHeight >= 1700 && $window.innerHeight <= 1999){
                            var rowT	= $row.offset().top - 1280;
                        }
                        else if($window.innerHeight >= 2000){
                            var rowT	= $row.offset().top - 2050;//Arvind set transition start point
                        }
                        else {
                            var rowT	= $row.offset().top - 580;//Arvind set transition start point
                        }

                        console.log($window.innerHeight, $window.innerWidth);
                        // hide the row if it is under the viewport
                        if( rowT > winSize.height + winscroll ) {

                            if( perspective ) {

                                $rowL.css({
                                    '-webkit-transform'	: 'translate3d(-50%, 0, 0) rotateY(-90deg) translate3d(-75%, 0, 0)',
                                    'opacity'			: 0
                                });
                                $rowR.css({
                                    '-webkit-transform'	: 'translate3d(50%, 0, 0) rotateY(90deg) translate3d(75%, 0, 0)',
                                    'opacity'			: 0
                                });

                            }
                            else {

                                $rowL.css({ left 		: '-25%' });
                                $rowR.css({ right 		: '-25%' });

                            }

                        }
                        // if not, the row should become visible (0% of left/right) as it gets closer to the center of the screen.
                        else {

                            // row's height
                            var rowH	= $row.height(),
                            // the value on each scrolling step will be proporcional to the distance from the center of the screen to its height
                                factor 	= ( ( ( rowT + rowH / 2 ) - winCenter ) / ( winSize.height / 2 + rowH / 2 ) ),
                            // value for the left / right of each side of the row.
                            // 0% is the limit
                                val		= Math.max( factor * 5, 0 );
                            if( val <= 0 ) {

                                // when 0% is reached show the pointer for that row
                                if( !$row.data('pointer') ) {
                                    $row.data( 'pointer', true );
                                    $row.find('.ss-circle').addClass('ss-circle-deco');
                                }
                            }
                            else {
                                // the pointer should not be shown
                                if( $row.data('pointer') ) {

                                    $row.data( 'pointer', false );
                                    $row.find('.ss-circle').removeClass('ss-circle-deco');

                                }

                            }

                            // set calculated values
                            if( perspective ) {

                                var	t		= Math.max( factor * 75, 0 ),
                                    r		= Math.max( factor * 90, 0 ),
                                    o		= Math.min( Math.abs( factor - 1 ), 1 );

                                $rowL.css({
                                    '-webkit-transform'	: 'translate3d(-' + t + '%, 0, 0) rotateY(-' + r + 'deg) translate3d(-' + t + '%, 0, 0)',
                                    'opacity'			: o
                                });
                                $rowR.css({
                                    '-webkit-transform'	: 'translate3d(' + t + '%, 0, 0) rotateY(' + r + 'deg) translate3d(' + t + '%, 0, 0)',
                                    'opacity'			: o
                                });

                            }
                            else {
                                $rowL.css({ left 	: - val + '%' });
                                $rowR.css({ right 	: - val + '%' });
                            }
                        }
                    });

                };

            return { init : init };

        })();


        this.arrayData =    {
            offre : [
                {
                    b_img_class:"ss-circle-team",
                    title_img:"FastLap Entertainment Events pr�sente : Soir�e exotique",
                    descrip:"Les soir�es exotique aux Seychelles c'est les samedi soir de 23h a 5h. FAST LAP vous offre les billets VIP en utilisant nos centres de t�l�portation. En guest star ZENZAK en live.",
                    title_descript:"Rs 1500 par personne/ Rs 2000 pour les couples",
                    class:"ss-medium"
                },
                {
                    b_img_class:"ss-circle-1",
                    title_img:"Ministre de la culture (Ile Maurice) : L'histoire des sept �les bijoux  de l'oc�an indien",
                    descrip:"L'histoire c'est tous les jours en visitant les mus�es et places historique des �les: Maurice, R�union Mayotte, Seychelles et Madagascar.",
                    title_descript:"Rs 500 enfant/ Rs 800 adulte",
                    class:"ss-medium"
                },
                {
                    b_img_class:"ss-circle-2",
                    title_img:"FastLap Entertainment Events pr�sente : Week-end d'amour et de romance",
                    descrip:"Passer un magnifique week-end en amoureux dans les plus beau hotel des sept �les d'ocean Indien notamment Maurice, Rodrigues, Reunion, Grands Comores, Mayotte, Seychelles et Madagascar pour seulement Rs 7000.",
                    title_descript:"Rs 7000 couples ",
                    class:"ss-large"}
            ],
            business : [
                {
                    b_img_class:"ss-circle-team",
                    title_img:"Conf�rence easy international business par FASTLAP",
                    descrip:"Conf�rence d�montrant les divers avantage a int�ger FASTAP au monde du business ce vendredi 18 Julliet.",
                    title_descript:"Gratuit (un repr�sentant par compagnie, contactez FASLAP sur le (+230) 455 88 99 pour en savoir plus.",
                    class:"ss-medium"
                },
                {
                    b_img_class:"ss-circle-1",
                    title_img:"Business Park de FAST LAP",
                    descrip:"Les business park de FAST LAP vous offres maintenant des facilit� de logement, de bureau et de secr�taire exp�rienc� a dans sur les 7 �les.",
                    title_descript:"Rs 18500 par personne/ Rs 30000 par �quipe de 5 personnes (pour un dur�e d'une semaine",
                    class:"ss-medium"
                },
                {
                    b_img_class:"ss-circle-2",
                    title_img:"TEAM BUILDING",
                    descrip:"Des packages incroyables pour vos team building a partir de Rs 2000 par personne.",
                    title_descript:"Rs 2000 - Rs7500 par personnes, contactez FASLAP sur le (+230) 455 88 99 pour en savoir plus. ",
                    class:"ss-large"},
            ],
            vacances : [
                {
                    b_img_class:"ss-circle-team",
                    title_img:"Cas�la (Ile Maurice) pr�sente : Une journ�e de folie",
                    descrip:"Vivez une journ�e de folie en participant aux activit� incroyable du Cas�la a l'�le maurice.",
                    title_descript:"Rs 2500 par personne",
                    class:"ss-medium"
                },
                {
                    b_img_class:"ss-circle-team",
                    title_img:"FastLap Entertainment Events pr�sente : Mes vancances en famille",
                    descrip:"Une semaine dans les plus beaux endroits de nos sept �les avec la pr�sence d'un guide touristique.",
                    title_descript:"Rs 1500 par personne/ Rs 2000 pour les couples /Rs 3500 par groupe de quatres personnes",
                    class:"ss-medium"
                },
            ]};

        /*!
         * classie - class helper functions
         * from bonzo https://github.com/ded/bonzo
         *
         * classie.has( elem, 'my-class' ) -> true/false
         * classie.add( elem, 'my-new-class' )
         * classie.remove( elem, 'my-unwanted-class' )
         * classie.toggle( elem, 'my-class' )
         */

        /*jshint browser: true, strict: true, undef: true */
        /*global define: false */

        ( function( window ) {

// class helper functions from bonzo https://github.com/ded/bonzo

            function classReg( className ) {
                return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
            }

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
            var hasClass, addClass, removeClass;

            if ( 'classList' in document.documentElement ) {
                hasClass = function( elem, c ) {
                    return elem.classList.contains( c );
                };
                addClass = function( elem, c ) {
                    elem.classList.add( c );
                };
                removeClass = function( elem, c ) {
                    elem.classList.remove( c );
                };
            }
            else {
                hasClass = function( elem, c ) {
                    return classReg( c ).test( elem.className );
                };
                addClass = function( elem, c ) {
                    if ( !hasClass( elem, c ) ) {
                        elem.className = elem.className + ' ' + c;
                    }
                };
                removeClass = function( elem, c ) {
                    elem.className = elem.className.replace( classReg( c ), ' ' );
                };
            }

            function toggleClass( elem, c ) {
                var fn = hasClass( elem, c ) ? removeClass : addClass;
                fn( elem, c );
            }

            var classie = {
                // full names
                hasClass: hasClass,
                addClass: addClass,
                removeClass: removeClass,
                toggleClass: toggleClass,
                // short names
                has: hasClass,
                add: addClass,
                remove: removeClass,
                toggle: toggleClass
            };

// transport
            if ( typeof define === 'function' && define.amd ) {
                // AMD
                define( classie );
            } else {
                // browser global
                window.classie = classie;
            }

        })( window );

        /**
         * cbpSplitLayout.js v1.0.0
         * http://www.codrops.com
         *
         * Licensed under the MIT license.
         * http://www.opensource.org/licenses/mit-license.php
         *
         * Copyright 2013, Codrops
         * http://www.codrops.com
         */
        (function() {

            // http://stackoverflow.com/a/11381730/989439
            function mobilecheck() {
                var check = false;
                (function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
                return check;
            }

            var splitlayout = document.getElementById( 'splitlayout' ),
                leftSide = splitlayout.querySelector( 'div.intro > div.side-left' ),
                rightSide = splitlayout.querySelector( 'div.intro > div.side-right' ),
                pageLeft = splitlayout.querySelector( 'div.page-left' ),
                pageRight = splitlayout.querySelector( 'div.page-right' ),
                eventtype = mobilecheck() ? 'touchstart' : 'click',
                transEndEventNames = {
                    'WebkitTransition': 'webkitTransitionEnd',
                    'MozTransition': 'transitionend',
                    'OTransition': 'oTransitionEnd',
                    'msTransition': 'MSTransitionEnd',
                    'transition': 'transitionend'
                },
                transEndEventName = transEndEventNames['transition' ];

            function init() {
                if( mobilecheck() ) {
                    classie.add( splitlayout, 'mobile-layout' );
                }
                classie.add( splitlayout, 'reset-layout' );

                leftSide.querySelector( 'div.intro-content' ).addEventListener( eventtype, function( ev ) {
                    vm.isHuman = true;
                    vm.isParcel=false;
                    vm.fnHuman();
                    reset();
                    classie.add( splitlayout, 'open-left' );
                } );

                rightSide.querySelector( 'div.intro-content' ).addEventListener( eventtype, function( ev ) {
                    vm.isParcel = true;
                    vm.isHuman = true;
                    vm.fnParcels();
                    reset();
                    classie.add( splitlayout, 'open-right' );
                } );

                // back to intro
                // after transition ends:
                var onEndTransFn = function() {
                        this.removeEventListener( transEndEventName, onEndTransFn );
                        classie.add( splitlayout, 'reset-layout' );
                        document.body.scrollTop = document.documentElement.scrollTop = 0;
                    },
                    backToIntro = function( ev ) {
                        ev.preventDefault();
                        ev.stopPropagation();
                        var dir = classie.has( ev.target, 'back-right' ) ? 'left' : 'right',
                            page = dir === 'right' ? pageRight : pageLeft;
                        classie.remove( splitlayout, 'open-' + dir );
                        classie.add( splitlayout, 'close-' + dir );
                        page.addEventListener( transEndEventName, onEndTransFn );
                    };

                splitlayout.querySelector( 'a.back-left' ).addEventListener( eventtype, backToIntro );
                splitlayout.querySelector( 'a.back-right' ).addEventListener( eventtype, backToIntro );
            }

            function reset() {
                classie.remove( splitlayout, 'close-right' );
                classie.remove( splitlayout, 'close-left' );
                classie.remove( splitlayout, 'reset-layout' );
            }

            init();

        })();

        vm.fnHuman = function(){
            window.setTimeout ( function() { $sidescroll.init(); }, 0);
        };

        vm.fnParcels = function(){
            window.setTimeout ( function() { $sidescroll.init();}, 0);
        };
        vm.fnScroll = function(id){
            if(id == 1) {
                $('.cube').animate({scrollTop: '+='+$('#foncIntro').offset().top+'px'}, 3000);
            }
            else if(id == 2) {
                $('.cube').animate({scrollTop: '+='+$('#foncHuman').offset().top+'px'}, 5000);
            }
            else if(id == 3) {
                $('.cube').animate({scrollTop: '+='+$('#foncContrib').offset().top+'px'}, 6000);
            }
        }
    }]);
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
            gender: 'Male',
            address: '1600 Amphitheatre Pkwy',
            country: 'Mauritius',
            submissionDate : '01/02/1990'
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
    

angular.module('teleportation')
    .controller('PageAccueilCtrl',['$http',function MyAccountCtrl ($http) {
        console.log("PageAccueilCtrl");
        var vm = this;
        vm.pageClass = "page-acceuil";

        $("#accueil").vegas({
            slides: [
                { src: 'client/app/main_component/page_acceuil/img/slide1.jpg',transition:'zoomOut'},
                { src: 'client/app/main_component/page_acceuil/img/slide2.jpg',transition:'zoomOut'},
                { src: 'client/app/main_component/page_acceuil/img/slide3.jpg',transition:'zoomOut'}
            ],
            delay: 8000,
            timer: false,
            shuffle: false,
            transitionDuration: 25000
        });

        setInterval(function(){
            $('.link--kukuri').toggleClass('link--kukuri::after');
        }, 2000);

        $(document).ready(function () {
            //rotation speed and timer
            var speed = 8000;

            var run = setInterval(rotate, speed);
            var slides = $('.slide');
            var container = $('#slides ul');
            var elm = container.find(':first-child').prop("tagName");
            var item_width = container.width();
            var previous = 'prev'; //id of previous button
            var next = 'next'; //id of next button
            slides.width(item_width); //set the slides to the correct pixel width
            container.parent().width(item_width);
            container.width(slides.length * item_width); //set the slides container to the correct total width
            container.find(elm + ':first').before(container.find(elm + ':last'));
            resetSlides();


            //if user clicked on prev button

            $('#buttons a').click(function (e) {
                //slide the item

                if (container.is(':animated')) {
                    return false;
                }
                if (e.target.id == previous) {
                    container.stop().animate({
                        'left': 0
                    }, 1500, function () {
                        container.find(elm + ':first').before(container.find(elm + ':last'));
                        resetSlides();
                    });
                }

                if (e.target.id == next) {
                    container.stop().animate({
                        'left': item_width * -2
                    }, 1500, function () {
                        container.find(elm + ':last').after(container.find(elm + ':first'));
                        resetSlides();
                    });
                }

                //cancel the link behavior
                return false;

            });

            //if mouse hover, pause the auto rotation, otherwise rotate it
            container.parent().mouseenter(function () {
                clearInterval(run);
            }).mouseleave(function () {
                run = setInterval(rotate, speed);
            });


            function resetSlides() {
                //and adjust the container so current is in the frame
                container.css({
                    'left': -1 * item_width
                });
            }

        });

        function rotate() {
            $('#next').click();
        }
    }]);
/**
 * Created by ballgobina on 28/3/2016.
 */

angular.module('teleportation')
    .controller('VoyageCtrl1',['$window','$location','$anchorScroll', function VoyageCtrl ($window, $location, $anchorScroll) {
        var vm = this;
        vm.isHuman = true;
        vm.isParcel = true;
        var $sidescroll	= (function() {

            // the row elements
            var $rows			= $('#ss-container > div.ss-row'),
            // we will cache the inviewport rows and the outside viewport rows
                $rowsViewport, $rowsOutViewport,
            // navigation menu links
                $links			= $('#ss-links > a'),
            // the window element
                $win			= $('#divVoyage'),
            // $win			= $('#divVoyage'),
            // we will store the window sizes here
                winSize			= {},
            // used in the scroll setTimeout function
                anim			= false,
            // page scroll speed
                scollPageSpeed	= 50 ,
            // page scroll easing
                scollPageEasing = 'easeInOutExpo',
            // perspective?
                hasPerspective	= true,

                perspective		= hasPerspective && Modernizr.csstransforms3d,
            // perspective		= true,
            // initialize function
                init			= function() {
                    $rows			= $('#ss-container > div.ss-row');
                    // get window sizes
                    getWinSize();

                    // initialize events
                    initEvents();
                    // define the inviewport selector
                    defineViewport();
                    // gets the elements that match the previous selector
                    setViewportRows();
                    // if perspective add css
                    if( perspective ) {
                        $rows.css({
                            '-webkit-perspective'			: 600,
                            '-webkit-perspective-origin'	: '50% 0%'
                        });
                    }
                    // show the pointers for the inviewport rows
                    $rowsViewport.find('a.ss-circle').addClass('ss-circle-deco');
                    // set positions for each row
                    placeRows();

                },
            // defines a selector that gathers the row elems that are initially visible.
            // the element is visible if its top is less than the window's height.
            // these elements will not be affected when scrolling the page.
                defineViewport	= function() {

                    $.extend( $.expr[':'], {

                        inviewport	: function ( el ) {

                            if ( $(el).offset().top < winSize.height ) {
                                return true;
                            }
                            return false;
                        }

                    });

                },
            // checks which rows are initially visible
                setViewportRows	= function() {

                    $rowsViewport 		= $rows.filter(':inviewport');
                    $rowsOutViewport	= $rows.not( $rowsViewport )

                },
            // get window sizes
                getWinSize		= function() {

                    winSize.width	= $win.width();
                    winSize.height	= $win.height();
                },
            // initialize some events
                initEvents		= function() {

                    // navigation menu links.
                    // scroll to the respective section.
                    console.log('initialized events');
                    $links.on( 'click.Scrolling', function( event ) {

                        // scroll to the element that has id = menu's href
                        $('html, body').stop().animate({
                            scrollTop: $( $(this).attr('href') ).offset().top
                        }, scollPageSpeed, scollPageEasing );

                        return false;

                    });

                    $(window).on({
                        // on window resize we need to redefine which rows are initially visible (this ones we will not animate).
                        'resize.Scrolling' : function( event ) {
                            // get the window sizes again
                            getWinSize();
                            // redefine which rows are initially visible (:inviewport)
                            setViewportRows();
                            // remove pointers for every row
                            $rows.find('a.ss-circle').removeClass('ss-circle-deco');
                            // show inviewport rows and respective pointers
                            $rowsViewport.each( function() {

                                $(this).find('div.ss-left')
                                    .css({ left   : '0%' })
                                    .end()
                                    .find('div.ss-right')
                                    .css({ right  : '0%' })
                                    .end()
                                    .find('a.ss-circle')
                                    .addClass('ss-circle-deco');

                            });

                        },
                        // when scrolling the page change the position of each row
                        'scroll.Scrolling' : function( event ) {
                            // set a timeout to avoid that the
                            // placeRows function gets called on every scroll trigger
                            if( anim ) return false;
                            anim = true;
                            setTimeout( function() {

                                placeRows();
                                anim = false;

                            }, 10 );

                        }
                    });
                    $( ".cube" ).on({
                        // on window resize we need to redefine which rows are initially visible (this ones we will not animate).
                        'resize.Scrolling' : function( event ) {
                            // get the window sizes again
                            getWinSize();
                            // redefine which rows are initially visible (:inviewport)
                            setViewportRows();
                            // remove pointers for every row
                            $rows.find('a.ss-circle').removeClass('ss-circle-deco');
                            // show inviewport rows and respective pointers
                            $rowsViewport.each( function() {

                                $(this).find('div.ss-left')
                                    .css({ left   : '0%' })
                                    .end()
                                    .find('div.ss-right')
                                    .css({ right  : '0%' })
                                    .end()
                                    .find('a.ss-circle')
                                    .addClass('ss-circle-deco');

                            });

                        },
                        // when scrolling the page change the position of each row
                        'scroll.Scrolling' : function( event ) {
                            // set a timeout to avoid that the
                            // placeRows function gets called on every scroll trigger
                            if( anim ) return false;
                            anim = true;
                            setTimeout( function() {

                                placeRows();
                                anim = false;

                            }, 10 );

                        }
                    });
                },
            // sets the position of the rows (left and right row elements).
            // Both of these elements will start with -50% for the left/right (not visible)
            // and this value should be 0% (final position) when the element is on the
            // center of the window.
                placeRows		= function() {

                    // how much we scrolled so far
                    var winscroll	= $win.scrollTop(),
                    // the y value for the center of the screen
                        winCenter	= winSize.height + winscroll;

                    // for every row that is not inviewport
                    $rowsOutViewport.each( function(i) {
//console.log($(this));
                        var $row	= $(this),
                        // the left side element
                            $rowL	= $row.find('div.ss-left'),
                        // the right side element
                            $rowR	= $row.find('div.ss-right');
                        // top value
                        if($window.innerHeight >= 1500 && $window.innerHeight <= 1700){
                            var rowT	= $row.offset().top - 580;//Arvind set transition start point
                        }
                        else if($window.innerHeight >= 1700 && $window.innerHeight <= 1999){
                            var rowT	= $row.offset().top - 1280;
                        }
                        else if($window.innerHeight >= 2000){
                            var rowT	= $row.offset().top - 2050;//Arvind set transition start point
                        }
                        else {
                            var rowT	= $row.offset().top - 580;//Arvind set transition start point
                        }

                        console.log($window.innerHeight, $window.innerWidth);
                        // hide the row if it is under the viewport
                        if( rowT > winSize.height + winscroll ) {

                            if( perspective ) {

                                $rowL.css({
                                    '-webkit-transform'	: 'translate3d(-50%, 0, 0) rotateY(-90deg) translate3d(-75%, 0, 0)',
                                    'opacity'			: 0
                                });
                                $rowR.css({
                                    '-webkit-transform'	: 'translate3d(50%, 0, 0) rotateY(90deg) translate3d(75%, 0, 0)',
                                    'opacity'			: 0
                                });

                            }
                            else {

                                $rowL.css({ left 		: '-25%' });
                                $rowR.css({ right 		: '-25%' });

                            }

                        }
                        // if not, the row should become visible (0% of left/right) as it gets closer to the center of the screen.
                        else {

                            // row's height
                            var rowH	= $row.height(),
                            // the value on each scrolling step will be proporcional to the distance from the center of the screen to its height
                                factor 	= ( ( ( rowT + rowH / 2 ) - winCenter ) / ( winSize.height / 2 + rowH / 2 ) ),
                            // value for the left / right of each side of the row.
                            // 0% is the limit
                                val		= Math.max( factor * 5, 0 );
                            if( val <= 0 ) {

                                // when 0% is reached show the pointer for that row
                                if( !$row.data('pointer') ) {
                                    $row.data( 'pointer', true );
                                    $row.find('.ss-circle').addClass('ss-circle-deco');
                                }
                            }
                            else {
                                // the pointer should not be shown
                                if( $row.data('pointer') ) {

                                    $row.data( 'pointer', false );
                                    $row.find('.ss-circle').removeClass('ss-circle-deco');

                                }

                            }

                            // set calculated values
                            if( perspective ) {

                                var	t		= Math.max( factor * 75, 0 ),
                                    r		= Math.max( factor * 90, 0 ),
                                    o		= Math.min( Math.abs( factor - 1 ), 1 );

                                $rowL.css({
                                    '-webkit-transform'	: 'translate3d(-' + t + '%, 0, 0) rotateY(-' + r + 'deg) translate3d(-' + t + '%, 0, 0)',
                                    'opacity'			: o
                                });
                                $rowR.css({
                                    '-webkit-transform'	: 'translate3d(' + t + '%, 0, 0) rotateY(' + r + 'deg) translate3d(' + t + '%, 0, 0)',
                                    'opacity'			: o
                                });

                            }
                            else {
                                $rowL.css({ left 	: - val + '%' });
                                $rowR.css({ right 	: - val + '%' });
                            }
                        }
                    });

                };

            return { init : init };

        })();


        this.arrayData =    { brief : [
            {b_img_class:"ss-circle-team", title_img:"Conception",    descrip:"L'idée c'est de pouvoir passer d'un île à un autre en toute securité et rapidement.", title_descript:"FastLap Limitée", class:"ss-medium"},
            {b_img_class:"ss-circle-1", title_img:"Vitesse",           descrip:"Construite avec un 200YB / s ( yottaoctet ) capacité de câble , il peut traiter simultanément un transfert de 1 millon personnes par seconde", title_descript:"", class:"ss-medium"},
            {b_img_class:"ss-circle-2", title_img:"îles",    descrip:"Ce moyen va rélier les sept îles d'ocean Indien notamment Maurice, Rodrigues, Reunion, Grands Comores, Mayotte, Seychelles et Madagascar", title_descript:"", class:"ss-large"},
            {b_img_class:"ss-circle-3", title_img:"Protocols", descrip:"Ce service est regularisé et mis fonctionnel par la collaboration de nos sept îles.", title_descript:"", class:"ss-medium"}
        ],
            operation : [
                {b_img_class:"ss-circle-hub", title_img:"Emplacement",   descrip:"Veuillez vous rendre dans un de nos emplacement se situant dans votre île", title_descript:"", class:"ss-medium"},
                {b_img_class:"ss-circle-entry", title_img:"Entrée", descrip:"Traverser le portail normalement", title_descript:"", class:"ss-medium"},
                {b_img_class:"ss-circle-voyage", title_img:"Lecture des données",descrip:"Notre système AI récuperas automatiquement les infos requis comme la destination, l'objectif du voyage", title_descript:"", class:"ss-medium"},
                {b_img_class:"ss-circle-bill", title_img:"Payment",  descrip:"Avec les données récuperer par le AI, notre système débitera directement le montant requis de votre compte bancaire", title_descript:"", class:"ss-medium"},
                {b_img_class:"ss-circle-exit", title_img:"Temps",  descrip:"La téléportation prendras approx 2s et vous vous retrouverez à votre destination, Simple et Efficace", title_descript:"", class:"ss-medium"}
            ],
        contribution : [
            {b_img_class:"ss-circle-4", title_img:"Recherche/construction",   descrip:"Des scientist mondialement connus ont été recruté pour la mis en place de ce fameux projet.", title_descript:"", class:"ss-medium"},
            {b_img_class:"ss-circle-5", title_img:"Organisateurs", descrip:"Le bon deroulemnt du projet fut par le bias d'une organisation constitué des representant  des sept îles.", title_descript:"", class:"ss-medium"},
            {b_img_class:"ss-circle-6", title_img:"Temps Contruction",descrip:"La construction a pris 3 ans pour s'accomplire.", title_descript:"", class:"ss-medium"},
            {b_img_class:"ss-circle-7", title_img:"Development Siteweb",  descrip:"L'équipe d'élite de la HDM a pris l'initiative de vous faire prendre connaisance de ce mode de transport.", title_descript:"", class:"ss-medium"}
        ]};

        this.arrayParcels =    { brief : [
            {b_img_class:"ss-circle-team", title_img:"Conception",    descrip:"L'idée c'est de pouvoir passer d'un île à un autre en toute securité et rapidement.", title_descript:"FastLap Limitée", class:"ss-medium"},
            {b_img_class:"ss-circle-1", title_img:"Vitesse",           descrip:"Construite avec un 200YB / s ( yottaoctet ) capacité de câble , il peut traiter simultanément un transfert de 1 millon personnes par seconde", title_descript:"", class:"ss-medium"},
            {b_img_class:"ss-circle-2", title_img:"îles",    descrip:"Ce moyen va rélier les sept îles d'ocean Indien notamment Maurice, Rodrigues, Reunion, Grands Comores, Mayotte, Seychelles et Madagascar", title_descript:"", class:"ss-large"},
            {b_img_class:"ss-circle-3", title_img:"Protocols", descrip:"Ce service est regularisé et mis fonctionnel par la collaboration de nos sept îles.", title_descript:"", class:"ss-medium"}
        ],
            operation : [
                {b_img_class:"ss-circle-hub", title_img:"Emplacement",   descrip:"Veuillez vous rendre dans un de nos centre d'opération situant sur votre île", title_descript:"", class:"ss-medium"},
                {b_img_class:"ss-circle-entry", title_img:"", descrip:"Marchez à travers le portail normalement", title_descript:"Entrée", class:"ss-medium"},
                {b_img_class:"ss-circle-voyage", title_img:"",descrip:"Notre système AI récuperas automatiquement les infos requis comme la destination, l'objectif du voyage et vas construire", title_descript:"Teleportation", class:"ss-medium"},
                {b_img_class:"ss-circle-bill", title_img:"",  descrip:"Avec les données récuperer par le AI, notre système débitera directement le montant requis de votre compte bancaire", title_descript:"Payment", class:"ss-medium"},
                {b_img_class:"ss-circle-exit", title_img:"",  descrip:"La téléportation prendras approx 2s et vous vous retrouverez à votre destination, Simple et Efficace", title_descript:"Sortie", class:"ss-medium"}
            ]};
        /*!
         * classie - class helper functions
         * from bonzo https://github.com/ded/bonzo
         *
         * classie.has( elem, 'my-class' ) -> true/false
         * classie.add( elem, 'my-new-class' )
         * classie.remove( elem, 'my-unwanted-class' )
         * classie.toggle( elem, 'my-class' )
         */

        /*jshint browser: true, strict: true, undef: true */
        /*global define: false */

        ( function( window ) {

// class helper functions from bonzo https://github.com/ded/bonzo

            function classReg( className ) {
                return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
            }

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
            var hasClass, addClass, removeClass;

            if ( 'classList' in document.documentElement ) {
                hasClass = function( elem, c ) {
                    return elem.classList.contains( c );
                };
                addClass = function( elem, c ) {
                    elem.classList.add( c );
                };
                removeClass = function( elem, c ) {
                    elem.classList.remove( c );
                };
            }
            else {
                hasClass = function( elem, c ) {
                    return classReg( c ).test( elem.className );
                };
                addClass = function( elem, c ) {
                    if ( !hasClass( elem, c ) ) {
                        elem.className = elem.className + ' ' + c;
                    }
                };
                removeClass = function( elem, c ) {
                    elem.className = elem.className.replace( classReg( c ), ' ' );
                };
            }

            function toggleClass( elem, c ) {
                var fn = hasClass( elem, c ) ? removeClass : addClass;
                fn( elem, c );
            }

            var classie = {
                // full names
                hasClass: hasClass,
                addClass: addClass,
                removeClass: removeClass,
                toggleClass: toggleClass,
                // short names
                has: hasClass,
                add: addClass,
                remove: removeClass,
                toggle: toggleClass
            };

// transport
            if ( typeof define === 'function' && define.amd ) {
                // AMD
                define( classie );
            } else {
                // browser global
                window.classie = classie;
            }

        })( window );

        /**
         * cbpSplitLayout.js v1.0.0
         * http://www.codrops.com
         *
         * Licensed under the MIT license.
         * http://www.opensource.org/licenses/mit-license.php
         *
         * Copyright 2013, Codrops
         * http://www.codrops.com
         */
        (function() {

            // http://stackoverflow.com/a/11381730/989439
            function mobilecheck() {
                var check = false;
                (function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
                return check;
            }

            var splitlayout = document.getElementById( 'splitlayout' ),
                leftSide = splitlayout.querySelector( 'div.intro > div.side-left' ),
                rightSide = splitlayout.querySelector( 'div.intro > div.side-right' ),
                pageLeft = splitlayout.querySelector( 'div.page-left' ),
                pageRight = splitlayout.querySelector( 'div.page-right' ),
                eventtype = mobilecheck() ? 'touchstart' : 'click',
                transEndEventNames = {
                    'WebkitTransition': 'webkitTransitionEnd',
                    'MozTransition': 'transitionend',
                    'OTransition': 'oTransitionEnd',
                    'msTransition': 'MSTransitionEnd',
                    'transition': 'transitionend'
                },
            transEndEventName = transEndEventNames['transition' ];

            function init() {
                if( mobilecheck() ) {
                    classie.add( splitlayout, 'mobile-layout' );
                }
                classie.add( splitlayout, 'reset-layout' );

                leftSide.querySelector( 'div.intro-content' ).addEventListener( eventtype, function( ev ) {
                    vm.isHuman = true;
                    vm.isParcel=false;
                    vm.fnHuman();
                    reset();
                    classie.add( splitlayout, 'open-left' );
                } );

                rightSide.querySelector( 'div.intro-content' ).addEventListener( eventtype, function( ev ) {
                    vm.isParcel = true;
                    vm.isHuman = true;
                    vm.fnParcels();
                    reset();
                    classie.add( splitlayout, 'open-right' );
                } );

                // back to intro
                // after transition ends:
                var onEndTransFn = function() {
                        this.removeEventListener( transEndEventName, onEndTransFn );
                        classie.add( splitlayout, 'reset-layout' );
                        document.body.scrollTop = document.documentElement.scrollTop = 0;
                    },
                    backToIntro = function( ev ) {
                        ev.preventDefault();
                        ev.stopPropagation();
                        var dir = classie.has( ev.target, 'back-right' ) ? 'left' : 'right',
                            page = dir === 'right' ? pageRight : pageLeft;
                        classie.remove( splitlayout, 'open-' + dir );
                        classie.add( splitlayout, 'close-' + dir );
                        page.addEventListener( transEndEventName, onEndTransFn );
                    };

                splitlayout.querySelector( 'a.back-left' ).addEventListener( eventtype, backToIntro );
                splitlayout.querySelector( 'a.back-right' ).addEventListener( eventtype, backToIntro );
            }

            function reset() {
                classie.remove( splitlayout, 'close-right' );
                classie.remove( splitlayout, 'close-left' );
                classie.remove( splitlayout, 'reset-layout' );
            }

            init();

        })();

        vm.fnHuman = function(){
            window.setTimeout ( function() { $sidescroll.init(); }, 0);
        };

        vm.fnParcels = function(){
            window.setTimeout ( function() { $sidescroll.init();}, 0);
        };
        vm.fnScroll = function(id){
            if(id == 1) {
                $('.cube').animate({scrollTop: '+='+$('#foncIntro').offset().top+'px'}, 3000);
            }
            else if(id == 2) {
                $('.cube').animate({scrollTop: '+='+$('#foncHuman').offset().top+'px'}, 5000);
            }
            else if(id == 3) {
                $('.cube').animate({scrollTop: '+='+$('#foncContrib').offset().top+'px'}, 6000);
            }
        }
    }]);
angular.module('teleportation')
.controller('navCtrl',['$scope', function navCtrl($scope){
    var nav = this;
    nav.menuIsOpen = true;
    nav.menuIcon = 'close';
    nav.toggleMenu = function() {
        nav.menuIcon = {menu:'close', close: 'menu'}[nav.menuIcon];
    };
}]);