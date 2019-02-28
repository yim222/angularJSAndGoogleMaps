/*
 * 
 * > create info window with the target, title, description, assoociated targets, >createAnd Add the marker with the specific coordiantes and infoWindow.
 */

//wrap all into a service - application2.service("izharService",function(){

(function () {
angular.module('maiseApp').service("addNewMarkerService",["$compile",addNewMarkerService]);
function addNewMarkerService($compile){
	
	console.log("addNewMarkerService, IN");
	//>take the above details (title , desc, id, note , assocateds, note) and
	this.saveNewMarker = function(scope, targetDetails, title, description, targetId, associatedTargets, note, coordinates){
		//object for test : 
		var parameters = {targetDetails: targetDetails, title: title, description: description, targetId : targetId, associatedTargets: associatedTargets,
				note:note};
	//create from them object
		var newMarker = { title: title, description: description, targetId : targetId, associatedTargets: associatedTargets,
				note:note,coordinates : coordinates};
		//***coordinates and target
		//var coordinates = {lat:39.399872, lng: -8.224454};
		var coordinates =newMarker.coordinates;
		//newMarker.coordinates = coordinates;
		//logging
		console.log("The parameters from objectt is :");
		for(var i in parameters){		
			console.log(i +" = " +parameters[i]);		
		}
		console.log("target name = " + targetDetails.name);
		
		
		//add it to the current js object of targets[], 
		
		//get the right target...
		var target = getTargetbyId(targetId);
		//assign to its object the value of newMarker
		console.log(target.name + " is the target");
		
		console.log("before pushhing the manually added array is : ");
		for(var i= 0 ;i <target.markersLists.manuallyAdded.length;i++ ){
			
			console.log(target.markersLists.manuallyAdded[i]);
		}
		
		target.markersLists.manuallyAdded.push(newMarker);
		console.log("after pushhing the manually added array is : ");
		for(var i= 0 ;i <target.markersLists.manuallyAdded.length;i++ ){
			
			console.log(target.markersLists.manuallyAdded[i]);
		}
		
		//send it to the server
		console.log("ToDo: Sending newMarker to the server...");
		
		//return newMarker; - no neeading to return something (I think)


		//create info window with the target, title, description, assoociated targets, 
	//	var infoText = toManuallyAddedInfoTemplate(newMarker, targetDetails);
	var infoText =" <div><img height='42'/>"
	 +"<h2>Target name -</h2>"
		+"<p>title:testing </p>"
	+"<p>Description:</p>"
	+"<p>Associated Target (id's - todo get target details by ID)</p>"
	+"<p>note</p>"
	+"<p ng-click='test1()'>tetsttt<p>"
	+"<div ng-repeat='ta in tl'>{{ta}}</div>"
		console.log("infoText = " + infoText);
		
		//create And Add the marker with the specific coordiantes and infoWindow.
		scope.tl=["ttt","tfff","dfghj"];
		  var compiled = $compile(infoText)(scope);
		var markerIcon ={};
		markerIcon = "images/map/map_s_marker_reg.png";//  to add to the option 
		var markerOption = {position:coordinates, icon : markerIcon}; //to create the option for the marker

		
		//create the new marker 
		this.fullyNewMarker  =   new google.maps.Marker(markerOption); // this the variable that should be given
		
		//create infowindow
		this.infowindow = new google.maps.InfoWindow({//// this also should be given

		    content:compiled[0].innerHTML 
	        ,maxWidth:300
		});
		google.maps.event.addListener(
          newMarker,
          'click',
          (function( newMarker , scope, compiled, tl ){
            return function(){
              scope.tl=tl;//to make data available to template
              scope.$apply();//must be inside write new values for each marker
			  console.log(compiled);
              //infowindow.setContent( compiled[0].innerHTML);
              infowindow.open( scope.map , newMarker);
            };//return fn()
          })(newMarker , scope, compiled,scope.tl)
        );//addListener
		
		
		
		
		
		
		
		//to the controller and then the following action should happen inside... 
		
		
		
		/*
		 *  ALL of this code is need to be inside the conroller... 
		
		$scope.fullyNewMarker = addNewMarkerService.fullyNewMarker;// - to create theMarker
		var infowindow = addNewMarkerService.infowindow;
		
		//adding to each marker an infowindow
		$scope.addInfowindowToMarker($scope.marker2,$scope.infowindow );
		
		
		
		
		//Todo -- createAnd Add the marker with the specific coordiantes and infoWindow.
		
		 */
		
		
		
	}
	
	this.xxx = function(){
		
	}
	function getTargetbyId(id){

		//Todo -- add it to the current js object of targets[], 
		var target ={
				
		};
		//get the right target...
		
		console.log("addToTagetsObj()>>>\n" + target.name + " = target.name ");
		
		for(var i = 0 ; i < targets.length; i++){
			console.log(targets[i].name + " = targets array");
		}	
		//assign to its object the value of newMarker
		//target = targets.find(findTargetById);
		target = targets.find(function(target){
			
			return target.targetId === id;
			
		});
		return target;
	}
	
	
};//);//end of the service
}());