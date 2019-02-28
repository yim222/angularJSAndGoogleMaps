/**
 * This service give some general services of the map 
 * 
 */

(function () {//for make it invoke after the document ready

	//Service construct
	angular.module('maiseApp').service("mapService",["$compile", mapService]);
	
	
	//*********************** Implementation ***************************
	
	function mapService($compile){
		
		
		//Test
		this.test = function(){
			
			alert ("mapService IN");
			
		}
		
		
		//Do cluster from markers[] on the map
		//For this will work u need to import the library at the index
		this.doCluster = function (map, markers, markerCluster){
			//alert("cluster");
			//Building option var - see the docs for further info
			// https://googlemaps.github.io/js-marker-clusterer/docs/reference.html			
			var clusterOption = {
					
					
					imagePath: 'images/map/cluster'//at the directory it's should be name "cluster1.png"
					,gridSize: 200
					,averageCenter: true
					,maxZoom: 5//(number) The maximum zoom level that a marker can be part of a  cluster.
					
			}
			
			//construct the cluster
			markerCluster = new MarkerClusterer(map, markers,
			            
						clusterOption);
			//this.markerCluster2 = markerCluster;
			//alert("markerCluster2 = " + markerCluster);
			return markerCluster;
			
		}
		
		
		
		
		//trying - U here
		this.changeInfoText2 = function(scope,index, newText){
		
		//get the whole text
		newContent = scope.mapMarkersThings[index].text;
		//changing the dynamic part
		newContent.dynamicPart.note =   newText ;
		//newContent.dynamicPart.note = '<h1>hhh</h1>';
		//creating new text var
		newContent2 ="<div>" +  newContent.startingPart + newContent.dynamicPart.note + newContent.endingPart + "</div>";
		
		//compile again the content:
		var compiled2 = $compile(newContent2)(scope);
    				      //    scope.$apply();
					 newContent2 = compiled2[0] ;
		//alert(scope.mapMarkersThings[index].infowindow.content);
		scope.mapMarkersThings[index].infowindow.setContent(compiled2[0]/*newText*/);
		scope.mapMarkersThings[index].editNote = false;
		
		console.log ("setting note");
		targetDetails = scope.mapMarkersThings[index].targetDetails; 
		markerDetails = scope.mapMarkersThings[index].markerDetails;
		
		//to do - targetId need to be just id. 
		message = "Data to send to the server : \n" +
				"target id : "+targetDetails.targetId + " || marker id : "+ markerDetails.markerId + " || note : " + newText ;
		
		console.log (message);
		
		}
		
		// If the map position is out of range, move it back
	       this.checkBounds = function(map) {
	    	  // alert("centerchanges");
				var latNorth = map.getBounds().getNorthEast().lat();
				var latSouth = map.getBounds().getSouthWest().lat();
				var newLat;

				console.log("check bounds " + latNorth  + " " +  latSouth );

				if(latNorth<85 && latSouth>-85)     /* in both side -> it's ok */
					return;
				else {
					if(latNorth>85 && latSouth<-85)   /* out both side -> it's ok */
						return;
					else {

						if(latNorth>85)   
							newLat =  map.getCenter().lat() - (latNorth-85);   /* too north, centering */
						if(latSouth<-85) 
							newLat =  map.getCenter().lat() - (latSouth+85);   /* too south, centering */
					}
					
					
				}

				if(newLat) {
					console.log("current center" + map.getCenter() );
					var newCenter= new google.maps.LatLng( newLat ,map.getCenter().lng() );
					console.log("setting new center" + newCenter);
					map.setCenter(newCenter);
				}	

	      }
		
	};//);//end of the service
}());