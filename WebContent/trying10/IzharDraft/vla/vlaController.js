(function(){
	
	
	'use strict';
	
	angular.module('vla.module')
	.controller('VlaController',['$scope','$sce', '$compile', 'vlaService',VlaController]);
	
	function VlaController($scope, $sce, $compile, vlaService){
		
		$scope.test1 = "I am scope.test1";
		$scope.testDirective = "I am test directive from VLA";
		$scope.testFunc1 = function(){
			console.log("ads");
			alert("hi");
		}
		vlaService.test1($scope);
		vlaService.test2($scope);
		content = {
				name : " am text", img : "img", id :3
		};
		$scope.sendDataToServer = vlaService.sendDataToServer;
				
				
		
		$scope.html4 = vlaService.doCircleLine(250,550, "down", content);
		$scope.html5 = vlaService.doLineOfCircleLines(300, 250,5,60, "", "");
		$scope.output1 = vlaService.returnFunc();
		console.log($scope.output1);
		$scope.html6 = vlaService.doCircleLine(15,260, "down", "");
		var obj1 ={};obj1 =  vlaService.data;
		$scope.html7 = $sce.trustAsHtml(vlaService.doVlaScheme(600,450,obj1));
		//$scope.html7 = $compile($scope.html7)($scope);//var temp = $compile(btnhtml)($scope);
		$scope.vlaScheme = vlaService.doVlaScheme(600,450,obj1);
		
		$scope.html8 = vlaService.showImg();
		$scope.html9 = '<defs>' 
	   	+'<clipPath id="circleView3">'     
	    +'<circle cx="250" cy="125" r="50" fill="#FFFFFF" /> '                   
	    +'</clipPath>'    
	    +'</defs>'
	    +'<image id = "img1" width="500" height="250" xlink:href="images/monkey.jpg" x="10" y="10" '
	    +' clip-path = "url(#circleView3)" ></image>';
		//$scope.trustedHtml = $sce.trustAsHtml($scope.html9);
		$scope.trustedHtml = $sce.trustAsHtml($scope.html9);
		  $scope.html10 ='<defs>' 
		 +'<pattern id="img112" patternUnits="userSpaceOnUse" x= "0" y = "0" width="200" height="300">' 
		+'<image xlink:href="images/monkey.jpg" x="0" y="-20" width="400" height="400" />'
		+' </pattern>' 
		+'</defs>'
	+'<circle cx="250" cy="130" r="50" fill="url(#img112)" /> ' ;
		  $scope.html10 = $sce.trustAsHtml($scope.html10);
		//{cx: cx, cy: cy, r: r}"
		  $scope.vlaEl = "visible";
		  $scope.html20_1 = vlaService.test3();
		  $scope.html20 =$sce.trustAsHtml($scope.html20_1);
		  
	}
	
}());