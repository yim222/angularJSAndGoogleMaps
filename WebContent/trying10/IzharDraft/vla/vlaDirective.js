(function(){
	
	angular.module("vla.module")
	.directive("vlaDirective",['$compile', vlaDirective]);
	
	
	function vlaDirective($compile){
		
		var directive = {
				
				 templateUrl: "scripts/otherFeatures/vla/vla.html",
		         restrict: "E",
	            controller: "VlaController"
				
		}
		return directive;
		
	}
	angular.module("vla.module").directive('compile', ['$compile', function ($compile) {
		  return function(scope, element, attrs) {
			    scope.$watch(
			        function(scope) {
			            return scope.$eval(attrs.compile);
			        },
			        function(value) {
			            element.html(value);
			            $compile(element.contents())(scope);
			        }
			    );
			  };
			}]);
	/*
	 * .directive('compile', ['$compile', function ($compile) {
  return function(scope, element, attrs) {
    scope.$watch(
        function(scope) {
            return scope.$eval(attrs.compile);
        },
        function(value) {
            element.html(value);
            $compile(element.contents())(scope);
        }
    );
  };
}])
	 */
}());