(function(){
	
	
	angular.module("keywords.module")
	.service("keywordsService",keywordsService);
	
	
	function keywordsService(){
		
		
		console.log("keywordsService Here");
		
		//Object for containing the data. 
		this.data = keywordsObj;
		
		//function for filter the data that pass to the view:
		
		this.getData = function(filterBy, value){
			
			
			return keywordsObj;
		}
		
		
		function filterByDuration(value){
			
			
			
		}
	}
	
	
	
}());