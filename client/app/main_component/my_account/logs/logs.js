/**
 * Created by Hashim on 4/13/2016.
 */
(function () {
    var DemoCtrl, bind = function (fn, me) {
        return function () {
            return fn.apply(me, arguments);
        };
    };
    angular.module('app', [
        'ngAnimate',
        'touk.typewriter'
    ]).controller('DemoCtrl', [
        '$scope',
        DemoCtrl = function () {
            DemoCtrl.prototype.delay = 100;
            DemoCtrl.prototype.lines = [
                'Lorem ipsum dolor sit amet justo.',
                ''
            ];
            function DemoCtrl($scope) {
                this.check = bind(this.check, this);
                $scope.$on('Typewriter:done', this.check);
            }
            DemoCtrl.prototype.check = function (event, value) {
                return this.done = value;
            };
            return DemoCtrl;
        }()
    ]);
}.call(this));