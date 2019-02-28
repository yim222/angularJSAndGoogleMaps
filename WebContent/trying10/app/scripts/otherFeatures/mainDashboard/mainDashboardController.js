(function(){
	
	
	'use strict';
	
	angular.module('mainDashboard.module')
	.controller('MainDashboardController',['$scope', 'mainDashboardService',MainDashboardController]);
	
	function MainDashboardController($scope, mainDashboardService){
		$scope.x2 = "showMe";
		$scope.test1 = "I am mainDashboard scope.test1";
		$scope.testDirective = "I am test mainDashboard directive";
		
	}
	
}());