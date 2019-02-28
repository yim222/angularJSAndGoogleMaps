(function(){
	
	angular.module("posts.module")
	.directive("postsDirective", postsDirective);
	
	
	function postsDirective(){
		
		var directive = {
				
				 templateUrl: "scripts/otherFeatures/posts/posts.html",
		         restrict: "E",
	            controller: "PostsController"
				
		}
		return directive;
		
	}
	
}());