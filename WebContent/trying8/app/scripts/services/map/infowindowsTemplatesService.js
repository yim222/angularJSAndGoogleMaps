/**
 * Service that create the infowindow. 
 * Currently it's work just for the manually added. At the next mybe we will modify it
 * for all markers types. 
 */
(function () {

	//test
	console.log("infowindowsTemplates.js here");
	//Creating the service and link it to the app. 
	angular.module('maiseApp').service("infowindowsTemplatesService", ["TargetsUtilsService",
		infowindowsTemplatesService]);


	//Service implementation
	function infowindowsTemplatesService(TargetsUtilsService) {

		//test
		this.test = function () {

			console.log("infowindowsTemplatesService");

		}

		//Generating html for showing the associated targets - currently not used
		this.generateAssociatedTargets = function (associatedTargets3) {
			//associatedTargets3
			var text = new Object(); //todo- maybe not needed
			text = "";


			//loop for creating by js the list of the associated targets
			for (var i = 0; i < associatedTargets3.length; i++) {
				tr = associatedTargets3[i];
				text = text + "<img  src='" + tr.imgUrl + "' width = '20' height = '20'></img>";

			}



			return "<div>" + text + "</div>";

		}

		//Generate HTML text for the infowindow
		this.toManuallyAddedInfoTemplate = function (targetPlace, targetDetails, index) {

			//associatedTargetsHtml = this.generateAssociatedTargets(associatedTargets);
			//name of the ng-model
			var thisModel = 'newText1' + index;
			var details = {};
			details.startingPart = "<div id = 'manual1' ><img src='" + targetDetails.imgUrl + "' width='42' height='42'>"
				+ "<h2>Target name - " + targetDetails.name + "</h2>" + "<p>title: " + targetPlace.title + "</p>"

				+ "<p>Description: \"" + targetPlace.description + "\"</p>"
				+ "<p>Associated Target (id's - todo get target details by ID) " + targetPlace.associatedTargets + "</p>"
				+ " <div  ng-repeat='tr in :: associatedTargets'>"
				+ "<img  ng-src='{{tr.imgUrl}}' width = '20' height = '20'></img>"
				+ "<div >"
				+ " <span  >{{tr.name}}</span>"

				+ "</div>"
				+ "   <input type='image' src='images/targets-icon/ic_show.png' id='showtarget'>"
				//Not work! todo// +"<h1>directive</h1> <testing123></testing123>"
				+ "   </div>"
				//Todo!!! here will come the directive.
				+ "<p>Target's note:" + targetPlace.note.text + "</p> <div id = 'noteArea'>NOTE:<p>";

			details.dynamicPart = { note: targetPlace.note.text };
			details.endingPart = ""
				+ "</div><div id = 'editNote' ng-show = 'mapMarkersThings[" + index + "].editNote' "
				+ " >the new text:<br>"


				+ "<textarea ng-model = '" + thisModel + "'  col = 50 style = 'color:black'"
				+ "ng-init = '" + thisModel + " = mapMarkersThings[" + index + "].text.dynamicPart.note'"
				+ "></textarea>"
				+ "<br><button ng-click = 'changeInfoText3(" + index + ", " + thisModel + ")' >Save Note</button></div>"
				+ "<button ng-click = 'mapMarkersThings[" + index + "].editNote = true'>edit note</button>";


			return details;



		}



		this.toWorkInfoTemplate = function (targetPlace, targetDetails, index) {



			//name of the ng-model
			var thisModel = 'newText1' + index;
			var details = {};
			details.dynamicPart = { note: targetPlace.note.text };
			details.endingPart = "";
			details.startingPart = "<div class='markerhade'><img  class='img_popmarker'  src='" + targetDetails.imgUrl + "'><div class='mtexthead'>"
				+ "<div> <span class='Mcompanyname'>" + targetPlace.location.name + "</span>  <input type='image' class='noteIcon' src='images/map/ic_note.png'ng-click = 'openNote(" + index + ")'/></div>" + "<span class='markeTname'>" + targetDetails.name + "</span></div></div>"
				//+" <textarea id = 'text_box_i' style = 'padding: 50px;' > write text here and save"
				+ "<div class='Mcontiner'><p class='titeldesc markeTname'>Position </p>"
				+ "<p class='mcontenttext'>" + targetPlace.position.name + "</p>"
				+ "<p class='titeldesc markeTname'>Duration </p>"
				+ "<p class='mcontenttext'> Works from  " + targetPlace.startDate + "</p>"
				/*+"<p ng-click = 'a()' >ttt</p>"//+"<p ng-click = 'updateNote(targetPlace, \"xxxx\");' ></p>"
				+"<p ng-click = 'updateNote(targetPlace, \"abcdeפסח!!!\");' >ופגשאק</p>"*/
				+ "<p>Target's links:</p>"
				+ "<p> <a href='#'><img class='mcicon' src='images/map/ic_details_facebook.png'></a><a href='#'><img class='mcicon' src='images/map/ic_details_mail.png'></a><a href='#'><img class='mcicon' src='images/map/ic_details_web.png'></a> </p>"
				+ "<p  class='titeldesc markeTname'>Analyst Note</p>"
				//	+"<p>Target's note:"+ targetPlace.note.text+"</p> <div id = 'noteArea'>NOTE:<p>" ;
				+ "<div id = 'editNote' ng-show = 'mapMarkersThings[" + index + "].editNote'>"
				+ "<textarea ng-model = '" + thisModel + "'  col = 50' class='textnote markernote mcontenttext'"
				+ "ng-init = '" + thisModel + " = mapMarkersThings[" + index + "].text.dynamicPart.note'"
				+ "></textarea>"
				+ "<br><button ng-click = 'changeInfoText3(" + index + ", " + thisModel + ")' >Save Note</button></div></div>";



			return details;

		}

		this.toEducationInfoTemplate = function (targetPlace, targetDetails, index) {

			//name of the ng-model
			var thisModel = 'newText1' + index;
			var details = {};
			details.dynamicPart = { note: targetPlace.note.text };
			details.endingPart = "";
			details.startingPart = "<div class='markerhade'><img  class='img_popmarker'  src='" + targetDetails.imgUrl + "'><div class='mtexthead'>"
				+ "<div> <span class='Mcompanyname'>" + targetPlace.school.name + "</span>  <input type='image' class='noteIcon' src='images/map/ic_note.png'ng-click = 'openNote(" + index + ")'/></div>" + "<span class='markeTname'>" + targetDetails.name + "</span></div></div>"
				+ "<div class='Mcontiner'>"
				/*   + "<p class='titeldesc markeTname'>Duration </p>"
				   + "<p class='mcontenttext'> Attended from  " + targetPlace.startDate + "</p>"*/
				+ "<p class='titeldesc markeTname'>Faculty</p>"
				+ "<p class='mcontenttext'>" + targetPlace.faculties.name + "</p>"
				+ "<p>Target's links:</p>"
				+ "<p> <a href='#'><img class='mcicon' src='images/map/ic_details_facebook.png'></a><a href='#'><img class='mcicon' src='images/map/ic_details_mail.png'></a><a href='#'><img class='mcicon' src='images/map/ic_details_web.png'></a> </p>"
				+ "<p  class='titeldesc markeTname'>Analyst Note</p>"
				//	+"<p>Target's note:"+ targetPlace.note.text+"</p> <div id = 'noteArea'>NOTE:<p>" ;
				+ "<div id = 'editNote' ng-show = 'mapMarkersThings[" + index + "].editNote'>"
				+ "<textarea ng-model = '" + thisModel + "'  col = 50' class='textnote markernote mcontenttext'"
				+ "ng-init = '" + thisModel + " = mapMarkersThings[" + index + "].text.dynamicPart.note'"
				+ "></textarea>"
				+ "<br><button ng-click = 'changeInfoText3(" + index + ", " + thisModel + ")' >Save Note</button></div></div>";
			return details;
		}

		this.tolocationInfoTemplate = function (targetPlace, targetDetails, index) {
			//name of the ng-model
			var thisModel = 'newText1' + index;
			var details = {};
			details.dynamicPart = { note: targetPlace.note.text };
			details.endingPart = ""
			details.startingPart = "<div class='markerhade'><img  class='img_popmarker'  src='" + targetDetails.imgUrl + "'><div class='mtexthead'>"
				+ "<div> <span class='Mcompanyname'>" + targetPlace.title + "</span>  <input type='image' class='noteIcon' src='images/map/ic_note.png'ng-click = 'openNote(" + index + ")'/></div>" + "<span class='markeTname'>" + targetDetails.name + "</span></div></div>"
				+ "<div class='Mcontiner'>"
				+ "<p class='titeldesc markeTname'>Description</p>"
				+ "<p class='mcontenttext'>" + targetPlace.description + "<p>"
				+ "<p class='titeldesc markeTname'>Location</p>"
				+ "<p class='mcontenttext'>" + targetPlace.location.street + ", " + targetPlace.location.city + ","
				+ targetPlace.location.country + "</p>"
				/*   + "<p class='titeldesc markeTname'>Date </p>"
				+ "<p class='mcontenttext'> Attended from  " + targetPlace.startDate + "</p>"*/
				+ "<p>Target's links:</p>"
				+ "<p> <a href='#'><img class='mcicon' src='images/map/ic_details_facebook.png'></a><a href='#'><img class='mcicon' src='images/map/ic_details_mail.png'></a><a href='#'><img class='mcicon' src='images/map/ic_details_web.png'></a> </p>"
				+ "<p  class='titeldesc markeTname'>Analyst Note</p>"
				//	+"<p>Target's note:"+ targetPlace.note.text+"</p> <div id = 'noteArea'>NOTE:<p>" ;
				+ "<div id = 'editNote' ng-show = 'mapMarkersThings[" + index + "].editNote'>"
				+ "<textarea ng-model = '" + thisModel + "'  col = 50' class='textnote markernote mcontenttext'"
				+ "ng-init = '" + thisModel + " = mapMarkersThings[" + index + "].text.dynamicPart.note'"
				+ "></textarea>"
				+ "<br><button ng-click = 'changeInfoText3(" + index + ", " + thisModel + ")' >Save Note</button></div></div>";
			return details;


		}

		this.toPostInfoTemplate = function (targetPlace, targetDetails, index) {
			//name of the ng-model
			var thisModel = 'newText1' + index;
			var details = {};
		    details.dynamicPart = { note: targetPlace.note.text };
			details.endingPart = ""
			details.startingPart = "<div class='markerhade'><img  class='img_popmarker'  src='" + targetDetails.imgUrl + "'><div class='mtexthead'>"
				+ "<div> <span class='Mcompanyname'>" + targetPlace.author + " Tagged</span>  <input type='image' class='noteIcon' src='images/map/ic_note.png'ng-click = 'openNote(" + index + ")'/></div>" + "<span  class='Mcompanyname'>" + targetPlace.to + "in a post</span></div></div>"
				+ "<div class='Mcontiner'>"
				+ "<p class='titeldesc markeTname'>Content</p>"
				+ "<p  class='mcontenttext'>:" + targetPlace.content + "</p>"
				+ "<p>Date : " + targetPlace.date + "</p>"
				+ "<p>Target's links:</p>"
				+ "<p> <a href='#'><img class='mcicon' src='images/map/ic_details_facebook.png'></a><a href='#'><img class='mcicon' src='images/map/ic_details_mail.png'></a><a href='#'><img class='mcicon' src='images/map/ic_details_web.png'></a> </p>"
				+ "<p  class='titeldesc markeTname'>Analyst Note</p>"
				//	+"<p>Target's note:"+ targetPlace.note.text+"</p> <div id = 'noteArea'>NOTE:<p>" ;
				+ "<div id = 'editNote' ng-show = 'mapMarkersThings[" + index + "].editNote'>"
				+ "<textarea ng-model = '" + thisModel + "'  col = 50' class='textnote markernote mcontenttext'"
				+ "ng-init = '" + thisModel + " = mapMarkersThings[" + index + "].text.dynamicPart.note'"
				+ "></textarea>"
				+ "<br><button ng-click = 'changeInfoText3(" + index + ", " + thisModel + ")' >Save Note</button></div></div>";

			return details;



		}


		this.toEventInfoTemplate = function (targetPlace, targetDetails, index) {
			//name of the ng-model
			//var attand_target=["ssdd","sddd","asdfff"];
			/* if (typeof targetPlace.target_attended !== typeof undefined)
			 attand_target=targetPlace.target_attended;*/
			 //console.log(attand_target);
			
			var thisModel = 'newText1' + index;
			var details = {};
			if(targetPlace.target_attended){
				var check12 = targetPlace.target_attended[0];
				
				
			}else{var check12  = 'notExist';}
			
			details.dynamicPart = { note: targetPlace.note.text };
			details.endingPart = ""
			details.startingPart ="<div class='markerhade'><img  class='img_popmarker'  src='" + targetDetails.imgUrl + "'><div class='mtexthead'>"
				+ "<div> <span class='Mcompanyname'>" + targetPlace.title + "</span>  <input type='image' class='noteIcon' src='images/map/ic_note.png'ng-click = 'openNote(" + index + ")'/></div>" + "<span class='markeTname'>" + targetDetails.name + "</span></div></div>"
+ "<div class='Mcontiner'>"
				+ "<p class='titeldesc markeTname'>Description</p>"
				+ "<p class='mcontenttext'>" + targetPlace.description + "</p>"
				+ "<p class='titeldesc markeTname'>Location</p>"
				+ "<p class='mcontenttext'>" + targetPlace.location.name + "</p>"
				+ "<p class='titeldesc markeTname'> Target Attends</p>"
				+ "<p ng-repeat='tr in ::attand_target'>CHECK"///* ng-if= 'attand_target' */
				+"<img  ng-src='{{tr.imgUrl}}' width = '20' height = '20'></img>"
				+ " <span>{{tr.name}}</span></p><H1>CHECK : {{::attand_target[0]}}</h1>"

				+ "<p>link: " + targetPlace.link + "</p>"
				+ "<p>Target's note:" + targetPlace.note.text + "</p> <div id = 'noteArea'>NOTE:<p>"

				+ "</div><div id = 'editNote' ng-show = 'mapMarkersThings[" + index + "].editNote' "
				+ " >the new text:<br>"


				+ "<textarea ng-model = '" + thisModel + "'  col = 50 style = 'color:black'"
				+ "ng-init = '" + thisModel + " = mapMarkersThings[" + index + "].text.dynamicPart.note'"
				+ "></textarea>"
				+ "<br><button ng-click = 'changeInfoText3(" + index + ", " + thisModel + ")' >Save Note</button></div>"
				+ "<button ng-click = 'mapMarkersThings[" + index + "].editNote = true'>edit note</button>"
				+"<h1>I am here? + "+ check12.name+  " + {{ ::attand_target[0].name }}</h1><div ng-repeat = 'tr1 in ::attand_target'><h3>{{:tr1.name}}</h3></div></div>";
/*
 * <div  ng-repeat='tr in :: associatedTargets'>"
				+ "<img  ng-src='{{tr.imgUrl}}' width = '20' height = '20'></img>"
				+ "<div >"
				+ " <span  >{{tr.name}}</span>"

				+ "</div>"
 */
			return details;

		}

		this.toHometownInfoTemplate = function (targetPlace, targetDetails, index) {
			//name of the ng-model
			var thisModel = 'newText1' + index;
			var details = {};
			details.startingPart = "<img src='" + targetDetails.imgUrl + "' width='42' height='42'>"
				+ "<h2>Target name - " + targetDetails.name + "</h2>"




				+ "<h1>Todo - full address: " + targetPlace.name + "</h1>"


				+ "<p>Todo link: </p>"
				+ "<p>Target's note:" + targetPlace.note.text + "</p> <div id = 'noteArea'>NOTE:<p>";

			details.dynamicPart = { note: targetPlace.note.text };
			details.endingPart = ""
				+ "</div><div id = 'editNote' ng-show = 'mapMarkersThings[" + index + "].editNote' "
				+ " >the new text:<br>"


				+ "<textarea ng-model = '" + thisModel + "'  col = 50 style = 'color:black'"
				+ "ng-init = '" + thisModel + " = mapMarkersThings[" + index + "].text.dynamicPart.note'"
				+ "></textarea>"
				+ "<br><button ng-click = 'changeInfoText3(" + index + ", " + thisModel + ")' >Save Note</button></div>"
				+ "<button ng-click = 'mapMarkersThings[" + index + "].editNote = true'>edit note</button>";

			return details;



		}





	}//end of the service


}());
