angular.module('teleportation')
    .controller('PageAccueilCtrl',[function MyAccountCtrl () {
        console.log("PageAccueilCtrl");
        var vm = this;
        vm.pageClass = "page-acceuil";
    }]);



window.onload = function() {

    jQuery('#page_home').vegas({
        slides: [
            { src: 'img/slide1.jpg' },
            { src: 'img/slide2.jpg' },
            { src: 'img/slide3.jpg' }
        ],
        delay: 7000,
        timer: false,
        shuffle: true,
        transition: 'slideDown2',
        transitionDuration: 2000
    });
};