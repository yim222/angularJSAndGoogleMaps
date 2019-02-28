(function(){
	
	
	'use strict';
	
	angular.module('targetDetails.module')
	.controller('TargetDetailsController',['$scope', 'targetDetailsService',TargetDetailsController]);
	
	function TargetDetailsController($scope, targetDetailsService){
		
		$scope.test1 = "I am scope.test1";
		$scope.testDirective = "I am test directive";
		$scope.html1 = '<h2>HTML readed?</h2>';
		
		$scope.data = targetDetailsService.data; 
		$scope.isVla = true;//for vla viewing it's need to be true. 
		//alert(data.name)
		 
	}
	
}()); 