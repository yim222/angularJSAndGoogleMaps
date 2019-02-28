(function () {
  "use strict";
  angular.module('maiseApp').controller('ConfirmModalCtrl', ConfirmModalCtrl);

  ConfirmModalCtrl.$inject = ['$uibModalInstance', 'data', '$scope', 'dataSerivce','$compile'];

  /* @ngInject */
  function ConfirmModalCtrl($modalInstance, data, $scope, dataSerivce,$compile) {
    var vm = this;
    vm.cancel = cancel;
    vm.ok = ok;
    vm.properties = data;
    vm.list = data.objlist;
    $scope.newCase = {};
    console.log(vm.list);
    /* $scope.toggleDropdown = function($event) {
       $event.preventDefault();
       $event.stopPropagation();
       $scope.status.isopen = !$scope.status.isopen;
     };*/
    vm.showtarget = function () {

      // var chart = angular.element(document.createElement('<div ma-Trlist></div ma-Trlist>'));
     /*        var  templet=$compile("<ma-Trlist id='"+id+"'></ma-Trlist>");
         var eli = $compile( templet)( $scope );

      //var  wrapper=templet($scope);
     var el = angular.element( document.querySelector( '#d'+id ) );
        el.append(eli);*/
    }

    function cancel() {

    }

    function ok() {

      console.log($scope.newCase);
      $modalInstance.close($scope.newCase);
    }
  }

}());
