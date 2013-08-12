'use strict';

angular.module('docs.giv2giv.orgApp')
  .controller('MainCtrl', function($scope, globalData, $element, $http){
  	$scope.urlParam = {id: 123};

  	$scope.docsUrl = "www.giv2giv.org/api";
  	$scope.docsSsl = "true";
  	$scope.authToken = "agrSxvOLWjecr3ouMvxRJQ";

  	console.log($scope);	

	$scope.submit = function(){

		var formData = $element.find('form').serializeArray();

		var requestObj = {}
	
		$.each(formData, function(i, v){
			requestObj[v.name] = v.value;
		});

		$scope.request = JSON.stringify(requestObj);

		var httpProtocol = "";

		if($scope.docsSsl == "true"){
			httpProtocol = "https://"
		}else{
			httpProtocol = "http://"
		}

		$scope.requestUrl = httpProtocol + $scope.docsUrl + $scope.epUrl;


		$http({method: $scope.epMethod.toUpperCase(), 
			url:  $scope.requestUrl, 
			data: $scope.request,
			headers: {'Authorization': 'Token token=' + $scope.authToken}
		})
		.success(function(data, status, headers, config){
			$scope.response = data;
			$scope.responseCode = status;
			$scope.responseClass = "endpoint__response-code--success";
		})
		.error(function(data, status, headers, config){
			$scope.response = data;
			$scope.responseCode = status;
			$scope.responseClass = "endpoint__response-code--error";
		});

	}

});
