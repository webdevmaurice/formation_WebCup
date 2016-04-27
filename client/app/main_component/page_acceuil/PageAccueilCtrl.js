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