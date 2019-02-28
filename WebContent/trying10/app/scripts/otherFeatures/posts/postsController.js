(function(){
	
	
	'use strict';
	
	angular.module('posts.module')
	.controller('PostsController',['$scope', 'postsService',PostsController]);
	
	function PostsController($scope, postsService){
		
		$scope.test1 = "I am scope.test1";
		$scope.testDirective = "I am test directive - in posts page";
		$scope.pageType = "";//avaiable values : mainDashboard / posts
		
		$scope.data = postsService.data;
		$scope.isLongText = postsService.isLongText;
		$scope.isShortText = postsService.isShortText;
		$scope.showMoreMsg = "show more";
		$scope.hideMsg = "hide";
		$scope.testClick = function(a){
			
			
			alert(a);
		}
	}
	
}());