angular.module('teleportation')
    .controller('PageAccueilCtrl',['$http',function MyAccountCtrl ($http) {
        console.log("PageAccueilCtrl");
        var vm = this;
        vm.pageClass = "page-acceuil";

        var root = GetSiteRoot();

        $("#accueil").vegas({
            slides: [
                { src: root+'/client/app/main_component/page_acceuil/img/slide1.jpg'},
                { src: root+'/client/app/main_component/page_acceuil/img/slide2.jpg'},
                { src: root+'/client/app/main_component/page_acceuil/img/slide3.jpg'}
            ],
            init: function (globalSettings) {
                console.log("Init");
            },
            play: function (index, slideSettings) {
                console.log("Play");
            },
            walk: function (index, slideSettings) {
                console.log("Slide index " + index + " image " + slideSettings.src);
            }
        });
    }]);


function GetSiteRoot()
{
    var rootPath = window.location.protocol + "//" + window.location.host + "/";
    if (window.location.hostname == "localhost")
    {
        var path = window.location.pathname;
        if (path.indexOf("/") == 0)
        {
            path = path.substring(1);
        }
        path = path.split("/", 1);
        if (path != "")
        {
            rootPath = rootPath + path + "/";
        }
    }
    return rootPath;
}