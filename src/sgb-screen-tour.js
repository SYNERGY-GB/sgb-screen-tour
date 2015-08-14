'use strict';

angular.module('sgb-screen-tour', ['megazord'])
    .controller('sgb-screen-tour-controller', ['$stateParams', '_screen', '_screenParams', '$scope','$ionicSlideBoxDelegate', 
    			function ($stateParams, _screen, _screenParams, $scope, $ionicSlideBoxDelegate) {

        _screen.initialize($scope, _screenParams);
        $scope.slides = $stateParams.data; 
        $scope.previousIcon = _screenParams.previousIcon; 
        $scope.nextIcon = _screenParams.nextIcon; 

        //Show pager depending on user choice
        $scope.showPager = _screenParams.showProgress;

        //Show icons if both selected
        $scope.reduceImage = $scope.previousIcon && $scope.nextIcon; 

        $scope.next = function() {
    		$ionicSlideBoxDelegate.next();
  		};
  		$scope.previous = function() {
    		$ionicSlideBoxDelegate.previous();
  		};
    }]);