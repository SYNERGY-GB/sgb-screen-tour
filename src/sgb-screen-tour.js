'use strict';

angular.module('sgb-screen-tour', ['megazord'])
    .controller('sgb-screen-tour-controller', ['$stateParams', '_screen', '_screenParams', '$scope','$ionicSlideBoxDelegate', 
    			function ($stateParams, _screen, _screenParams, $scope, $ionicSlideBoxDelegate) {

        //Obtain parameters from config file
        _screen.initialize($scope, _screenParams);

        //Obtain screen data
        $scope.slides = $stateParams.data; 

        //Show icons if both selected
        $scope.reduceImage = $scope._screenParams.previousIcon && $scope._screenParams.nextIcon; 

        //Current text is the first slide text
        $scope.desc = $scope.slides[0]?$scope.slides[0].desc : undefined; 

        //Change text when slide changes
        $scope.changeText = function (slide) {
          $scope.desc = $scope.slides[$ionicSlideBoxDelegate.currentIndex()].desc; 
        };

        $scope.next = function() {
      		$ionicSlideBoxDelegate.next();
    		};
    		$scope.previous = function() {
      		$ionicSlideBoxDelegate.previous();
    		};

    }]);