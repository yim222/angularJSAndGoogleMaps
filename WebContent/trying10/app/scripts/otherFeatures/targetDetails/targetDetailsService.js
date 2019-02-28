(function(){
	
	
	angular.module("targetDetails.module")
	.service("targetDetailsService",targetDetailsService);
	
	/**
	 * The servie need to get call with (data, isVla) . for indicating if it's vla screen or not. 
	 */
	
	function targetDetailsService(){
		
		
		console.log("targetDetailsService Here");
		
		//object containing the data
		this.data = targetDetailsObj;
			
			
		
		
	}
	
	
}());