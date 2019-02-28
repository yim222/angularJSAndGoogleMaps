/**
 * Demo objects
 */


	console.log("TESTING OBJECT IS IN");



	//Demo of the targets of the cases.
    var casesTargets = [
               
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
	                    		          markerId : 0,
	                    		          coordinates:{
	                    		        	  lat:40.712784,
		               						  lng:-74.005941	
	                    		          		
	                    		          },
	                    		          location:{
	                    		        	  id:325,
                                              name:"location of work name"
	                    		          },
	                    		          startDate : "date",
	                    		          endDate : undefined,
	                    		          employer: {
	                    		                id: 345235234,
	                    		                name: "employer name"
	                    		          },
	                    		          position: {
        		                                id: 6568784,
	                    		                name: "Position name"
	                    		          }, //note?
	                    		          note : {
	                    		        	  id: 000,
	                    		        	  text : "Note of type - work , #0 "
	                    		          }
	                    		                      

                    		          }//end of works[0]
                    		          ,
                    		          {//works[1] - moskow
	                    		          markerId : 1,//this.targetId,//How to access this targetId
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
	                    		          },
	                    		          
	                    		          note : {
	                    		        	  id: 111,
	                    		        	  text : "Note of type -work  , #1 "
	                    		          }
	                    		                      

                    		          }
                    		          
                    		          ],
                    		          
                    		          //array of education places: 
                    		     educations:[
                    		              {
                    		            	  markerId : 2,//this.targetId,//How to access this targetId
                    		            	  
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
		                                      note : {
		                                    	      id :000,
		   	                    		        	  text : "Note of type - educ , #0 "
		   	                    		          }//attends?
                    		   }//end of educations[0]
                    		              ,
                    		              {//educations[1]
                    		            	  markerId : 3,//this.targetId,//How to access this targetId
                    		            	  
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
		                                            text:"note of type education, #1"
			                                                      
		                                      }
                    		   }
                    		],//end of education[]   
	               				
	               			//array of location markers:
			               locations: [{    
			            	   		markerId : 4,//this.targetId,//How to access this targetId
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
                                  },
                                  note : {
                            	      id :000,
                   		        	  text : "Note of type - location , #0 "
                   		          }
			               },
	                                      /* ??? how to organize this... ? 
	                        				link-to-location- facebook-url  sting
					                         target-attended drived  from  trget name sting
					                         */
	        
				               //end of locations[0]
			               
			               {  //location[1]  
		            	   		markerId : 5,//this.targetId,//How to access this targetId
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
	             		          		
	             		          },
	             		         note : {
                           	      id :000,
                  		        	  text : "Note of type - location , #1 "
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
			                    	  markerId : 6,//this.targetId,//How to access this targetId
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
		             		          		
		             		          },
		             		         note : {
		                           	      id :000,
		                  		        	  text : "Note of type - post = , #0 "
		                  		          }

			                    	  
			                      }//end of posts[0]
			                      
			                      
			                      
			                      
			                      
			                      ],//end of posts[]
			                      
			                      
			                      //array of manually added markers:
			                      manuallyAdded:
			                    	  [
			                                    {
			                                    	markerId : 7,//this.targetId,//How to access this targetId
			                                    	coordinates:{
						             		        	  lat:39,
						             		        	  lng:12.66	
						             		          		
						             		          },
			                                    title: "marker title",
                                                  description: "marker des desciption",
                                                  id : 12313,
                                                  
                                                  associatedTargetIds:[1,3,4],
                                                   note:{
                                                	   text: "target2 #note manually",
                                                	   id : 001
                                                	   
                                                   }

			                                    	
			                                    	
			                                    }//end of manuallyAdded[0]
			                                    
			                                 //end of manuallyAdded[]   
	                                    ],
			                                    
			                         //array of events markers:    
                                    events:
                                    	
                                    	[
                                            {
                                            	markerId : 8,
                                            	coordinates:{
      			             		        	  lat:13.6,
      			             		        	  lng:14	
      			             		          		
      			             		          },
      			             		          title:"dasfaf",
      			             		          descripton:"asfklnv",
      			             		          link: "my URL ",
      			             		          note:{
      			                                id:654654,
      			                                 text:"note of events 0"
      			                              },
      			             		          location:{ //-address  {
		                                              id:6468,
		                                              name :" event name"       
                                                }
      			             		         	                                            	
                                            }//end of events[0]
                                            ,
                                            {//events[1]
                                            	markerId : 9,
                                            	coordinates:{
      			             		        	  lat:22.794046,
      			             		        	  lng:14.989571
      			             		          		
      			             		          },
      			             		          title:"dasfaf",
      			             		          descripton:"asfklnv",
      			             		          link: "my URL ",
      			             		          note:{
      			                                id:654654,
      			                                 text:"note of events 1"
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
                                            markerId: 10,
                                            coordinates: {
                                                lat: 3,
                                                lng: 27        
                                             },
                                        	note : {
                                         	      id :000,
                                		        	  text : "Note of type -hometown = , #0 "
                                		          }
                                        }//end of hometown[0]
                                                    ,
                                                {
    	                                            name: "Beer-Sheva33",
    	                                            markerId: 11,
    	                                            coordinates: {
    	                                                lat: 45,
    	                                                lng: 37.8       
    	                                             },
    	                                             note : {
    	                                          	      id :000,
    	                                 		        	  text : "Note of type -hometown = , #1 "
    	                                 		     }
    	                                                	
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
                                   	markerId : 1,
                                   	coordinates:{
			             		        	  lat:13,
			             		        	  lng:15	
			             		          		
			             		          },
			             		          title:"target2 event[0]",
			             		          description:"asfklnv",
			             		          link: "my URL ",
			             		          note:{
			                                id:654654,
			                                 text:"note of events 0"
			                              },
			             		          location:{ //-address  {
                                              id:6468,
                                              name :" event name"       
                                       }
			             		         	                                            	
                                   }//end of events[0]
                                   ,
                                   {//events[1]
                                   	markerId : 2,
                                   	coordinates:{
			             		        	  lat:32.794046,
			             		        	  lng:34.989571
			             		          		
			             		          },
			             		          title:"target2 event[1]",
			             		          descripton:"asfklnv",
			             		          link: "my URL ",
			             		          note:{
			                                id:654654,
			                                 text:"note of events 1"
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
                                       	note : {
                                     	      id :000,
                            		        	  text : "Note of type -hometown = , #0 "
                            		          }
                               }//end of hometown[0]
                                           ,
                                       {
                                            name: "Beer-Sheva - target2  hometown2",
                                            id: 999,
                                            coordinates: {
                                                lat: 31.252973,
                                                lng: 34.791462       
                                                	},
                                                	note : {
                                               	      id :000,
                                      		        	  text : "Note of type -hometown = , #1 "
                                      		          }
                                        }//end of hometown[1]
                               ],//end of hometowns[]
                    	   manuallyAdded: []
                    	   
                    	   
                       }
	            	   
	               }
               
               
               ];
    	  
    
    
//Demo of all app's targets
var allTargets = [
	{
		
		targetId: 1,
		name: "Smiley - target1",
		imgUrl: "images/smiley.gif"
		
		
		
	},
	
	{
		
		targetId: 2,
		name: "Monkey - target2",
		imgUrl: "images/monkey.jpg"
		
		
		
	},
	
	{
		
		targetId: 3,
		name: "target3",
		imgUrl: "images/target3.jpg"
		
		
		
	},
	
	{
		
		targetId: 4,
		name: "target4",
		imgUrl: "images/target4.jpg"
		
		
		
	},
	
	{
		
		targetId: 5,
		name: "target5",
		imgUrl: "images/target5.jpg"
		
		
		
	}];
	

