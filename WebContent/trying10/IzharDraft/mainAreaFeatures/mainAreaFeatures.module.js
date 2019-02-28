(function () {
    'use strict';
    angular.module('mainAreaFeatures.module',['ngRoute']);
    
    angular.module('mainAreaFeatures.module')  .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
        
        when('/aaa', {//define to each URL template and controller properly.
           templateUrl: 'aaa.htm',
           controller: 'MainAreaFeaturesController'
          
        }).
       
        
        otherwise({
           redirectTo: '/'
        });
     }]);
     

    angular.module("mainAreaFeatures.module")
	.directive("mainAreaFeaturesDirective", mainAreaFeaturesDirective);
	
	
	function mainAreaFeaturesDirective(){
		
		var directive = {
				
				 templateUrl: "app/scripts/otherFeatures/mainAreaFeatures/mainAreaFeatures.html",
		         restrict: "E",
	            controller: "mapCtrl"
				
		}
		return directive;
		
	}
	var app = angular.module('mainAreaFeatures.module'
       			);
       	app.config(function($routeProvider){
       		$routeProvider.when("/aaa",{
       			
       			
       			templateUrl: "aaa.htm"
       				,controller:"MainAreaFeaturesController"
       		});
       		
       		
       	});

}());


   