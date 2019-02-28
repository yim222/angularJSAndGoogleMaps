(function(){
	
	
	'use strict';
	
	angular.module('mainAreaFeatures.module')
	.controller('MainAreaFeaturesController',['$scope', 'mainAreaFeaturesService',MainAreaFeaturesController]);
	
	function MainAreaFeaturesController($scope, mainAreaFeaturesService){
		
		$scope.test1 = "I am scope.test1";
		$scope.testDirective = "I am test directive";
		
	}
	
}());