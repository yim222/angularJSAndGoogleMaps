(function () {
	angular.module('maiseApp').service("positioningMapEls",positioningMapEls);
	function positioningMapEls(){	
		this.testing123 = function(){
			
		}
		this.main = function(map){
			
			map.setOptions({
				zoomControl:false,//disable zoom default buttons
				 zoomControlOptions: {
				        position: google.maps.ControlPosition.TOP_RIGHT
				    },
				    streetViewControl: false,
				    mapTypeControl:false
			});
			
			//trying to insert custom zoom buttons:
			createZoomButtons(map);
			
			
			var el = document.getElementById("overviewButton");//
			map.controls[google.maps.ControlPosition.RIGHT_TOP].push(el);
			el = document.getElementById("addMarkerButton");
			map.controls[google.maps.ControlPosition.RIGHT_TOP].push(el);
			el = document.getElementById("addNewMarkerMessage");
			map.controls[google.maps.ControlPosition.LEFT_CENTER].push(el);
			el = document.getElementById("addNewMarkerMessage");
			map.controls[google.maps.ControlPosition.LEFT_CENTER].push(el);//"displayForm1
			el = document.getElementById("displayForm1");
			map.controls[google.maps.ControlPosition.TOP_LEFT].push(el);
			
			
			
			
		}
		
		//function for creating custom zoom buttons
		var createZoomButtons = function(map){
			
			// Set CSS for the zoomIn
			  var zoomInButton = document.createElement('div');
			  zoomInButton.setAttribute("id", "zoomIn");
			  zoomInButton.className ="zoomButton";
			  //zoomInButton.style.width = '32px'; 
			  //zoomInButton.style.height = '32px';
			  /* Change this to be the .png image you want to use */
			  zoomInButton.style.backgroundImage = 'url("images/map/ic_map_zoomin.png")';
			  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(zoomInButton);
			  
			// Set CSS for the zoomOut
			  var zoomOutButton = document.createElement('div');
			  zoomOutButton.setAttribute("id", "zoomOut");
			  zoomOutButton.className ="zoomButton";
			 
			  map.controls[google.maps.ControlPosition.RIGHT_TOP].push(zoomOutButton);
			  
			  
			// Setup the click event listener - zoomIn
			  google.maps.event.addDomListener(zoomInButton, 'click', function() {
			    map.setZoom(map.getZoom() + 1);
			  });
			    
			  // Setup the click event listener - zoomOut
			  google.maps.event.addDomListener(zoomOutButton, 'click', function() {
			    map.setZoom(map.getZoom() - 1);
			  });  
			
		}
		
	
	
	
	
	};//);//end of the service
}())