/**
 * Created by Hashim on 4/12/2016.
 */
angular
    .module('radioDemo1', ['ngMaterial'])
    .controller('AppCtrl', function($scope) {
        $scope.selectedMap = 'comoros';
        $scope.avatarData = [{
            id: "avatars:svg-1",
            title: 'COMORE',
            value: 'comoros'
        },{
            id: "avatars:svg-2",
            title: 'avatar 2',
            value: 'avatar-2'
        },{
            id: "avatars:svg-3",
            title: 'avatar 3',
            value: 'avatar-3'
        }];
        $scope.radioData = [
            { label: '1', value: 1 },
            { label: '2', value: 2 },
            { label: '3', value: '3', isDisabled: true },
            { label: '4', value: '4' }
        ];
        $scope.submit = function() {
            alert('submit');
        };
        $scope.addItem = function() {
            var r = Math.ceil(Math.random() * 1000);
            $scope.radioData.push({ label: r, value: r });
        };
        $scope.removeItem = function() {
            $scope.radioData.pop();
        };
    })
    .config(function($mdIconProvider) {
        $mdIconProvider.iconSet("avatars", 'icons/avatar-icons.svg',128);
    });
