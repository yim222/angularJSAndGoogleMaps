/**
 * Service that create the infowindow. 
 * Currently it's work just for the manually added. At the next mybe we will modify it
 * for all markers types. 
 */
(function (){
	
	//test
	console.log("infowindowsTemplates.js here");
	//Creating the service and link it to the app. 
	angular.module('maiseApp').service("infowindowsTemplatesService",["TargetsUtilsService",
	                                                                  infowindowsTemplatesService]);
	
	
	//Service implementation
	function infowindowsTemplatesService(TargetsUtilsService){
		
		//test
		this.test = function(){
			
			console.log("infowindowsTemplatesService");
			
		}
		
		//Generating html for showing the associated targets - currently not used
		this.generateAssociatedTargets = function(associatedTargets3){
			//associatedTargets3
			var text = new Object(); //todo- maybe not needed
			text = "";
			
			
			//loop for creating by js the list of the associated targets
			for(var i = 0; i < associatedTargets3.length; i++){
				tr = associatedTargets3[i];
				text = text +  "<img  src='"+tr.imgUrl+"' width = '20' height = '20'></img>";
					
			}
			
				
				
			return "<div>" + text + "</div>";
			  
		}
		
		//Generate HTML text for the infowindow
		this.toManuallyAddedInfoTemplate = function (targetPlace, targetDetails, index ){
			
			//associatedTargetsHtml = this.generateAssociatedTargets(associatedTargets);
			//name of the ng-model
			var thisModel = 'newText1'+index;
			var details = {};
			details.startingPart = "<div id = 'manual1' ><img src='"+ targetDetails.imgUrl + "' width='42' height='42'>"
			 +"<h2>Target name - " + targetDetails.name + "</h2>"+"<p>title: " + targetPlace.title + "</p>"
			
			+"<p>Description: \""+targetPlace.description + "\"</p>"
			+"<p>Associated Target (id's - todo get target details by ID) " + targetPlace.associatedTargets + "</p>"
			+" <div  ng-repeat='tr in :: associatedTargets'>"
            +"<img  ng-src='{{tr.imgUrl}}' width = '20' height = '20'></img>"
            +"<div >"
            +" <span  >{{tr.name}}</span>"
           
            +"</div>"
            +"   <input type='image' src='images/targets-icon/ic_show.png' id='showtarget'>"
           //Not work! todo// +"<h1>directive</h1> <testing123></testing123>"
            +"   </div>"
			//Todo!!! here will come the directive.
            +"<p>Target's note:"+ targetPlace.note.text+"</p> <div id = 'noteArea'>NOTE:<p>" ;
			
			details.dynamicPart= {note: targetPlace.note.text} ;
			details.endingPart = ""
			+"</div><div id = 'editNote' ng-show = 'mapMarkersThings["+index+"].editNote' "
			+ " >the new text:<br>"
			
			
			+"<textarea ng-model = '"+thisModel+"'  col = 50 style = 'color:black'"
			+"ng-init = '" + thisModel +  " = mapMarkersThings["+index+"].text.dynamicPart.note'"
			+"></textarea>"
			+"<br><button ng-click = 'changeInfoText3("+index+", "+thisModel+")' >Save Note</button></div>"
			+"<button ng-click = 'mapMarkersThings["+index+"].editNote = true'>edit note</button>";
			
			
			return details;  
			
			
			
		}
		
		

		this.toWorkInfoTemplate = function(targetPlace, targetDetails, index ){

			
			
			//name of the ng-model
			var thisModel = 'newText1'+index;
			var details =  {};
			details.startingPart ="<img src='"+ targetDetails.imgUrl + "' width='42' height='42'>"
			 +"<h2>Target name - " + targetDetails.name + "</h2>"
			//+" <textarea id = 'text_box_i' style = 'padding: 50px;' > write text here and save"
				
				+"<h1>" + targetPlace.location.name+" Company</h1>"
			
			+"<p>ToDO - targetName<p>"
			+"<p>Position : " + targetPlace.position.name + "</p>"
			+"<p>Duration : from  "+ targetPlace.startDate+" to  today?</p>"
			+"<p ng-click = 'a()' >ttt</p>"//+"<p ng-click = 'updateNote(targetPlace, \"xxxx\");' ></p>"
			+"<p ng-click = 'updateNote(targetPlace, \"abcdeפסח!!!\");' >ופגשאק</p>"
			//+"<p onclick= 'alert(yy )' >ng-click</p> "
			+"<p>Target's links: ???</p>"
			
			+"<p>Target's note:"+ targetPlace.note.text+"</p> <div id = 'noteArea'>NOTE:<p>" ;
			
			details.dynamicPart= {note: targetPlace.note.text} ;
			details.endingPart = ""
			+"</div><div id = 'editNote' ng-show = 'mapMarkersThings["+index+"].editNote' "
			+ " >the new text:<br>"
			
			
			+"<textarea ng-model = '"+thisModel+"'  col = 50 style = 'color:black'"
			+"ng-init = '" + thisModel +  " = mapMarkersThings["+index+"].text.dynamicPart.note'"
			+"></textarea>"
			+"<br><button ng-click = 'changeInfoText3("+index+", "+thisModel+")' >Save Note</button></div>"
			+"<button ng-click = 'mapMarkersThings["+index+"].editNote = true'>edit note</button>";
			
			
			return details;
			
		}

		this.toEducationInfoTemplate = function(targetPlace, targetDetails, index ){
			
			//name of the ng-model
			var thisModel = 'newText1'+index;
			var details ={};
			details.startingPart = "<img src="+ targetDetails.imgUrl + " width='42' height='42'>"
			+"<h2>Target name - " + targetDetails.name + "</h2>"
				
				+"<h1>school: : " + targetPlace.school.name + "</h1>"
				
				+"<p>ToDO - targetName<p>"
				
				+"<p>faculty: : " + targetPlace.faculties.name + "</p>"
				+"<p>Attends : from  TODO! to  today?</p>"
				+"<p>Target's links: ???</p>"
				+"<p>Target's note:"+ targetPlace.note.text+"</p> <div id = 'noteArea'>NOTE:<p>" ;
				
				details.dynamicPart= {note: targetPlace.note.text} ;
				details.endingPart = ""
				+"</div><div id = 'editNote' ng-show = 'mapMarkersThings["+index+"].editNote' "
				+ " >the new text:<br>"
				
				
				+"<textarea ng-model = '"+thisModel+"'  col = 50 style = 'color:black'"
				+"ng-init = '" + thisModel +  " = mapMarkersThings["+index+"].text.dynamicPart.note'"
				+"></textarea>"
				+"<br><button ng-click = 'changeInfoText3("+index+", "+thisModel+")' >Save Note</button></div>"
				+"<button ng-click = 'mapMarkersThings["+index+"].editNote = true'>edit note</button>";
				
			
			return details;
			
			
		}

		this.tolocationInfoTemplate = function(targetPlace, targetDetails, index  ){
			//name of the ng-model
			var thisModel = 'newText1'+index;
			var details = {};
			details.startingPart = "<img src='"+ targetDetails.imgUrl + "' width='42' height='42'>"
			 +"<h2>Target name - " + targetDetails.name + "</h2>"
				
				
				
				
				+"<h1>title: " + targetPlace.title + "</h1>"
			
			+"<p class='test'>Description: "+targetPlace.title + "ToDo - charcters limitation <p>"
			
			+"<p>Location(Address):" + targetPlace.location.street +  ", "+ targetPlace.location.city + "," 
					+targetPlace.location.country+"</p>"
			+"<p>Date : from  TODO! to  today?</p>"
			+"<p>Target's links: ???</p>"
			+"<p>Target's note:"+ targetPlace.note.text+"</p> <div id = 'noteArea'>NOTE:<p>" ;
			
			details.dynamicPart= {note: targetPlace.note.text} ;
			details.endingPart = ""
			+"</div><div id = 'editNote' ng-show = 'mapMarkersThings["+index+"].editNote' "
			+ " >the new text:<br>"
			
			
			+"<textarea ng-model = '"+thisModel+"'  col = 50 style = 'color:black'"
			+"ng-init = '" + thisModel +  " = mapMarkersThings["+index+"].text.dynamicPart.note'"
			+"></textarea>"
			+"<br><button ng-click = 'changeInfoText3("+index+", "+thisModel+")' >Save Note</button></div>"
			+"<button ng-click = 'mapMarkersThings["+index+"].editNote = true'>edit note</button>";
			
			return details;
			
			
		}

		this.toPostInfoTemplate = function(targetPlace, targetDetails, index  ){
			//name of the ng-model
			var thisModel = 'newText1'+index;
			
		var details = {};
		details.startingPart = "<img src='"+ targetDetails.imgUrl + "' width='42' height='42'>"
		+"<h2>Target name - " + targetDetails.name + "</h2>"


			
			
			+"<h1>Author: " + targetPlace.author + "<br>To: "+ targetPlace.to+"</h1>"
			
			+"<p>Content: \""+targetPlace.content + "\"ToDo - charcters limitation </p>"
			
			
			+"<p>Date : "+ targetPlace.date + "</p>"
			+"<p>Target's links: "+ targetPlace.link + "</p>"
			+"<p>Target's note:"+ targetPlace.note.text+"</p> <div id = 'noteArea'>NOTE:<p>" ;
			
			details.dynamicPart= {note: targetPlace.note.text} ;
			details.endingPart = ""
			+"</div><div id = 'editNote' ng-show = 'mapMarkersThings["+index+"].editNote' "
			+ " >the new text:<br>"
			
			
			+"<textarea ng-model = '"+thisModel+"'  col = 50 style = 'color:black'"
			+"ng-init = '" + thisModel +  " = mapMarkersThings["+index+"].text.dynamicPart.note'"
			+"></textarea>"
			+"<br><button ng-click = 'changeInfoText3("+index+", "+thisModel+")' >Save Note</button></div>"
			+"<button ng-click = 'mapMarkersThings["+index+"].editNote = true'>edit note</button>";
			
			
			
			return details;
			
			
			
		}

		
		this.toEventInfoTemplate = function(targetPlace, targetDetails, index  ){
			//name of the ng-model
			var thisModel = 'newText1'+index;
		var details = {};
		details.startingPart ="<img src='"+ targetDetails.imgUrl + "' width='42' height='42'>"
			+"<h2>Target name - " + targetDetails.name + "</h2>"


			
			
			+"<h1>title: " + targetPlace.title + "</h1>"
			
			+"<p>Description: \""+targetPlace.description + "\"</p>"
			+"<p>Location:" + targetPlace.location.name + "</p>"
			+"<p>toDO target attends</p>"
			
			+"<p>link: " + targetPlace.link + "</p>"
+"<p>Target's note:"+ targetPlace.note.text+"</p> <div id = 'noteArea'>NOTE:<p>" ;
			
			details.dynamicPart= {note: targetPlace.note.text} ;
			details.endingPart = ""
			+"</div><div id = 'editNote' ng-show = 'mapMarkersThings["+index+"].editNote' "
			+ " >the new text:<br>"
			
			
			+"<textarea ng-model = '"+thisModel+"'  col = 50 style = 'color:black'"
			+"ng-init = '" + thisModel +  " = mapMarkersThings["+index+"].text.dynamicPart.note'"
			+"></textarea>"
			+"<br><button ng-click = 'changeInfoText3("+index+", "+thisModel+")' >Save Note</button></div>"
			+ "<h2>new:</h2><div ng-repeat='tr  in ::attand_target'><p >CHECK"///* ng-if= 'attand_target' */
			//+"<img  ng-src='{{tr.imgUrl}}' width = '20' height = '20'></img>"
			+ " <span>::{{::tr.name}}</span></p></div>"
			+ "<h2>new2:</h2><div ng-repeat='tr  in :: "+targetPlace.target_attended + "'><p >CHECK"///* ng-if= 'attand_target' */
			//+"<img  ng-src='{{tr.imgUrl}}' width = '20' height = '20'></img>"
			+ " <span>{{::tr.name}}</span></p></div>"
			+"<button ng-click = 'mapMarkersThings["+index+"].editNote = true'>edit note</button>";
			
			return details;
			
		}

		this.toHometownInfoTemplate = function(targetPlace, targetDetails, index  ){
			//name of the ng-model
			var thisModel = 'newText1'+index;
		var details ={};
		details.startingPart = "<img src='"+ targetDetails.imgUrl + "' width='42' height='42'>"
		+"<h2>Target name - " + targetDetails.name + "</h2>"


			
			
			+ "<h1>Todo - full address: " + targetPlace.name + "</h1>"
			
			
			+"<p>Todo link: </p>"
			+"<p>Target's note:"+ targetPlace.note.text+"</p> <div id = 'noteArea'>NOTE:<p>" ;
			
			details.dynamicPart= {note: targetPlace.note.text} ;
			details.endingPart = ""
			+"</div><div id = 'editNote' ng-show = 'mapMarkersThings["+index+"].editNote' "
			+ " >the new text:<br>"
			
			
			+"<textarea ng-model = '"+thisModel+"'  col = 50 style = 'color:black'"
			+"ng-init = '" + thisModel +  " = mapMarkersThings["+index+"].text.dynamicPart.note'"
			+"></textarea>"
			+"<br><button ng-click = 'changeInfoText3("+index+", "+thisModel+")' >Save Note</button></div>"
			+"<button ng-click = 'mapMarkersThings["+index+"].editNote = true'>edit note</button>";
			
			return details;
			

			
		}
		
		
		
		
		
	}//end of the service
	
	
}());
