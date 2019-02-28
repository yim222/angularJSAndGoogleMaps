(function(){
	
	angular.module("keywords.module")
	.directive("keywordsDirective", keywordsDirective);
	
	
	function keywordsDirective(){
		
		var directive = {
				
				 templateUrl: "scripts/otherFeatures/keywords/keywords.html",
		         restrict: "E",
	            controller: "KeywordsController"
				
		}
		return directive;
		
	}
	
}());