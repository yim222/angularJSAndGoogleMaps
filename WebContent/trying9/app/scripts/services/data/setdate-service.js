(function () {
    "use strict";
    angular.module('maiseApp').service("setDataService", ["dataSerivce", setDataService]);
    function setDataService(dataSerivce) {
        this.getdata = function (data) {
            var activeCase = [];
            angular.forEach(data, function (item, key) {
                if (item.hasOwnProperty('target')) {
                    item.active = true;
                    activeCase.push(item);
                }
                else {
                    item.active = false;
                }
            });
            removecopytarget(activeCase);
        } // end  of  getdata func
        function removecopytarget(activeCase) {
            var targetId = [];
            if (activeCase.length > 0) {
                angular.forEach(activeCase, function (item, key) {

                    angular.forEach(item.target, function (value, key) {

                        if (targetId.indexOf(value.targetId) === -1) {
                            targetId.push(value.targetId);
                        }
                        else {
                            item.target.splice(key, 1);
                        }
                    })
                })
            }



        } // end  of the  remove  function 
        this.chekActiv = function (data, id) {
            angular.forEach(data, function (item, key) {
                if (item.Id === id) {
                    if (item.active === true) {
                        item.active = false;
                        delete item["target"];
                        /* send   to dataservice   case is not active*/

                    }
                    else {
                        item.active = true;
                        dataSerivce.getTargetById(id)
                            .then(getObjSuccess)
                            .catch(errorCallback)
                            .finally(getAlldata);
                        function getObjSuccess(target) {
                        // only for dev  
                           delete target["Name"];
                           delete target["Id"];
                           //
                            angular.forEach(target, function (value, key) {
                                item.target=value;
                            });
                        }
                        function errorCallback(errorMsg) {
                            console.log('Error Message: ' + errorMsg);
                        }
                        function getAlldata() {

                        }

                    }
                }
            })
            return data;
        }
        this.addfburl=function(val)
        {
               dataSerivce.chekfacbookurl(val)
              .then(getObjSuccess)
              .catch(errorCallback)
              .finally(getAlldata);
              var  tr

            function getObjSuccess(newtarget) {
             /* $scope.obj.target.push(newtarget);
              $scope.tl.push(newtarget);
                  $scope.search = "";*/
                
            }
            function errorCallback(errorMsg) {
              console.log('Error Message: ' + errorMsg);
            }
            function getAlldata(val) {
           return tr;    
        }

    }
    this.getalltarget=function(scope)
    {
        dataSerivce.getalltargetdb()
              .then(getObjSuccess)
              .catch(errorCallback)
              .finally(getAlldata);
            

            function getObjSuccess(response) {
             /* $scope.obj.target.push(newtarget);
              $scope.tl.push(newtarget);
                  $scope.search = "";*/
               // scope.tl=response;
                scope.tar=response;
                scope.tl = scope.tar;
            }
            function errorCallback(errorMsg) {
              console.log('Error Message: ' + errorMsg);
            }
            function getAlldata(response) {
            
        }

    }
    } // end of  the service
}());