'use strict';

angular.module('sgb-screen-tour', ['megazord'])
    .controller('sgb-screen-tour-controller', ['$stateParams', '_screen', '_screenParams', '$scope', 
    			function ($stateParams, _screen, _screenParams, $scope) {

        _screen.initialize($scope, _screenParams);
        $scope.slides = $stateParams.data; 
        $scope.goTo = _screenParams.goTo; 

    }]);