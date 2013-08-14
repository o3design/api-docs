'use strict';

angular.module('docs.giv2giv.orgApp')
  .directive('apiDocs', function () {
    return {
      scope:{ docsUrl: "@url", docsSsl: "@ssl", docsDescription: "@desc" },
      transclude: true,
      template: '<div>'
      				+'<h1>{{docsUrl}}</h1>'
      				+'<p>{{docsDescription}}</p>'
              +'<span>Access token:</span>'
              +'<input type="text" ng-model="authToken"/>'
      				+'<div ng-transclude></div>'
      			+'</div>',
      restrict: 'E',
      controller: function($scope, $rootScope){
        this.data = $scope;


        $rootScope.$on("ParamUrl.Updated", function(event, value){
          $rootScope.param = value;
        });

        
      },
      link: function postLink(scope, elm, attrs) {
      }
    };
  });
