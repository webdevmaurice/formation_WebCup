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

        var header_display=$('#header_display');
        header_display.flapper({
            width: 7,
            format: null,
            align: 'right',
            padding: ' ',
            chars: null,
            chars_preset: 'alpha',
            timing: 250,
            min_timing: 10,
            threshhold: 100,
            transform: true,
            on_anim_start: null,
            on_anim_end: null
        });

        setTimeout(function(){
            header_display.val('FASTLAP').change();
            var toggle=true;
            setInterval(function(){
                if(toggle){
                    header_display.val('FASTLAP').change();
                }else{
                    header_display.val('').change();
                }
                toggle=!toggle;
                $(".front .top").show();
            },5000);

        },1000);

        $(".front .top").show();

        $(".fastlap").Morphext({
            // The [in] animation type. Refer to Animate.css for a list of available animations.
            animation: "bounceIn",
            // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
            separator: ",",
            // The delay between the changing of each phrase in milliseconds.
            speed: 2000,
            complete: function () {
                // Called after the entrance animation is executed.
            }
        });

    }]);