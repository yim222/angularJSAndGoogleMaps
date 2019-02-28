/**
 * This service handle the add new marker execution - Clean version
 * 
 */

(function () {//for make it invoke after the document ready

	//Service construct
	angular.module('maiseApp').service("addNewMarkerService",["infowindowsTemplatesService",
                                                          "TargetsUtilsService",
                                                          "$compile",
                                                          
                                                            addNewMarkerService]);
	function addNewMarkerService(infowindowsTemplatesService,TargetsUtilsService, $compile){
		
		console.log("addNewMarkerService, IN");
		
		//Save the new marker with it's details.(The details preparation happen at the controller.)
		this.saveNewMarker = function(targetDetails, title, description, targetId, associatedTargets, note,
				coordinates, scope,mapMarkersThings ){
			
			//get the right target...
			targets = TargetsUtilsService.getCasesTargets();
			
			target = TargetsUtilsService.getTargetById(targetId, TargetsUtilsService.getCasesTargets());
			
			//alert for exception if taget didn't choosed: 
			if(target == undefined){
				alert("Please choose specific target");
			}
			
			//create marker (of the target not google) object from the parameters before send it to generate
			var newMarker = { title: title, description: description, targetId : targetId, associatedTargets: associatedTargets,
					note:{text:note},coordinates : coordinates};
			
			//just for convience - assign the right coordinates value to local var
			var coordinates =newMarker.coordinates;
			
			//trying - for preparng it to the note edit.
			markerIssues ={};
			
			//if undefined we can't use the value
			if (!newMarker.note  )
			{
				//alert("undefined")
				markerIssues = {text :{	dynamicPart :"" }};
				//alert("dasdsa - " +  markers[i].note.text);
			}
			else{
				
				markerIssues = {text :{	dynamicPart: {note :newMarker.note.text} }}; 
			}
			
			//adding the details to the array
			mapMarkersThings.push(markerIssues);
			
			index = mapMarkersThings.length-1;
			/////trying End
			
			
			//add it to the current js - frontend object of targets[], 
			//assign to its object the value of newMarker
			target.markersLists.manuallyAdded.push(newMarker);
			
			//send it to the server
			console.log("ToDo: Sending newMarker to the server...");
			
			//Generate info window with the target, title, description, assoociated targets, 
			var infoText = infowindowsTemplatesService.toManuallyAddedInfoTemplate(newMarker, target, index);
						
			//create the marker with the specific coordiantes and icon.
			
			var markerIcon ={};
			markerIcon = "images/map/map_s_marker_reg.png";//  to add to the option 
			var markerOption = {position:coordinates, icon : markerIcon}; //to create the option for the marker
			this.fullyNewMarker  =   new google.maps.Marker(markerOption); // this the variable that should be given
			//trying
			//alert(infoText.dynamicPart.note);
			var wholeText = {startingPart: infoText.startingPart,dynamicPart:{note: infoText.dynamicPart.note} , endingPart : infoText.endingPart  }
			infoText = infoText.startingPart + infoText.dynamicPart.note + infoText.endingPart;
			//temporary style to the infowindow
			infoText = "<div style = 'background-color:#244b6f; color: #ffffff' >" + infoText + "</div>";

			
			//create infowindow
			this.infowindow = new google.maps.InfoWindow({
				
				
		        maxWidth:300
		        });
			//compile the var that with ng-repeat
			var compiled = $compile(infoText)(scope);
    				      //    scope.$apply();
			this.infowindow.setContent( compiled[0] );
			
			
			//assign the values to the markerIssues: - trying ***
			//...Todo
			
			markerIssues = {infowindow: this.infowindow, text :{startingPart: wholeText.startingPart, endingPart : wholeText.endingPart,
				dynamicPart :{note: wholeText.dynamicPart.note } }
			,targetDetails: target,
			markerDetails: newMarker
			,editNote: false };
			//Adding the new marker to the mapMarkers[] issues
			//add the relevant data to the array
			mapMarkersThings[index]  = markerIssues;//
    				      
    				   
		}//end of saveMarker(...)
		
		
	};//);//end of the service
}());