/**
 * Created by Deb on 8/21/2014.
 */
(function () {
	"use strict";

	var app = angular
		.module("dataMock",
		["ngMockE2E"]);
	app.run(function ($httpBackend) {
		var productUrl = "/api/listCase";
		var caseUrl = "/api/listCasetarget";
		$httpBackend.whenGET(productUrl).respond(products);
		$httpBackend.whenGET(caseUrl).respond(caselist);
		var editingRegex = new RegExp(productUrl + "/[0-9][0-9]*", '');
		$httpBackend.whenGET(editingRegex).respond(function (method, url, data) {
			var product = { "Id": 0 };
			var parameters = url.split('/');
			var length = parameters.length;
			var id = parameters[length - 1];

			if (id > 0) {
				for (var i = 0; i < products.length; i++) {
					if (products[i].Id == id) {
						product = products[i];
						break;
					}
				};
			}
			return [200, product, {}];
		});
		var targetRegex = new RegExp(caseUrl + "/[0-9][0-9]*", '');
		$httpBackend.whenGET(targetRegex).respond(function (method, url, data) {
			var ca = { "Id": 0 };
			var parameters = url.split('/');
			var length = parameters.length;
			var id = parameters[length - 1];

			if (id > 0) {
				for (var i = 0; i < caselist.length; i++) {
					if (caselist[i].Id == id) {
						ca = caselist[i];
						break;
					}
				};
			}
			return [200, ca, {}];
		});
		var apitarget="/api/target";
			$httpBackend.whenGET(apitarget).respond(alltarget);
		var fburl = 'api/fburl';
		$httpBackend.whenPOST(fburl).respond(function (method, url, data) {
			var furl = data;
			console.log(url);
			return [200,fb , {}];
		});
		$httpBackend.whenPOST(productUrl).respond(function (method, url, data) {
			var product = angular.fromJson(data);

			if (!product.productId) {
				// new product Id
				product.productId = products[products.length - 1].productId + 1;
				products.push(product);
			}
			else {
				// Updated product
				for (var i = 0; i < products.length; i++) {
					if (products[i].productId == product.productId) {
						products[i] = product;
						break;
					}
				};
			}
			return [200, product, {}];
		});

		// Pass through any requests for application files
		$httpBackend.whenGET(/app/).passThrough();


	})
}());
