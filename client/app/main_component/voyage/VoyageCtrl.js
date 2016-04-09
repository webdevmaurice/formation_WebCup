/**
 * Created by ballgobina on 28/3/2016.
 */
angular.module('teleportation')
    .controller('VoyageCtrl',['$window', function VoyageCtrl ($window) {
        var vm = this;
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
                scollPageSpeed	= 2000 ,
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
                            $rowR	= $row.find('div.ss-right'),
                        // top value
                            rowT	= $row.offset().top - 450;//Arvind set transition start point

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
                {b_img_class:"ss-circle-team", title_img:"Directors",        descrip:"This concept was conceived by our co-directors Arvind, Saif, Micheal and Hashim on 10 Fev 2049", title_descript:"Fastest inter-island mode", class:"ss-medium"},
                {b_img_class:"ss-circle-1", title_img:"Speed",           descrip:"Build with a 200YB/s (yottabyte) cable capacity, it can simultaneously handle a transfer of 1 millon persons per second", title_descript:"Fastest inter-island mode", class:"ss-medium"},
                {b_img_class:"ss-circle-2", title_img:"Availability",    descrip:"Available 24 hours and 7 days a week", title_descript:"24/7 Service", class:"ss-medium"},
                {b_img_class:"ss-circle-3", title_img:"Advanced System", descrip:"Our AI/Mind reading system is the most advanced and secure mechanism available. No competitor dare challenge us.", title_descript:"Hi-tech and Secure", class:"ss-medium"},
                {b_img_class:"ss-circle-4", title_img:"Cheapest",        descrip:"We provide the cheapeast rates for inter island teleportation while providing the service free with teleporting within the island", title_descript:"Cheapest rate", class:"ss-medium"},
                {b_img_class:"ss-circle-5", title_img:"test",            descrip:"blablabalablablabla", title_descript:"blabla", class:"ss-medium"},
                {b_img_class:"ss-circle-6", title_img:"test",            descrip:"blablabalbalablbaal", title_descript:"blablaba", class:"ss-medium"}
            ]};

        /*
        *             {id:"", title1:"", title2:"", data:[
         {b_img_class:"", title_img:"", descrip:"", title_descript:""},
         {b_img_class:"", title_img:"", descrip:"", title_descript:""},
         {b_img_class:"", title_img:"", descrip:"", title_descript:""},
         {b_img_class:"", title_img:"", descrip:"", title_descript:""},
         {b_img_class:"", title_img:"", descrip:"", title_descript:""},
         {b_img_class:"", title_img:"", descrip:"", title_descript:""}
         ]}
         */
        /*this.fnInit = function(){
            console.log("INITIALISATION");
            $sidescroll.init();
        };
        angular.element(document).ready(function () {
            console.log('page loading completed');
            $sidescroll.init();
        });*/
        window.setTimeout ( function() { console.log('Test'); $sidescroll.init();}, 0);
    }]);