(function () {
  "use strict";
  angular.module('maiseApp').controller('targetListCtrl', targetListCtrl);
  targetListCtrl.$inject = ['$scope', '$filter', 'dataSerivce', 'setDataService'];
  function targetListCtrl($scope, $filter, dataSerivce, setDataService) {
    var watch
    $scope.tar = [];
    $scope.load = false;
    $scope.toglle = false;
    $scope.addinput = false;
 $scope.addlist = {
   targetId:[],
   caseid:""
 };
    $scope.togle = function () {
      if ($scope.toglle == true) {
        $scope.toglle = false;
      }
      else {
        $scope.toglle = true;
      }
    }
    $scope.showCase = function () {
      $scope.tl = $scope.obj.target;
      $scope.togle();
    }

    $scope.editCase = function () {
      if ($scope.addinput == true) {
        $scope.addinput = false;

        watch();
        $scope.search = "";
      }
      else {
        $scope.addinput = true;
        $scope.tl = $scope.tar;
        if (!$scope.load) {
          setDataService.getalltarget($scope)
          $scope.tl = $scope.tar;
          $scope.load = true;
        }

        setwatch();
      }
      $scope.togle();
     
    }
    $scope.print=function()
    {
 console.log($scope.addlist);
    }
    function setwatch() {
      $scope.tl2 = $scope.tl;

      watch = $scope.$watch('search', function (val) {
        $scope.tl = $filter('filter')($scope.tl2, val);

        if (undefined != val)
          // if (new RegExp(val).test('(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?')) {
          //  var test= new RegExp('(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?');

          //'/\btest(er|ing|ed|s)?\b/'.test(val);
          if (/(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/.test(val)) {
            dataSerivce.chekfacbookurl(val)
              .then(getObjSuccess)
              .catch(errorCallback)
              .finally(getAlldata);

            function getObjSuccess(newtarget) {

              $scope.tar.push(newtarget);
              $scope.tl2 = $scope.tar;
              // $scope.tl = $scope.tar;
              $scope.search = "";
            }
            function errorCallback(errorMsg) {
              console.log('Error Message: ' + errorMsg);
            }
            function getAlldata() {
            }
          }

      });

    }

    /*var targetlist=[];
     angular.forEach($scope.obj.target, function (item, key) {
    targetlist.push(item.name)
    
    });
    
    this.updateUsers = function (targetname) {
        this.filteredUsers = $filter('filter')(targetlist, targetname);
    
      };
      
      this.filteredUsers = targetlist;*/
    /*dataSerivce.getCaseTargevtById($scope.id)
      .then(getObjSuccess)
      .catch(errorCallback)
      .finally(getAlldata);
    function getObjSuccess(targetlist) {

      
      var trlist = [];
      // remove on production
      angular.forEach(targetlist, function (item, key) {
        if (key == "target") {
          angular.forEach(item, function (value, key) {
            trlist.push(value);
          })
        }
      })
          $scope.items = trlist;
     
    }
    function errorCallback(errorMsg) {
      console.log('Error Message: ' + errorMsg);
    }
    function getAlldata() {

    }*/
  }


})()