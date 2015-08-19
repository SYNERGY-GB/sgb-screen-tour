(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
