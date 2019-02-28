(function(){
	
	angular.module("mainAreaFeatures.module")
	.directive("mainAreaFeaturesDirective", mainAreaFeaturesDirective);
	
	
	function mainAreaFeaturesDirective(){
		
		var directive = {
				
				 templateUrl: "scripts/otherFeatures/mainAreaFeatures/mainAreaFeatures.html",
		         restrict: "E",
	            controller: "mainAreaFeaturesController"
				
		}
		return directive;
		
	}
	
}());