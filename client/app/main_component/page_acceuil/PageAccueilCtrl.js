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
            $('a.link--manko').trigger('mouseover');
        }, 3000);
    }]);