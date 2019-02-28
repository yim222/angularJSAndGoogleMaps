(function () {
    angular
        .module("maiseApp")
        .controller("mapCtrl",
                    ["$scope",
                        mapCtrl]);

    function mapCtrl($scope) {
      
$scope.objectNg = "object from ng";
	        	 var bounds = new google.maps.LatLngBounds();
	        	$scope.initMap = function(){
	        		//trying to implementing the map:
		    		var centerPlace = {lat: 31.768319, lng: 35.213710};//what to with this ? 	
	    		var markerPoint; var setMarker;	
			
		    		var mapOptions = {minZoom:1, maxZoom:10, center : centerPlace,   styles: [
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
          ]};
		    		 $scope.map = new google.maps.Map(document.getElementById('mainMap'), mapOptions);
		    		
		    		
		    		
		    		
		    		// var types = activeCases[0].targets[0].markersList.types;
		    		// $scope.runOnEachType(types);
		    		// $scope.runOnEachLevel(); not work due to not full data
		    		 var myTargets = targets;
		    		 //alert()
		    		 $scope.runOnEachTarget(myTargets);
		    		 $scope.map.fitBounds(bounds);
		    		

		    		 //hometowns[] is the array of the places. now, u should access
		    		 //activeCases[n].targets[n].MarkersList.types.xProperty[]. 
		    		 //and per each property u should run that loop.


		    		//create search box

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
		    	        
			    			
		    	        });
		    		
		    	       /* $scope.overview = function(){
		    	        	 alert("tt");
		    	        	 bounds.extend($scope.marker2.getPosition());
				    			$scope.map.fitBounds(bounds);
		    	          }*/
		    	        
		    	       
	        		
	        	}
	        	//Services functions:(todo - organize)
	        	$scope.addInfowindowToMarker = function(marker, infowindow){
	        		
	        		
	        		marker.addListener('click', function() {
	        	          infowindow.open(marker.getMap(), marker);
        	        });
	        	}
	        	
	        	//function for organize all the markers and their info-windows
				$scope.displayAllMarkers22 = function(markers, targetDetails){//accepet array of markers
					count = 0;
					//alert("displayAllMarkers22  "+count);
					
					for(var i = 0 ; i < markers.length; i++){
						/**
						 * Here is the START of handle the specific marker
						 */
						
						//markers[i] is our cute marker!
						
						//set the marker option
						var markerOption;
						
						//set the correspond image
						var markerIcon;
						
						//declare the correspond Data for infowindow. 
						var infoText = "default value";
						//an object to caontain the icon setting:
						var markerIcon ={};//= "images/a.png";
						//set size to all markers:
						
						markerIcon.size = new google.maps.Size(100,100);
						

						
						var imgUrl = "images/map/";
						//general implemntation for all types:
						
						//set position and map:
						markerOption = {position:markers[i].coordinates, map:$scope.map};
						// targetDetails
					//	console.log(targetDetails.currentType + " group markers")
						//works, educations, locations, posts, manuallyAdded, events, hometowns
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
						//alert("addin marker");
						//markerPoint = markers[i].coordinates;//{lat: markers[i].coordinates.lat, lng: markers[i].coordinates.lng};
						//console.log(markers[i].coordinates.y);
						$scope.marker2 = new google.maps.Marker(markerOption);
								
						//$scope.objectNg2 = "object from ng";
						$scope.infowindow = new google.maps.InfoWindow({
					          content: infoText//makeText(markers[i])//worksInfoTemplate//
					        	  //"<p> {{objectNg2}}</p>"//-not work
					        	  //info windows for the marker
					          ///content: "<h1>ahdaklhads</h2>"
					          //postion is not needed because it's will be attched to marker.
					          //maxWidth - optional
					          ,maxWidth:300
					         // position: markerPoint
					        });
						
						//adding to each marker an infowindow
						$scope.addInfowindowToMarker($scope.marker2,$scope.infowindow );
						
						
						//Set the zoom by the most far markers
						bounds.extend($scope.marker2.getPosition());
						
						count++;
					//	console.log("work "+ " " + count);
						
						
						
					}//end of the for
					
					
				
		    	     
				}
				//fit the bound to contain all markers
				$scope.overview = function(){
    	        	 //alert("tt");
    	        	// bounds.extend($scope.marker2.getPosition());
		    			$scope.map.fitBounds(bounds);
				}
				//function for running the displayMarker on each of the markers type
				$scope.runOnEachType = function(types){//get object of markersArray
					
					for(type in types){
						console.log(type);
						
						$scope.displayAllMarkers22(types[type], type);// - U here - why it's don't work ?? 
						
						//alert(types[type]);
						
					}
					
				}
				$scope.runOnEachTarget = function(targets){//get object of markersArray
					//alert("runOnEachTarget X " + targets.length);
					for(var i =0 ; i < targets.length; i++){
						
						markersLists = targets[i].markersLists;
					//	alert(targets[i].markersLists+ " = markerLists");
						var targetDetails = {id:targets[i].id, name : targets[i].name, imgUrl:targets[i].imgUrl };
						for(list in markersLists){
							//alert("list = " + list);
							targetDetails.currentType = list;
							$scope.displayAllMarkers22(markersLists[list], targetDetails);// - U here - why it's don't work ?? 
							
							//alert(types[type]);
							
						}
						
					}
					
					
				}
				//for make iterate over the פונצקיה שלונ/ 
				$scope.runOnEachLevel = function(){//get object of markersArray
					for(var i = 0; i< activeCases.length;i++){
						for(var j = 0 ; j < activeCases[i].targets.length; j++){
							var types = activeCases[i].targets[j].markersList.types;
							$scope.runOnEachType(types);
							
						}
					}
					
				}
	        	$scope.func1 = function(){
	    			
	    			alert("func1");
	    		}
	        	
	        	function placeMarkerAndPanTo(latLng, map) {
	        		
	    	        var marker = new google.maps.Marker({
	    	          position: latLng,
	    	          map: map
	    	        });
	    	        
	    	        //map.panTo(latLng);//for move the map to center
	        		
	    	      }
	        	//$scope.func1();
	        	
	        	
    	        $scope.initMap();
	    		
    	        //declare a listener for control its visibility 
    	        $scope.listner1 ; 
    	        
    	        //for enable adding markers
	    		$scope.addNewMarker = function(){
	    			
	    			//adding a listner
	    			$scope.listener1 = $scope.map.addListener('click', function(e) {
	    	        	
	    		          placeMarkerAndPanTo(e.latLng, $scope.map);
	    		          //alert(e.latLng);
	    		        });
	    	        
	    			
	    		}
	    	
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
	    		var count = 0;
	    		//function for running through the markers and create pin and infowindow for each:
	    		//$scope.displayAllMarkers = function(){alert("what???");}
/*function(markers){
	    			
	    			for(var i = 0 ; i < markers.length; i++){
		    			markerPoint = {lat: markers[i].coordinates.y, lng: markers[i].coordinates.x};
		    			console.log(markers[i].coordinates.y);
		    			$scope.marker2 = new google.maps.Marker({
		    				//set the position
		    		       position: markerPoint,
		    				  //on what map.
		    		       map: $scope.map
		    		       
		    			
		    				});
		    			$scope.infowindow = new google.maps.InfoWindow({
		    		          content: markers[i].name//info windows for the marker
		    		          ///content: "<h1>ahdaklhads</h2>"
		    		          //postion is not needed because it's will be attched to marker.
		    		          //maxWidth - optional
		    		          ,maxWidth:300
		    		         // position: markerPoint
		    		        });
		    			
		    			//adding to each marker an infowindow
		    			$scope.addInfowindowToMarker($scope.marker2,$scope.infowindow );
		    			
		    			
		    			//Set the zoom by the most far markers
		    			bounds.extend($scope.marker2.getPosition());
		    			$scope.map.fitBounds(bounds);
		    			
		    		}//end of the for
		    		
	    			
	    		}*/
	    		
	      
       

    }
    var targets = [
	               //case1 target1:
		               {
		            	   targetId: 1,
		            	   name: "Smiley - target1",
		            	   imgUrl: "images/map/smiley.gif",
	                       lastTextTime:  "target1 lastTextTime", 
	                       link:  "target1 link",
	                       note: name + "target1 note",
	                       //Every target contains all the markers:
	                       markersLists:{
	                    	   //every markers list contains types Object:
	                    	   
	                    		 //every type should be array of arbitrary amounts of the markers types:
	                    		   
	                    		   //array of work places:
	                    		   works:[
	                    		          {
		                    		          targetId:222,//this.targetId,//How to access this targetId
		                    		          coordinates:{
		                    		        	  lat:40.712784,
			               						  lng:-74.005941	
		                    		          		
		                    		          },
		                    		          location:{
		                    		        	  id:325,
	                                              name:"location of work name"//company name ? 
		                    		          },
		                    		          startDate : "date",//what about end date ? 
		                    		          endDate : undefined,
		                    		          employer: {
		                    		                id: 345235234,
		                    		                name: "employer name"
		                    		          },
		                    		          position: {
            		                                id: 6568784,
		                    		                name: "Position name"
		                    		          } //note?
		                    		                      

	                    		          }//end of works[0]
	                    		          ,
	                    		          {//works[1] - moskow
		                    		          targetId:222,//this.targetId,//How to access this targetId
		                    		          coordinates:{
		                    		        	 lat:55.755826,
		                    		        	 lng:37.617300
		                    		          		
		                    		          },
		                    		          location:{
		                    		        	  id:325,
	                                              name:"Moskow"
		                    		          },
		                    		          startDate : "date",
		                    		          employer: {
		                    		                id: 345235234,
		                    		                name: "employer name"
		                    		          },
		                    		          position: {
            		                                id: 6568784,
		                    		                name: "Position name"
		                    		          } 
		                    		                      

	                    		          }
	                    		          
	                    		          ],
	                    		          
	                    		          //array of education places: 
	                    		     educations:[
	                    		              {
	                    		            	  targetId:222,//this.targetId,//How to access this targetId
	                    		            	  
		                                          id: 22,
		                                          coordinates:{
			                    		        	  lat:23,
				               						  lng:36	
			                    		          		
			                    		          },
				                                  type:" HighSchool",
				                                  year: {
				                                      id: 97946,
				                                      name: "years??"
				                                             },
				                                 school: {
				                                	 	id:46646 ,
				                                        name: "schoolName"
				                                       },
				                                 faculties:{
			                                             id:554654,
			                                             name:"Faculty name"
			                                             },     
				                               note:{ 
			                                            id: 5464,
			                                            text:"note of education"
				                                                      
			                                      }//attends?
	                    		   }//end of educations[0]
	                    		              ,
	                    		              {//educations[1]
	                    		            	  targetId:222,//this.targetId,//How to access this targetId
	                    		            	  
		                                          id: 22,
		                                          coordinates:{
			                    		        	  lat:51.507351,
			                    		        	  lng:-0.127758	
			                    		          		
			                    		          },
				                                  type:" HighSchool",
				                                  year: {
				                                      id: 97946,
				                                      name: "years??"
				                                             },
				                                 school: {
				                                	 	id:46646 ,
				                                        name: "London school"
				                                       },
				                                 faculties:{
			                                             id:554654,
			                                             name:"Faculty name"
			                                             },     
				                               note:{ 
			                                            id: 5464,
			                                            text:"note of education"
				                                                      
			                                      }
	                    		   }
	                    		],//end of education[]   
		               				
		               			//array of location markers:
				               locations: [{    
				            	   		targetId:222,//this.targetId,//How to access this targetId
				                        id: 104022926303756,
				                       title:"locaton title!ss",
				                       description:"location description",
				                       location:  {//proper address
				                    	   
				                    	   lat: 35, //for what we need it? we already have coordinates..
				                    	   lng: 3.5,     
				                    	   city: "string", 
				                    	   country: "string", 
				                    	   
				                    	   zip: "string",
								           street: "string",
								           state: "string",
								           region: "string"
								                              //strret number      
							               
			             		          		
			             		          },
						               coordinates:{
			             		        	 lat:35,
			             		        	 lng:20
                                      }
				               },
		                                      /* ??? how to organize this... ? 
		                        				link-to-location- facebook-url  sting
						                         target-attended drived  from  trget name sting
						                         */
		        
					               //end of locations[0]
				               
				               {  //location[1]  
			            	   		targetId:222,//this.targetId,//How to access this targetId
			                        id: 104022926303756,
			                       title:"locaton title!ss",
			                       description:"location description",
			                       location:  {
			                    	   
			                    	   lat:35, //for what we need it? we already have coordinates..
			                    	   lng: 31,     
			                    	   city: "Jerusalem", 
			                    	   country: "Israel", 
			                    	   
			                    	   zip: "string",
							           street: "string",
							           state: "string",
							           region: "string"
			                       	},                        
						               coordinates:{
		             		        	  lat:23,
		             		        	  lng:25	
		             		          		
		             		          }
	                                      
	                                      /* ??? how to organize this... ? 
	                        				link-to-location- facebook-url  sting
					                         target-attended drived  from  trget name sting
					                         */
	        
				               }
				 //end of locations[]
				               ],
				             //array of post markers:
				               posts:[
				                      //post[0]:
				                      
				                      {
				                    	  targetId:222,//this.targetId,//How to access this targetId
			                    	      id:3333,
		                    	          author:"mosheh", //need to access it - from[ targ-'name']
		                    	          to:"blabla",
		                    	          type: "story\message",//Just one of them
		                    	          content:"message - text",
		                    	          date: new Date(), 
		                    	          link: "www.asddagdsf",
		                    	          img: "img/url",
		                    	          coordinates:{
			             		        	  lat:10,
			             		        	  lng:30	
			             		          		
			             		          }

				                    	  
				                      }//end of posts[0]
				                      
				                      
				                      
				                      
				                      
				                      ],//end of posts[]
				                      
				                      
				                      //array of manually added markers:
				                      manuallyAdded:
				                    	  [
				                                    {
				                                    	targetId:222,//this.targetId,//How to access this targetId
				                                    	coordinates:{
							             		        	  lat:39,
							             		        	  lng:12.66	
							             		          		
							             		          },
				                                    title: "marker title",
	                                                  description: "marker des desciption",
	                                                  id : 12313,
	                                                  
	                                                  targetAttended:{ //- related_to
	                                                      	imgUrl: "adla;ld",
	                                                      	name: "sdadsa",
	                                                        id: 65468
	                                                   }

				                                    	
				                                    	
				                                    }//end of manuallyAdded[0]
				                                    
				                                 //end of manuallyAdded[]   
		                                    ],
				                                    
				                         //array of events markers:    
	                                    events:
	                                    	
	                                    	[
	                                            {
	                                            	targetId:222,
	                                            	coordinates:{
	      			             		        	  lat:13,
	      			             		        	  lng:15	
	      			             		          		
	      			             		          },
	      			             		          title:"dasfaf",
	      			             		          descripton:"asfklnv",
	      			             		          link: "my URL ",
	      			             		          note:{
	      			                                id:654654,
	      			                                 text:"lasjdlaj"
	      			                              },
	      			             		          location:{ //-address  {
			                                              id:6468,
			                                              name :" event name"       
	                                                }
	      			             		         	                                            	
	                                            }//end of events[0]
	                                            ,
	                                            {//events[1]
	                                            	targetId:222,
	                                            	coordinates:{
	      			             		        	  lat:32.794046,
	      			             		        	  lng:34.989571
	      			             		          		
	      			             		          },
	      			             		          title:"dasfaf",
	      			             		          descripton:"asfklnv",
	      			             		          link: "my URL ",
	      			             		          note:{
	      			                                id:654654,
	      			                                 text:"lasjdlaj"
	      			                              },
	      			             		          location:{ //-address  {
			                                              id:6468,
			                                              name :" Haifa"       
	                                                }
	      			             		         	                                            	
	                                            }
	                                            
	                                            
	                                        ],//end of events[]
	                                        hometowns: [
	                                                    {
	                                            name: "myName",
	                                            id: 999,
	                                            coordinates: {
	                                                lat: 00,
	                                                lng: 55        
	                                                	},
	                                        }//end of hometown[0]
	                                                    ,
                                                    {
        	                                            name: "Beer-Sheva",
        	                                            id: 999,
        	                                            coordinates: {
        	                                                lat: 31.252973,
        	                                                lng: 34.791462       
        	                                                	},
        	                                        }//end of hometown[1]
	                                        ]//end of hometowns[]
		               
		               			
		               
	                    		  
	                    		   
	                    	   }//end of types property
	                    	   
	                    	   
	                       
		            	   
		               },
		               
		               // target 2:
		               
		               {
		            	   targetId: 2,
		            	   name: "Monkey - target2",
		            	   imgUrl: "images/map/monkey.jpg",
	                       lastTextTime:  "target2 lastTextTime", 
	                       link:  "target2 link",
	                       note: name + "target2 note",
	                       markersLists:{
	                    	   events:
                               	
                               	[
                                       {
                                       	targetId:222,
                                       	coordinates:{
 			             		        	  lat:13,
 			             		        	  lng:15	
 			             		          		
 			             		          },
 			             		          title:"target2 event[0]",
 			             		          description:"asfklnv",
 			             		          link: "my URL ",
 			             		          note:{
 			                                id:654654,
 			                                 text:"lasjdlaj"
 			                              },
 			             		          location:{ //-address  {
	                                              id:6468,
	                                              name :" event name"       
                                           }
 			             		         	                                            	
                                       }//end of events[0]
                                       ,
                                       {//events[1]
                                       	targetId:222,
                                       	coordinates:{
 			             		        	  lat:32.794046,
 			             		        	  lng:34.989571
 			             		          		
 			             		          },
 			             		          title:"target2 event[1]",
 			             		          descripton:"asfklnv",
 			             		          link: "my URL ",
 			             		          note:{
 			                                id:654654,
 			                                 text:"lasjdlaj"
 			                              },
 			             		          location:{ //-address  {
	                                              id:6468,
	                                              name :" Haifa"       
                                           }
 			             		         	                                            	
                                       }
                                       
                                       
                                   ],//end of events[]
                                   hometowns: [
                                               {
                                       name: "target2  hometwon1",
                                       id: 999,
                                       coordinates: {
                                           lat: 00,
                                           lng: 55        
                                           	},
                                   }//end of hometown[0]
                                               ,
                                           {
	                                            name: "Beer-Sheva - target2  hometown2",
	                                            id: 999,
	                                            coordinates: {
	                                                lat: 31.252973,
	                                                lng: 34.791462       
	                                                	},
	                                        }//end of hometown[1]
                                   ]//end of hometowns[]
	                    	   
	                    	   
	                    	   
	                       }
		            	   
		               }
	               
	               
	               ];
}());