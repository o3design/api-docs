'use strict';

angular.module('docs.giv2giv.orgApp')
  .directive('endpoint', function () {
    return {
      template: '<div class="endpoint">'
      				+'<div class="endpoint__heading">'
      					+'<span class="endpoint__method">{{epMethod | upperCase}}</span>'
      					+'<span class="endpoint__url">{{epUrl}}</span>'
      				+'</div>'
      				+'<form>'
      					+'<p class="endpoint_description">{{epDescription}}</p>'
      					+'<div class="endpoint__params" ng-transclude></div>'
      					+'<button class="btn" ng-click="submit()">Try it</button>'
      				+'</form>'
      				+'<div class="endpoint__request" ng-show="request">'
      					+'<span>Request url:</span>'
      					+'<span>{{requestUrl}}</span>'
      				+'</div>'
      				+'<div class="endpoint__request" ng-show="request">'
      					+'<span>Request</span>'
      					+'<pre>{{request}}</pre>'
      				+'</div>'
      				+'<div class="endpoint__response" ng-show="response">'
      					+'<span>Response</span>'
      					+'<span class="endpoint__response-code" ng-class="responseClass">{{responseCode}}</span>'
      					+'<pre>{{response}}</pre>'
      				+'</div>'
      			+'</div>',
      restrict: 'E',
      transclude: true,
      scope: {
      	epUrl: "@",
      	epMethod: "@",
      	epDescription: "@",
      	epFormat: "@",
      	request: "@",
      	response: "@",
      	responseCode: "@"
      },
      controller: "MainCtrl",
      link: function(scope, elm, attrs) {
      }

    }
});
