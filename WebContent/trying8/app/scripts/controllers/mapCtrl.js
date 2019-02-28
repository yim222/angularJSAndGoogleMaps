/**
 * Izhar was cleaned this controller.- many todos. 30/3/17
 */
(function () {
    angular
        .module("maiseApp")
        .controller("mapCtrl",
                    ["$scope","$compile","$timeout","addNewMarkerService", "positioningMapEls","TargetsUtilsService",
                     "infowindowsTemplatesService",
                     mapCtrl]);

    function mapCtrl($scope, $compile, $timeout,addNewMarkerService,positioningMapEls, TargetsUtilsService,
    		infowindowsTemplatesService) {
    	/**
    	 * //global variables:
    	 */
    	
    	
    	//Setting the state of differents sysMessage(u need to do it with each or something else)
    	//Maybe not need to be $scope
    	   $scope.tl=['Jani','Hege','Kai'];
    	$scope.sysMessage2 = false ; 
    	
    	//set the state of displaying form1
    	$scope.displayForm1 = false;
    	
    	//containing the new marker details.(maybe should be in other service.
    	$scope.newMarkerDetails = {};
    	   	
    	//globla var for associatedTargetIds
    	$scope.associatedTargetIds = [];//[2,3,4,8];
    	
    	//Global for associated targets array . 
    	$scope.associatedTargets = [];
    	//Assign the targets of the cases(Todo - assign it by function from the targets service
    	$scope.casesTargets = TargetsUtilsService.getCasesTargets();//casesTargets;//
    	//Assign the app's targets:
    	$scope.appTargets = TargetsUtilsService.getAppTargets();//allTargets;//
    	
    	//the choosen targetid for adding to it marker
    	$scope.choosenTargetId =null;
    	
    	//Containing the maximum bounds of the map. 
    	var bounds = new google.maps.LatLngBounds();
    	
    	//Todo - object for containing the associated targets before pass them to saveNewMarker
    	/**
    	 * //Functions: 
    	 */
    	
    	
    	//check if the associated target id exist at the ids of the associated targets id's array. 
    	$scope.checkIfExist = TargetsUtilsService.checkIfExist;
    	//function for adding or removing values from the AssociatedTargets id's
    	$scope.prepareIdsArr = TargetsUtilsService.prepareIdsArr;
    	
    	//Implementing the map:
    	$scope.initMap = function(){
    		
    		//The default center 
    		var center = {lat: 0, lng: 0};
    			
    		
			
    		//The style of the map//Todo - should be in other service of styles
    		var styles = [
                          {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
                          {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
                          {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
                          {
                            featureType: 'administrative.locality',
                            elementType: 'labels.text.fill',
                            stylers: [{color: '#d59563'}]
                          },
                          {
                            featureType: 'poi',
                            elementType: 'labels.text.fill',
                            stylers: [{color: '#d59563'}]
                          },
                          {
                            featureType: 'poi.park',
                            elementType: 'geometry',
                            stylers: [{color: '#263c3f'}]
                          },
                          {
                            featureType: 'poi.park',
                            elementType: 'labels.text.fill',
                            stylers: [{color: '#6b9a76'}]
                          },
                          {
                            featureType: 'road',
                            elementType: 'geometry',
                            stylers: [{color: '#38414e'}]
                          },
                          {
                            featureType: 'road',
                            elementType: 'geometry.stroke',
                            stylers: [{color: '#212a37'}]
                          },
                          {
                            featureType: 'road',
                            elementType: 'labels.text.fill',
                            stylers: [{color: '#9ca5b3'}]
                          },
                          {
                            featureType: 'road.highway',
                            elementType: 'geometry',
                            stylers: [{color: '#746855'}]
                          },
                          {
                            featureType: 'road.highway',
                            elementType: 'geometry.stroke',
                            stylers: [{color: '#1f2835'}]
                          },
                          {
                            featureType: 'road.highway',
                            elementType: 'labels.text.fill',
                            stylers: [{color: '#f3d19c'}]
                          },
                          {
                            featureType: 'transit',
                            elementType: 'geometry',
                            stylers: [{color: '#2f3948'}]
                          },
                          {
                            featureType: 'transit.station',
                            elementType: 'labels.text.fill',
                            stylers: [{color: '#d59563'}]
                          },
                          {
                            featureType: 'water',
                            elementType: 'geometry',
                            stylers: [{color: '#17263c'}]
                          },
                          {
                            featureType: 'water',
                            elementType: 'labels.text.fill',
                            stylers: [{color: '#515c6d'}]
                          },
                          {
                            featureType: 'water',
                            elementType: 'labels.text.stroke',
                            stylers: [{color: '#17263c'}]
                          }
                        ];
    		
    		//Creating object of the map options.
    		var mapOptions = {minZoom:1, maxZoom:10, center : center, styles: styles };
    		 $scope.map = new google.maps.Map(document.getElementById('mainMap'), mapOptions);
    		
    		 console.log("Creating map...");
    		
    		
    		
    		 
    		 
    		
    		 $scope.runOnEachTarget($scope.casesTargets);
    		 $scope.map.fitBounds(bounds);
    		
    		 

    		 		 
    		 //adding the HTML elements to the map:
    		 positioningMapEls.main($scope.map);
    		//create search box - Todo - 1-move all of this to other function like others(see below the
    		 //end of the execution of serach box. 
    		 //html elements at this map. 2-settle the issue of the center.
    		 //3-remove the unnecessary code
    		 
	        // Create the search box and link it to the UI element. 
	        //here u assign the value from the input to JS var
	        var input = document.getElementById('pac-input');
	        //here u define this var (and its connected element) as search-box
	        var searchBox = new google.maps.places.SearchBox(input);
    	        
    	        //here we push it on the map (if not it's won't sit on the map just seperated)
    	        $scope.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    	        // Bias(להטות) the SearchBox results towards current map's viewport.
    	        $scope.map.addListener('bounds_changed', function() {//I think bounds_changed' it's the name of that listner
    	        	//Not sure but think it's assign the current bound to searchBox
    	          searchBox.setBounds($scope.map.getBounds());
    	        });

    	        $scope.markers = [];
    	        // Listen for the event fired when the user selects a prediction and retrieve
    	        // more details for that place.
    	        
    	        //registe another listener for handle the changes
    	        searchBox.addListener('places_changed', function() {
    	          var places = searchBox.getPlaces();

    	          if (places.length == 0) {
    	            return;
    	          }

    	          // Clear out the old markers.
    	          $scope.markers.forEach(function(marker) {
    	            marker.setMap(null);
    	          });
    	          $scope.markers = [];

    	          // For each place, get the icon, name and location.
    	          var bounds2 = new google.maps.LatLngBounds();
    	          places.forEach(function(place) {
    	            if (!place.geometry) {
    	              console.log("Returned place contains no geometry");
    	              return;
    	            }
    	            var icon = {
    	              url: place.icon,
    	              size: new google.maps.Size(71, 71),
    	              origin: new google.maps.Point(0, 0),
    	              anchor: new google.maps.Point(17, 34),
    	              scaledSize: new google.maps.Size(25, 25)
    	            };

    	            // Create a marker for each place.
    	            $scope.markers.push(new google.maps.Marker({
    	              map: $scope.map,
    	              icon: icon,
    	              title: place.name,
    	              position: place.geometry.location
    	            }));

    	            if (place.geometry.viewport) {
    	              // Only geocodes have viewport. - didn't get it. exactly
    	              bounds2.union(place.geometry.viewport);// if it have good lat-lag - get its viewport
    	            } else {
    	              bounds2.extend(place.geometry.location);//if not extends its general (not accuary ) point. I think. 
    	            }
    	          });
    	        
	    			
    	        });//End of search box handling. 
    	        
    	        
    	
    	}//end of init 
    	
    	
    	
    	//Services functions:(todo - organize)
    	
    	//Connect the infowindow to the marker //todo - maybe to create service for 
    	//markers and infowindow creating
    	$scope.addInfowindowToMarker = function(marker, infowindow){
    		
    		
    	
    			
    			
    			marker.addListener('click', function() {
        			
    				 
    	          infowindow.open(marker.getMap(), marker);
	        });
    	}
    	
    	//function for organize all the markers and their info-windows
		$scope.displayAllMarkers = function(markers, targetDetails){//accepet array of markers
			
			
			
			for(var i = 0 ; i < markers.length; i++){
				/**
				 * Here is the START of handle the specific marker //todo - u can wrap it as another 
				 * function and service (of all markers handling
				 */
				
				//markers[i] is our cute marker!
				
				//declare the marker option
				var markerOption;
				
				//declare the correspond image
				var markerIcon={};
				
				//declare the correspond Data for infowindow. 
				var infoText = "default value";
				
				//set size to all markers://todo - not sure it's work
				
				markerIcon.size = new google.maps.Size(100,100);
				

				//base images url directory
				var imgUrl = "images/map/";
				
				//general implementation for all types:
				
				//set position and map:
				markerOption = {position:markers[i].coordinates, map:$scope.map};
				
				//log the current type we handle
				console.log(targetDetails.currentType + " group markers")
				//group type : works, educations, locations, posts, manuallyAdded, events, hometowns
				
				
				if(targetDetails.currentType == "works"){
					
					markerIcon.url = imgUrl + "map_s_work_reg.png";
					infoText = toWorkInfoTemplate(markers[i], targetDetails);
				}
				else if(targetDetails.currentType == "educations"){
					
					markerIcon.url = imgUrl + "map_s_edu_reg.png";
					infoText = toEducationInfoTemplate(markers[i], targetDetails);
					
				}
				
				
				else if(targetDetails.currentType == "locations"){
					
					markerIcon.url = imgUrl + "map_s_checkin_reg.png";
					infoText = tolocationInfoTemplate(markers[i], targetDetails);
					
				}else if(targetDetails.currentType == "posts"){
					
					markerIcon.url = imgUrl + "map_s_post_reg.png";
					infoText = toPostInfoTemplate(markers[i], targetDetails);
					
				}else if(targetDetails.currentType == "manuallyAdded"){
					
					markerIcon.url = imgUrl + "map_s_marker_reg.png";
					infoText = toManuallyAddedInfoTemplate(markers[i], targetDetails);
					
				}else if(targetDetails.currentType == "events"){
					
					markerIcon.url = imgUrl + "map_s_event_reg.png";
					infoText = toEventInfoTemplate(markers[i], targetDetails);
					
				}else if(targetDetails.currentType == "hometowns"){
					
					markerIcon.url = imgUrl + "map_s_home_reg.png";
					infoText = toHometownInfoTemplate(markers[i], targetDetails);
				}
				
				
				//adding the image to the markerOption
				markerOption.icon = markerIcon;
				/**
				 * Here is END of handle the specific marker 
				 */
				
				//Creating new marker with the options object
				$scope.marker = new google.maps.Marker(markerOption);
						
				//Creating new infowindow with the prepared infoText
				$scope.infowindow = new google.maps.InfoWindow({
			          content: infoText
			          ,maxWidth:300
			         
			        });
				
				//adding the infowindow to the marker
				$scope.addInfowindowToMarker($scope.marker,$scope.infowindow );
				
				
				//Set the zoom by the most far markers 
				bounds.extend($scope.marker.getPosition());
				
				
				
				
				
				
			}//end of the for
			
			
		
    	     
		}//End of $scope.displayAllMarkers()
		
		
		//fit the bound to contain all markers//todo - put it on service
		$scope.overview = function(){
        	 
    			$scope.map.fitBounds(bounds);
		}
		
		
		
		//Running the adding marker on array of targets
		$scope.runOnEachTarget = function(targets){
			
			//for each target
			for(var i =0 ; i < targets.length; i++){
				
				//take the all lists of the target
				markersLists = targets[i].markersLists;
				
				//Assign the current target name for insert it the details.
				var targetDetails = {id:targets[i].id, name : targets[i].name, imgUrl:targets[i].imgUrl };
				
				
				//for each markers list of the target do the display action
				for(list in markersLists){
					
					targetDetails.currentType = list;
					$scope.displayAllMarkers(markersLists[list], targetDetails);
					
					
					
				}
				
			}
			
			
		}
		
    	
		
      //function for add and save new Marker, use the add marker service : 
		$scope.saveNewMarker = function(targetDetails, title, description, choosenTargetId, associatedTargets,
				note,coordinates){
			$scope.x = addNewMarkerService.saveNewMarker(targetDetails, title, description, choosenTargetId, associatedTargets,
					note, coordinates, $scope);
			//Assigning the marker from the passed service.
			$scope.fullyNewMarker = addNewMarkerService.fullyNewMarker;
			
			//Assigning the infowindow from the service
			var infowindow = addNewMarkerService.infowindow;
			
		

			
			//set the marker on the map
			$scope.fullyNewMarker.setMap($scope.map);
			
			//adding the marker the infowindow
			$scope.addInfowindowToMarker($scope.fullyNewMarker,infowindow );
			
		}
		
		
		//execution of all the actions for save the marker. After the user filled the form. 
		$scope.addMarker = function(save){
			
			/*(targetDetails, title, description, choosenTargetId, associatedTargets,
				note,coordinates)*/
			
			
			//it's with true - for preperation for validation. 
			if (save == true){//Todo - at the implementation it's not needed the target's id and the targets
				//details too - at logic aspect.
				
				//Assign the current assocaited targets by user choosing ids.
				$scope.associatedTargets = TargetsUtilsService.getTargetsById($scope.associatedTargetIds, $scope.appTargets);
				
				
				//Assign the target details of the right target by Id
				targetDetails = TargetsUtilsService.getTargetById($scope.choosenTargetId, $scope.casesTargets);
				alert("Creating new marker");
					$scope.saveNewMarker(targetDetails, $scope.newMarkerDetails.title, 
							$scope.newMarkerDetails.description, $scope.choosenTargetId, $scope.associatedTargets,
							$scope.newMarkerDetails.note,coordinates);
				}
			
				//reset the new marker Details for not saving to the next time/ 
				
				$scope.newMarkerDetails = null;
				
				//reset $scope.associatedTargetIds
				$scope.associatedTargetIds =[];
				
				//close the form
				$scope.displayForm1 = false;
			
		}
		
		//Getting the coordinates by click 
		$scope.getTheCoordinates = function(){
			$scope.listener1 = $scope.map.addListener('click', function(e) {
	        	
		          
				//the click of this point
				coordinates = e.latLng;
				
				
			
				//explore the form after choosing the coordinates.
				//Must with $apply because it's inside bounds of GM object.
				$scope.$apply(function () {
				   
					$scope.displayForm1 = true;
					
					
				  });
				//remove the listener:
				google.maps.event.removeListener($scope.listener1);
		        });
			
			
		}
		
		//Cancel the adding marker (using from the form1)
		$scope.cancelAddMarker = function(){
			alert("cancel!");
			
					$scope.displayForm1 = false;
					
					$scope.newMarkerDetails = null;
			
		}
	
		 //function for trigger the add marker:
        $scope.triggerAddNewMarker = function(){//google.maps.event.removeListener($scope.listener1);
        	//showing the message for choosing 
        	$scope.sysMessage2 = true;
        	
        	
    		
        	//and make it dissapear 
        	$timeout(function(){
    			$scope.sysMessage2 = false;
    			
    			
    		}, 3000);
        	
        	
        	//Running the function definition
        	$scope.getTheCoordinates();
        	
        	
        	
        	
        	
        };
        
        //Setting the choosenTargetId
        $scope.setChoosenTargetId = function (id){
    		
    		$scope.choosenTargetId = id;
    	}
        
       
		/**
		 * Unused functions
		 */
      //running the displayMarker on each of the markers type- seem un used (todo)
		$scope.runOnEachType = function(types){//get object of markersArray
			
			for(type in types){
				console.log(type);
				
				$scope.displayAllMarkers(types[type], type);// - U here - why it's don't work ?? 
				
				//alert(types[type]);
				
			}
			
		}
		//for make iterate over the פונצקיה שלונ/ //todo -seems unused
		$scope.runOnEachLevel = function(){//get object of markersArray
			for(var i = 0; i< activeCases.length;i++){
				for(var j = 0 ; j < activeCases[i].targets.length; j++){
					var types = activeCases[i].targets[j].markersList.types;
					$scope.runOnEachType(types);
					
				}
			}
			
		}
		
		//for place a marker at thiis point. seems unused(use at addmarker that's also seems unused.)
    	function placeMarkerAndPanTo(latLng, map) {
    		
	        var marker = new google.maps.Marker({
	          position: latLng,
	          map: map
	        });
	        
	        
    		
	      }
    	
    	//for enable adding markers - it was for the beginnig. Now it's not used,
		$scope.addNewMarker = function(){
			
			//adding a listner
			$scope.listener1 = $scope.map.addListener('click', function(e) {
				
	        	
		          placeMarkerAndPanTo(e.latLng, $scope.map);
		          //alert(e.latLng);
		        });
	        
			
		}
    	
		
		
		//all of this aren't using right now. unused
		var isAddNewMarker = false;// the status of adding new marker
		$scope.msg = "add new markers";//the message of the button for adding 
		
		//Function for toggling from enable to disable adding markers
		$scope.toggleAddingNewMarker = function(){
			if (!isAddNewMarker){
				
				isAddNewMarker = true;
				$scope.addNewMarker();
				$scope.msg = "U can now enter new markers";
				
				
			}
			else{
				
				isAddNewMarker = false;
				google.maps.event.removeListener($scope.listener1);
				$scope.msg = "add new markers";
				
				
			}
			
		}
		//function that not used
        $scope.toggleVar = function (x){
        	
        	alert ("toggleVar");
        	if ( x == true){
        		x = false;
        	}
        	else{
        		x = true;
        	}
        	
        }
        
		
		
        /**
		 * The execution of the program. Must be last invocatio at this controller.
		 */
        $scope.func4 = function(){
        	
        	
        	//all is work on lat and lng
    		var uluru = {lat: -25.363, lng: 131.044};

    		
    		
    		//set $scope.marker
    		var size = {width: 20,height: 20};
    		var icon = {url: "a.jpg", size : size};
            $scope.marker22 = new google.maps.Marker({
    			//set the position
              position: uluru,
    		  //on what $scope.map.
              map: $scope.map
    		  //,icon: icon // for - custom $scope.marker image
    		 
    	
    		});
    		
        	$scope.marker22.addListener('click', function() {
   			 //creating infowindow
   		
   			$scope.ngObj = "my ngObj";
   			 //alert("compiled0innerHTML = "  +compiled[0]);
   				$scope.infowindow = new google.maps.InfoWindow({
   							  content: ""//$scope.infoText //makeText(markers[i])//worksInfoTemplate//
   								  //"<p> {{objectNg2}}</p>"//-not work
   								  //info windows for the $scope.marker
   							  ///content: "<h1>ahdaklhads</h2>"
   							  //postion is not needed because it's will be attched to $scope.marker.
   							  //maxWidth - optional
   							  ,maxWidth:300
   							 // position: markerPoint
   							});
   			 var infoText =  "<div> <p ng-click = 'func1()'> " +
   			 		"asdasd</p>  <testing123></testing123><p>{{ngObj}}</p></div>";//"<div directive1></div>";//"<div><h1>sdaadsas</h1><div ng-include //= \"'ngInclude1.html'\"></div></div>";
   			var compiled = $compile(infoText)($scope);
   			 $scope.$apply();
   			  $scope.infowindow.setContent(compiled[0]);
   			//adding the info window to the $scope.marker
   			$scope.infowindow.open($scope.marker22.getMap(), $scope.marker22);	
   		 });
        	
        	
        	
        }
		$scope.initMap();
		
		
       

    }//End of the controller
    
  
}());