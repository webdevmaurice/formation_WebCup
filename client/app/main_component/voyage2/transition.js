/**
 * Created by ballgobina on 13/04/2016.
 */
angular.module('teleportation')
    .controller('voyage2',['$window', function voyage2 ($window) {
        this.leftToRight = -1;
        this.fnLeft = function(){

            console.log(this.leftToRight);
            if(this.leftToRight == -1 || this.leftToRight == 1){
                this.leftToRight = 0;
                /*window.setTimeout ( function() {
                    document.getElementsByClassName("side")[0].style.animationName="slide";
                    document.getElementsByClassName("side")[0].style.animationDuration="2.5s";
                    document.getElementsByClassName("side")[0].style.animationTimingFunction="ease-in-out";
                    document.getElementsByClassName("side")[0].style.animationIterationCount="1";
                    document.getElementsByClassName("side")[0].style.animationFillMode="forwards";

                    document.getElementsByClassName("side")[1].style.animationName="slide";
                    document.getElementsByClassName("side")[1].style.animationDuration="2.5s";
                    document.getElementsByClassName("side")[1].style.animationTimingFunction="ease-in-out";
                    document.getElementsByClassName("side")[1].style.animationIterationCount="1";
                    document.getElementsByClassName("side")[1].style.animationFillMode="forwards";

                },0);*/
            }
            else{
                this.leftToRight = 1;
               /* window.setTimeout ( function() {
                    document.getElementsByClassName("side")[0].style.animationName="slide";
                    document.getElementsByClassName("side")[0].style.animationDuration="2.5s";
                    document.getElementsByClassName("side")[0].style.animationTimingFunction="ease-in-out";
                    document.getElementsByClassName("side")[0].style.animationIterationCount="1";
                    document.getElementsByClassName("side")[0].style.animationFillMode="forwards";
                    document.getElementsByClassName("side")[0].style.animationDirection="reverse";

                    document.getElementsByClassName("side")[1].style.animationName="slide";
                    document.getElementsByClassName("side")[1].style.animationDuration="2.5s";
                    document.getElementsByClassName("side")[1].style.animationTimingFunction="ease-in-out";
                    document.getElementsByClassName("side")[1].style.animationIterationCount="1";
                    document.getElementsByClassName("side")[1].style.animationFillMode="forwards";
                    document.getElementsByClassName("side")[1].style.animationDirection="reverse";

                },0);*/
            }
            console.log(this.leftToRight);
            console.log("********************");
        };
    }]);