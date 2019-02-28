/**
 * Created by Deb on 8/20/2014.
 */
(function () {
    "use strict";
    var app = angular.module("maiseApp",
        ["common.services",
            "ui.router",
            "dataMock",
            'ui.bootstrap']);
            //remove filter
    app.filter('startsWithA', function () {
        // function to invoke by Angular each time
        // Angular passes in the `items` which is our Array
        return function (items, letter) {
        var filtered = [];
      //  var letterMatch = new RegExp(letter);
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (new RegExp(letter).test(item.name)) {
                filtered.push(item);
            }
        }
        return filtered;
    };
    });
    angular.module('maiseApp').directive('maTargtes', function () {
        return {
            templateUrl: "app/directive/targets.html",
            restrict: "E",
            controller: "targetCtrl as vm"

        }
    })
    angular.module('maiseApp').directive('maMap', function () {
        return {
            templateUrl: "app/directive/map.html",
            restrict: "E",
            controller: "mapCtrl"

        }
    })
     angular.module('maiseApp').directive('test', function () {
        return {
            templateUrl: "app/directive/test.html",
            restrict: "E",
            controller: "mapCtrl"

        }
    })

    angular.module('maiseApp').directive('maTrlist', function () {
        return {
            templateUrl: "app/directive/targetlist.html",
            restrict: "E",
            scope: {
                id: '@',
                obj: '='
            },
            controller: "targetListCtrl"
        }
    })
    /*angular.module('maiseApp').directive('myLazyRender', function() {
      return {
        restrict: 'A',
        transclude: 'element',
        priority: 900,
        link: function(scope, el, attr, ctrl, transclude) {
          var hasBeenShown = false;
          var unwatchFn = scope.$watch(attr.myLazyRender, function(value) {
            if(value && !hasBeenShown) {
              hasBeenShown = true;
              transclude(scope, function(clone) {
                el.after(clone);
              });
              unwatchFn();
            }
          })
        }
      }
    })*/



    /*  app.config(["$stateProvider",
                  "$urlRouterProvider",
          function($stateProvider, $urlRouterProvider){
              $urlRouterProvider.otherwise("/");
  
              $stateProvider
                  .state("home", {
                      url: "/",
                      templateUrl: "app/welcomeView.html"
                  })
                  // Products
                  .state("productList", {
                      url: "/products",
                      templateUrl: "app/products/productListView.html",
                      controller: "ProductListCtrl as vm"
                  })
                  .state("productEdit", {
                      url: "/products/edit/:productId",
                      templateUrl: "app/products/productEditView.html",
                      controller: "ProductEditCtrl as vm"
                  })
  
          }]
      );*/
}());