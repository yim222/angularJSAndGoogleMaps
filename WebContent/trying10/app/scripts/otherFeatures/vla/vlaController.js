(function(){
	
	
	'use strict';
	
	angular.module('vla.module')
	.controller('VlaController',['$scope','$sce', '$compile', 'vlaService',VlaController]);
	
	function VlaController($scope, $sce, $compile, vlaService){
		
		$scope.pageType = '';// available values: vla / mainDashboard
		$scope.svgSize ={height: 0, width: 0};
		if($scope.pageType == 'mainDashboard'){
			$scope.svgSize ={height: 700, width: 1500};
			//alert("vla");
			
		}
		else if($scope.pageType == 'mainDashboard'){
			//alert("not vla");
			$scope.svgSize ={height: 460, width: 1064};
		}
		
		//function for send data to server on hover (toDo)
		$scope.sendDataToServer = vlaService.sendDataToServer;
				
				
		
		//get the object from the service
		var obj1 ={};obj1 =  vlaService.data;
		
		$scope.vlaScheme = vlaService.doVlaScheme(600,450,obj1);
		
		
		  
	}
	
}());