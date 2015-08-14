'use strict';

angular.module('sgb-screen-tour', ['megazord'])
    .controller('sgb-screen-tour-controller', ['$stateParams', '_screen', '_screenParams', '$scope','$ionicSlideBoxDelegate', 
    			function ($stateParams, _screen, _screenParams, $scope, $ionicSlideBoxDelegate) {

        //Obtain parameters from config file
        _screen.initialize($scope, _screenParams);

        $scope.slides = $stateParams.data; 

        //Show icons if both selected
        $scope.reduceImage = $scope._screenParams.previousIcon && $scope._screenParams.nextIcon; 

        $scope.next = function() {
    		$ionicSlideBoxDelegate.next();
  		};
  		$scope.previous = function() {
    		$ionicSlideBoxDelegate.previous();
  		};
    }]);