(function(){
	
	
	'use strict';
	
	angular.module('keywords.module')
	.controller('KeywordsController',['$scope', 'keywordsService',KeywordsController]);
	
	function KeywordsController($scope, keywordsService){
		
		$scope.pageType ="";//keywords / mainDashboard
		$scope.test1 = "I am scope.test1";
		$scope.testDirective = "I am test directive - in KEYWORDS";
		$scope.data = keywordsService.data;
	}
	
}());