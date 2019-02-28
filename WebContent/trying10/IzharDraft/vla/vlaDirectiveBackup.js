(function(){
	
	angular.module("vla.module")
	.directive("vlaDirective", vlaDirective);
	
	
	function vlaDirective(){
		
		var directive = {
				
				 templateUrl: "scripts/otherFeatures/vla/vla.html",
		         restrict: "E",
	            controller: "VlaController"
				
		}
		return directive;
		
	}
	
}());