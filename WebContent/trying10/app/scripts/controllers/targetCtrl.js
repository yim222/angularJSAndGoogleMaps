(function () {
    "use strict";
    angular
        .module("maiseApp")
        .controller("targetCtrl",["dataSerivce","$q","$scope","dialogsService","setDataService",targetCtrl]);

    function targetCtrl(dataSerivce,$q,$scope,dialogs,setDataService) {
        var vm = this;
       dataSerivce.getTarget()
        .then(getObjSuccess)
            .catch(errorCallback)
            .finally(getAlldata);

        function getObjSuccess(caselist) {
            setDataService.getdata(caselist);
            console.log(caselist);
        vm.caseObj = caselist; 
        }
  function errorCallback(errorMsg) {
            console.log('Error Message: ' + errorMsg);
        }
        function getAlldata() {
            
        }
          
   
        vm.addCase=function()
        {
     var cd=[];
            dataSerivce.getCaseData()
        .then(getCaseSuccess)
            .catch(errorCallback)
            .finally(getallCase);
      function getCaseSuccess(datacase) {
   cd=datacase;
    }
    function getallCase() {
      dialogs.confirm(cd, 'Add Case', ['OK', 'Cancel']) .then(function(data){
                  console.log(data);
                          dataSerivce.addCase(data);            
            });
    }
      
 
              
        }
    vm.addRomve=function(id)
        {
        var objlist=  setDataService.chekActiv(vm.caseObj,id);
        console.log(objlist);     
        vm.caseObj=objlist; 
        }
         
    }
   
    
}());
