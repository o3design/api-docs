'use strict';

angular.module('docs.giv2giv.orgApp')
  .directive('apiDocs', function (globalData) {
    return {
      transclude: true,
      template: '<div>'
      				+'<h1>{{docsUrl}}</h1>'
      				+'<p>{{docsDescription}}</p>'
              +'<span>Access token:</span>'
              +'<input type="text" ng-model="accessToken"/>'
      				+'<div ng-transclude></div>'
      			+'</div>',
      restrict: 'E',
      scope: {
      	docsUrl: "@",
      	docsSsl: "@",
      	docsDescription: "@"
      },
      conroller: "MainCtrl",
      link: function postLink(scope, elm, attrs) {
          console.log(attrs.docsUrl);
          scope.docsUrl = attrs.docsUrl;
          console.log(scope.docsUrl);
      }
    };
  });
