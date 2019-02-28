(function(){
	
	
	angular.module("vla.module")
	.service("vlaService",vlaService);
	
	
	function vlaService(){
		
		//variables//********************************
		//object containing the data
		this.data = vlaObj;// test vlaObj2 too..
		
		console.log("vlaService Here");
		//object of the setting of the SVG graphic. change it as you want
		var shapesSettings ={
			circleRadius : 20 //35 by the style guide
			,lineCircleLength : 30	//the length of the vertical line that linkked to the circle
			,rangeBetweenLines: 80//the range between the lines that linked to images
			,rBigCircle : 60// the r of the center circle
			, maxCircles: 6// the maximum amount of circles in each branch . 
			,fontSIze : 14//set the font size of the text(name)
				
		};
		shapesSettings.rangeBetweenRadiuses = (shapesSettings.circleRadius + shapesSettings.lineCircleLength)*2; 
		//console.log(shapesSettings.rangeBetweenRadiuses  + "=x");
		
		
		
		///functions***********************///
		this.test1 = function(scope){
			//alert("service");
			 scope.myHTML =
			     'I am an <code>HTML</code>string with ' +
			     '<a href="#">links!</a> and other <em>stuff</em>';
			     
			  scope.html2 = 
				  '<svg height = "200" width = "700">'
				
				+' <circle cx = "50" cy= "80" r= "40" stroke="blue" stroke-width="5"/> '
				+ '<line x1="50" y1="120"   x2="50" y2="200" stroke="orange" stroke-width="5"/>'
				+'</svg>';
			
			
			
		};
		this.test2 = function(scope){
			
			var moveRight = 30;
			var xPosition = 50;
			var generatedShape = "";
			for (var i = 0 ;  i  < 5 ; i++){
				//+'<defs><clipPath id="circleView1">'
				//+'/> </clipPath></defs>'
				//+''
				generatedShape += ""
				
					+' <circle cx = "' + xPosition +'" cy= "80" r= "20" stroke="blue" stroke-width="2"/>'
					
					
					+ '<line x1="' + xPosition +'" y1="100"   x2="' + xPosition  + '" y2="200" stroke="orange" stroke-width="2"/>';
					
				xPosition += 50;
				
			}
			
			scope.html3 = 
				  '<svg height = "200" width = "700">' + generatedShape + '</svg>';
			
			
			
			
		};
		
		this.test3 = function (){
			
			return "<p ng-click= 'testFunc1()'>I am rendered</p>";
		};
		
		this.sendDataToServer = function(id){
			
			console.log ("Todo - getTargetDetails(id = +"+ id + " isVla = true");
		};
		
		/*
		 doCircleLine(x, ,y , direction, imgUrl);
		 */
		this.doCircleLine = function(x,y, direction, contentToInsert){
			if(contentToInsert){
				console.log("text = " + contentToInsert.name 
						+"img =  "+ contentToInsert.img 
						+ "id = " + contentToInsert.id);
				
				
			}
			//in case it's undefined:
			content = {name: "NA", img : "NA", id : -1};
			if(contentToInsert){
				content = contentToInsert;
			}
			//preparing image pattern
			imgPattern = 
				'<defs>'
		  +'<pattern id="trgtImg'+content.id+'" x="0%" y="0%" height="100%" width="100%"'  
		 +'  viewBox="0 15  70 70" style = "display :block;">'          
		    +'<image x="0%" y="0%" width="100" height="100" xlink:href="'+content.imgUrl + ' "></image>'  
		  +'</pattern>'  
		+'</defs>'  ;
			
			var point = {x:x, y:y};//this is the demand of the start point
			//define the right details : 
			cx = point.x; cy =  point.y; r = shapesSettings.circleRadius;
			lineX12 = cx; 
			textY = "";
			//implemetation for to down direction
			if (direction === 'down'){
				y1 = cy + r;
				console.log("y1 = " + y1);
				//for down y1 = r +cy / for up r - cy 
				
				//y2 down = y1 + lineLength for up y1 - linelength
				y2 = y1 + shapesSettings.lineCircleLength;
				textY = (cy -r -12 );
				}
			else if(direction === 'up'){
				y1 = cy - r;console.log("y1 = " + y1);
				//for down y1 = r +cy / for up r - cy 
				
				//y2 down = y1 + lineLength for up y1 - linelength
				y2 = y1 - shapesSettings.lineCircleLength;
				textY = (cy +r +14 + 2 );
				
				
			}
			
			htmlCode = 
//trying..
				imgPattern + '<text x="'+  (cx - r - 10) + '" y="' +textY +'" class = "svgText" >'+ content.name + '</text>'
				+' <circle cx = "'+  cx + '" cy= "' +cy  +'" r= "'+ r +'" stroke="blue" stroke-width="2" fill = "url(#trgtImg'+content.id+')" '
				//+' ng-click= "sendDataToServer('+content.id+')"/> '
				+' ng-mouseover = "sendDataToServer('+content.id+')"/> '
				+ '<line x1="'+  lineX12+'" y1="' + y1 + '"   x2="'+ lineX12+  '" y2="'+ y2 + '" stroke="white" stroke-width="1"/>';
			return htmlCode;
				
		};
		
		
		//function for create a hand(branch) of the circles with lines
		this.doLineOfCircleLines = function( x,y, amount, range, direction, contentArr){
			//todo - u need make one up one downV //u need to do it by amount -V  //range - V/ / DIRECTION V
			//LATER - enter targets details (in the future
			//will be used as amount too... 

			//case to left : 
			if( direction === "left"){
				range = 0-range;
				
				
			}
			
			
			//first implement to right then to left. 
			var moveRight = 30;
			var xPosition = range;
			var connectingThreadX1 = xPosition - range;// U can also do : shapesSettings.circleRadius*2;
			var verDir ="";
			//The connecting thread is need to be on x - r*2(rxcept the 1st time)  /y to x/y r 
			
			//Finding the right amount of loop (every 2 needs one loop)
			var loops = Math.ceil(amount / 2);
			var htmlCode = "";
			var lineCounter = 0;
			//var for assign the current content. 
			var content = { };
			
			for (var i = 1 ;  i  <= loops  ; i++){
				
				//-xPosition;
				//trying(
				
				
				//one up one down
				if (i % 2 != 0 ){//that's the first and odd element
					
					verDir = "up";
				}
				else{
					
					varDir = "down";
				}
				
				console.log("shapesSettings.rangeBetweenRadiuses = " + shapesSettings.rangeBetweenRadiuses);
				
				htmlCode += this.doCircleLine( xPosition + x,y - shapesSettings.rangeBetweenRadiuses/2, "down", contentArr[lineCounter]);
				lineCounter++;
				if( lineCounter == amount){
					xPosition += range;
					break;
					
				}
				htmlCode += this.doCircleLine( xPosition + x,y + shapesSettings.rangeBetweenRadiuses/2, "up", contentArr[lineCounter]);
				lineCounter++;
				//but u don't do the connecting line in the loop do it after by getting the requested data. 
				xPosition += range;
				
			}
			var connectingThreadX2 = xPosition - range + x;
			htmlCode += '<line x1="'+ x +'" y1="' + y  +  '"   x2="'+ connectingThreadX2+  '" y2="'+y + '" stroke="white" stroke-width="1"/>';
			return htmlCode;
			
			
		};
		
		/**
		 * 3-Function that use at the above functions. It should take the groups object and up to the fourth group it’s should generate scheme like in the image. 


		 */
		//u can set the setting in the object above of the shapes settings. 
		this.doVlaScheme = function(x,y,vlaObj){
			
			
			var branchXY = {x: 225 ,y: y - shapesSettings.rangeBetweenRadiuses * 2};
			
			
			
			var htmlCode = "";
			
			
			
			
			
			branchsAmount = vlaObj.relatedTargetsList.length;
			var currentTarget = vlaObj;
			
			
			//var for set he amount of the circles in each branch
			var branchCircles = 0;
			//trying
			for (var i = 1 ; i<= branchsAmount ; i++){
				//console.log ("i = " + i);
				branchCircles = vlaObj.relatedTargetsList[i-1].targets.length;
				contentArr = vlaObj.relatedTargetsList[i-1].targets;
				//alert ("group = " + vlaObj.relatedTargetsList[i-1].groupId);
				if (branchCircles > shapesSettings.maxCircles ){
					
					branchCircles = shapesSettings.maxCircles;
				}
				
				//for each group we create branch in other corner.
				if(i == 1){
					htmlCode += '<line x1 = "'+ x+ '" y1 =   "'+y+ '" '
					+' x2 = "'+(x + branchXY.x) +'" y2  = "'+y+ '" stroke="#ffffff" stroke-width="1"/>';
					htmlCode += this.doLineOfCircleLines(x + branchXY.x , y, branchCircles, shapesSettings.rangeBetweenLines, "right", contentArr);
					
				}
				else if(i == 2){
					
					htmlCode += '<line x1 = "'+ x + '" y1 =   "'+y+ '" '
					+' x2 = "'+(x + branchXY.x) +'" y2  = "'+branchXY.y+ '" stroke="#ffffff" stroke-width="1"/>';
					htmlCode += this.doLineOfCircleLines(x + branchXY.x , branchXY.y, branchCircles, shapesSettings.rangeBetweenLines, "right", contentArr);
					
				}
				else if(i == 3){
					htmlCode += '<line x1 = "'+ x + '" y1 =   "'+y+ '" '
					+' x2 = "'+(x - branchXY.x) +'" y2  = "'+y+ '" stroke="#ffffff" stroke-width="1"/>';
					htmlCode += this.doLineOfCircleLines(x - branchXY.x , y,branchCircles, shapesSettings.rangeBetweenLines, "left", contentArr);
					
				}
				
				else if(i == 4){
					htmlCode += '<line x1 = "'+ x + '" y1 =   "'+y+ '" '
					+' x2 = "'+(x - branchXY.x) +'" y2  = "'+branchXY.y + '" stroke="#ffffff" stroke-width="1"/>';
					htmlCode += this.doLineOfCircleLines(x - branchXY.x ,branchXY.y, branchCircles, shapesSettings.rangeBetweenLines, "left",contentArr);
					
				}
				
				
			}
			
			imagePattern ='<defs>' 
				 +'<pattern id="targetImage"   x="0%" y="0%" height="100%" width="100%"'
	             +'viewBox="30 30 140 140" style = "display :block;">' 
				+'<image xlink:href="'+ currentTarget.imgUrl+'" x="0%" y="0%" width="200" height="200"  />'
				+' </pattern>' 
				+'</defs>';
			htmlCode += imagePattern + '<text class = "white semibold fSize18" x="'+  (x - shapesSettings.rBigCircle ) + '" y="' +( y + shapesSettings.rBigCircle + 20) + '" class = "svgText" >'+ currentTarget.name + '</text>'
			+'<circle cx = "'+ x + '" cy= "'+ y + '" r= "'+ shapesSettings.rBigCircle + '" stroke="#ffffff" stroke-width="1"'
			+' fill="url(#targetImage)"/>';
			//+ '<line x1 = "'+ (x +shapesSettings.rBigCircle )+ '" y1 =   "'+y+ '" '
			//+' x2 = "'+(x + branchXY.x) +'" y2  = "'+y+ '" stroke="#ffffff" stroke-width="1">';
			return htmlCode;
			
			
		};
		//return functon
		this.returnFunc = function(){
			console.log("returnedFunc");
			
			return "I am returned string from service";
		};
		
		//alert("sss");
		this.showImg = function(){
			
			str1 = ''
				+'<defs>' 
			   	+'<clipPath id="circleView1">'     
			    +'<circle cx="250" cy="125" r="50" fill="#FFFFFF" /> '                   
			    +'</clipPath>'    
			    +'</defs>'
			    +'<image id = "img1" width="500" height="250" xlink:href="file:///C:/izhar/files/eclipse_workspace/Margoling-Project_2/WebContent/trying10/app/images/monkey.jpg" x="10" y="10" '
			    +'/>';
			    
			return str1;

			
		};
		
	}//end of service function
	
	
}());