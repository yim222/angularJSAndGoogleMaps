(function(){
	
	
	'use strict';
	
	angular.module('targetDetails.module')
	.controller('TargetDetailsController',['$scope', 'targetDetailsService',TargetDetailsController]);
	
	function TargetDetailsController($scope, targetDetailsService){
		
		$scope.test1 = "I am scope.test1";
		$scope.testDirective = "I am test directive";
		
	}
	
}());