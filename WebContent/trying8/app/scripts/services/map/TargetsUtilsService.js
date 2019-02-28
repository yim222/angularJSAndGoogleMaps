/**
 * Service for operations of the targets 
 * //Todo -??- add it to the current js object of targets[], ??
 */
//
(function () {
	//Adding the service to the app
	angular.module('maiseApp').service("TargetsUtilsService",TargetsUtilsService);
	
	function TargetsUtilsService(){
		
		//test function
		this.test = function(){
			
			alert("TargetsUtilsService test");
		}
		
		
		
		//Get 1 target from array of targets by id
		this.getTargetById = function (id, fromTargets){

			
			var target ={
					
			};
			//get the right target...
			
			
			
			
			//assign to its object the value of newMarker
			//target = targets.find(findTargetById);
			target = fromTargets.find(function(target){
				
				return target.targetId === id;
				
			});
			
			return target;
		}
		
		//get array of targets from specific array by array of id's
		this.getTargetsById = function(ids, fromTargets){
			//alert("sadas");
			
			
			targets = [];
			for(var i = 0 ; i < ids.length; i++){
				
				targets.push(this.getTargetById(ids[i],fromTargets));
				
			}
			return targets;
			
			
		}
		
		
		//function for adding/removing id's from  id's array
		
		this.prepareIdsArr = function(id, idsArr){
		
			//check if the id exist at the idsArr
			id2 = idsArr.find(function(id2){
				
				return id2 === id;
				
			});
			
			//if exist...
			if(id2 != null || id2 !=undefined){
				
				//remove the id by cut the index of the array
				var index = idsArr.indexOf(id);
				idsArr.splice(index, 1);
			}
			
			//else - push
			else{
				
				
				idsArr.push(id);
				//and sort it by the order
				idsArr.sort();
								
				
			}
		}
		
		//check if id exist at id's array
		this.checkIfExist = function(id, idsArr){
			
			id2 = idsArr.find(function(idsArr){
				
				return idsArr === id;
				
			});
			
			return (id2 != null || id2 !=undefined);
			
			
		}
		
		//get app's targets
		this.getAppTargets = function(){
			
			return allTargets;
			
		}
		
		//get cases targets
		this.getCasesTargets = function(){
			return casesTargets;
			
		}
		
		this.updateNote = function(marker, text){
			alert ("updateNote");
			marker.note.text = text;
			
		}
		
		
	}//end of the service
	
	
	
	
	
	
	
}());