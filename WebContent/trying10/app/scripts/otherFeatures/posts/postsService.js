(function(){
	
	
	angular.module("posts.module")
	.service("postsService",postsService);
	
	
	function postsService(){
		
		
		console.log("postsService Here");
		
		//object containing the data
		this.data = postsObj;
			//alert("data = " + this.data[0].post_id);
		
		
		/**
		 * Currently not in use
		 */
		//function for check if element bigger then necessary
		//for determine if to add it the toggle text button
		
		this.isLongText2 = function(element, thenNPx){
			alert(element);
			/*
			alert(element.currentTarget);
			var x = angular.element(element);//.target.attr('id');
			alert(x[0].offsetHeight);
			alert(element.currentTarget.prop('offsetHeight'));
			*/
			
			var x = document.getElementById(element);
			//var y = var color = $( this ).css( "background-color" );
			var y = $('#'+element).css( "height" );
			alert(y);
		}
		
		
		//functio for check if the phrase shorter then n characters.
		this.isShortText = function(phrase, maxChars ){
			
			
			//alert(phrase.length + " = chars");
			if (phrase.length > maxChars){
			
			
			
			return false;
			
			
			}
			return true;
		
		}
		
	}
	
	
}());