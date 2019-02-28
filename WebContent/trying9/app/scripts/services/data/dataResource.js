/**
 * Created by Deb on 8/21/2014.
 */
(function () {
    "use strict";
    angular
        .module("common.services")
        .factory("dataSerivce", ['$q', '$timeout', '$http', dataSerivce]);

    function dataSerivce($q, $timeout, $http) {

        var serivce = {
            getTarget: getTarget,
            addCase: addCase,
            getTargetById: getTargetById,
            getCaseData:getCaseData,
            getCaseTargetById:getCaseTargetById,
            chekfacbookurl:chekfacbookurl,
            getalltargetdb:getalltargetdb
        };
        return serivce;
        /*function getTarget(){var obj=$resource("/api/products/:productId");
 return obj
        }*/
        function getTarget() {
            return $http({
                method: 'GET',
                url: "/api/listCase"

            })
                .then(sendResponseData)
                .catch(sendGetBooksError)

        }
        function getCaseData() {
            return $http({
                method: 'GET',
                url: "/api/listCasetarget"

            })
                .then(sendResponseData)
                .catch(sendGetBooksError)

        }
        function sendResponseData(response) {
            return response.data;
        }
        function sendGetBooksError(response) {

            return $q.reject('Error retrieving target(s). (HTTP status: ' + response.status + ')');

        }
        function getTargetById(id) {
            return $http({
                method: 'GET',
                url: "/api/listCasetarget/"+id 
            })
                .then(sendResponseData)
                .catch(sendGetBooksError)
        }
        function addCase(newCase) {

            return $http.post('api/listCase', newCase, {
                transformRequest: transformPostRequest
            })

                .then(addCaseSuccess)
                .catch(addCaseError);
        }
         function chekfacbookurl(url) {

            return $http.post('api/fburl', url, {
                //transformRequest: transformPostRequest
            })

                .then( chekfacbookurlSuccess)
                .catch(addCaseError);
        }
        function getCaseTargetById(id) {
            return $http({
                method: 'GET',
                 url: "/api/listCasetarget/"+id 
            })
                .then(sendResponseData)
                .catch(sendGetBooksError)
        }
function getalltargetdb(){
          return $http({
                method: 'GET',
                url: "/api/target"

            })
                .then(sendResponseData)
                .catch(sendGetBooksError)
}
        function transformPostRequest(data, headersGetter) {

            data.newCase = true;

            console.log(data);

            return JSON.stringify(data);
        }
function chekfacbookurlSuccess(response)
{
    return response.data;
}
        function addCaseSuccess(response) {
console.log(response);
            return 'Case added: ' + response.config.data.title;

        }

        function addCaseError(response) {

            return $q.reject('Error adding Case. (HTTP status: ' + response.status + ')');

        }
    }
}());
