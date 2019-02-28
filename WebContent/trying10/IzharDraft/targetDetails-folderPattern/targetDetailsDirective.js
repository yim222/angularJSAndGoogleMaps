(function(){
	
	angular.module("targetDetails.module")
	.directive("targetDetailsDirective", targetDetailsDirective);
	
	
	function targetDetailsDirective(){
		
		var directive = {
				
				 templateUrl: "scripts/otherFeatures/targetDetails/targetDetails.html",
		         restrict: "E",
	            controller: "TargetDetailsController"
				
		}
		return directive;
		
	}
	
}());