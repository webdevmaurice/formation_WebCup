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