console.log("infowindowsTemplates.js here");

//var targetPlace2;
//var worksInfoTemplate = "<h1>" + targetPlace2.location.name+" work??</h1>";
		//"";

/*
 "<img src="+ targetDetails.imgUrl + " width="42" height="42">"
 +"<h2>Target name - " + targetDetails.name + "</h2>"
 */
//
function makeText(targetPlace, targetDetails ){
	for(x in targetPlace){
		
		console.log(x + "= = " +targetPlace[x]);
	}
	
	if(targetPlace.hasOwnProperty("location")){
	   // alert("yes, i have that property");
		console.log("locaton.name = " + targetPlace.location.name);
	return "<h1>" + targetPlace.location.name+" work??</h1>";
	}
	else{
		
		return "no text";
	}
	
}

function toWorkInfoTemplate(targetPlace, targetDetails ){
	//alert("location"+ targetPlace.location.name);
	//return "<h1>" + targetPlace.location.name+" work??</h1>";
	var details =  "<img src='"+ targetDetails.imgUrl + "' width='42' height='42'>"
	 +"<h2>Target name - " + targetDetails.name + "</h2>"
		
		
		+"<h1>" + targetPlace.location.name+" Company</h1>"
	
	+"<p>ToDO - targetName<p>"
	+"<p>Position : " + targetPlace.position.name + "</p>"
	+"<p>Duration : from  "+ targetPlace.startDate+" to  today?</p>"
	+"<p>Target's links: ???</p>";
	
	return details;
	
}

function toEducationInfoTemplate(targetPlace, targetDetails ){
var details =  "<img src="+ targetDetails.imgUrl + " width='42' height='42'>"
+"<h2>Target name - " + targetDetails.name + "</h2>"
	
	+"<h1>school: : " + targetPlace.school.name + "</h1>"
	
	+"<p>ToDO - targetName<p>"
	
	+"<p>faculty: : " + targetPlace.faculties.name + "</p>"
	+"<p>Attends : from  TODO! to  today?</p>"
	+"<p>Target's links: ???</p>"
	+"<p>Target's note: ???" + targetPlace.note.text+"</p>";
	
	return details;
	
	
}

function tolocationInfoTemplate(targetPlace, targetDetails ){
	var details =  "<img src='"+ targetDetails.imgUrl + "' width='42' height='42'>"
	 +"<h2>Target name - " + targetDetails.name + "</h2>"
		
		
		
		
		+"<h1>title: " + targetPlace.title + "</h1>"
	
	+"<p>Description: "+targetPlace.title + "ToDo - charcters limitation <p>"
	
	+"<p>Location(Address):" + targetPlace.location.street +  ", "+ targetPlace.location.city + "," 
			+targetPlace.location.country+"</p>"
	+"<p>Date : from  TODO! to  today?</p>"
	+"<p>Target's links: ???</p>"
	+"<p>Target's note: ToDo</p>";
	
	return details;
	
	
}

function toPostInfoTemplate(targetPlace, targetDetails ){
	
var details =  "<img src='"+ targetDetails.imgUrl + "' width='42' height='42'>"
+"<h2>Target name - " + targetDetails.name + "</h2>"


	
	
	+"<h1>Author: " + targetPlace.author + "<br>To: "+ targetPlace.to+"</h1>"
	
	+"<p>Content: \""+targetPlace.content + "\"ToDo - charcters limitation </p>"
	
	
	+"<p>Date : "+ targetPlace.date + "</p>"
	+"<p>Target's links: "+ targetPlace.link + "</p>";
	
	
	return details;
	
	
	
}

function toManuallyAddedInfoTemplate(targetPlace, targetDetails ){
	
	var details =  "<img src='"+ targetDetails.imgUrl + "' width='42' height='42'>"
	 +"<h2>Target name - " + targetDetails.name + "</h2>"
		
		
		
		
		+"<h1>title: " + targetPlace.title + "</h1>"
	
	+"<p>Description: \""+targetPlace.description + "\"</p>"
	+"<p>{{objectNg}}</p>"
	
	+"<p>Todo :▪	Optional – connect the pin to a target - and targets attends </p>";
	
	
	return details;
	
	
	
}

function toEventInfoTemplate(targetPlace, targetDetails ){
	
var details = "<img src='"+ targetDetails.imgUrl + "' width='42' height='42'>"
	+"<h2>Target name - " + targetDetails.name + "</h2>"


	
	
	+"<h1>title: " + targetPlace.title + "</h1>"
	
	+"<p>Description: \""+targetPlace.description + "\"</p>"
	+"<p>Location:" + targetPlace.location.name + "</p>"
	+"<p>toDO target attends</p>"
	
	+"<p>link: " + targetPlace.link + "</p>"
	+"<p>note: " + targetPlace.note.text + "</p>";
	return details;
	
}

function toHometownInfoTemplate(targetPlace, targetDetails ){
	
var details = "<img src='"+ targetDetails.imgUrl + "' width='42' height='42'>"
+"<h2>Target name - " + targetDetails.name + "</h2>"


	
	
	+ "<h1>Todo - full address: " + targetPlace.name + "</h1>"
	
	
	+"<p>Todo link: </p>";
	
	return details;
	

	
}

