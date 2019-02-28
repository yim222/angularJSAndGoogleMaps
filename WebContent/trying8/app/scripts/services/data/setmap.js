(function () {
    "use strict";

    angular
        .module("maiseApp")
        .factory("setmap",[setmap])
    function setmap()
    {
       /* var map={
            targetid:"",
            targetName:"",
            targetUrl:"",
            marker:""
        } ;
        var getmap = function (obj) {
           angular.forEach(obj, function (item, key) {
                angular.forEach( item, function (inner, key) {
              console.log(inner);
             });
              
           });
        };
       */
        return {
            getmap:getmap
        }

    }
})();