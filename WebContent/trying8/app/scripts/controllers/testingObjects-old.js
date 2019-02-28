console.log("I am in");
/**I am upgrading the object to contain places
 * 
 * 
 */
//Todo: switch the lat/lng. the lat should be firsT
var myX = 99;
var xxx ={a :2, b:3};
//alert(xxx + " = xxx ");
	      //every case contain list of targets:
	    var targets = [
	               //case1 target1:
		               {
		            	   
		            	   targetId: 1,
		            	   name: "Smiley - target1",
		            	   imgUrl: "images/smiley.gif",
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
		            	   imgUrl: "images/monkey.jpg",
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
                                   ],//end of hometowns[]
	                    	   manuallyAdded: []
	                    	   
	                    	   
	                       }
		            	   
		               }
	               
	               
	               ];
	    	  

	
	
	
	/*
function displayText(){
	
	for (var i = 0;i < activeCases.length; i++){
		console.log("case id = " + activeCases[i].id + ", case name = " + activeCases[i].name);
		for(var j = 0; j <activeCases[i].targets.length; j++ ){
			
			console.log("target name = " +  activeCases[i].targets[j].name
					+"\nThose are the target properties:");
			for(p in activeCases[i].targets[j]){
				console.log(p + " = " + activeCases[i].targets[j][p]);
				console.log("the marker of the target: " + activeCases[i].targets[j].markersList.types.works[0].targetId);
				
			}
		}
	
	}
}

displayText();*/