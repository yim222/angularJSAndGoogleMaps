(function () {
    'use strict';

    angular.module('maiseApp').factory('dialogsService', dialogsService);

    dialogsService.$inject = ['$uibModal'];

    function dialogsService($uibModal) {
        var service = {
            confirm: confirm
        };

        return service;

        function confirm(objList, title, buttons){
            var modalInstance = $uibModal.open({
                templateUrl: "app/directive/addCase.html",
                controller: 'ConfirmModalCtrl',
                controllerAs: 'vm',
                resolve: {
                    data: function() {
                        return {
                           objlist: objList,
                            title: title,
                            buttons: buttons
                        };
                    }
                },
                size: 'lm'
            });

            return modalInstance.result;
        }
    }
})();