(function(){
	
	angular.module("mainDashboard.module")
	.directive("mainDashboardDirective", mainDashboardDirective);
	
	
	function mainDashboardDirective(){
		
		var directive = {
				
				 templateUrl: "scripts/otherFeatures/mainDashboard/mainDashboard.html",
		         restrict: "E",
	            controller: "MainDashboardController"
				
		}
		return directive;
		
	}
	
}());