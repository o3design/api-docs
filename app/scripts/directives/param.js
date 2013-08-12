'use strict';

angular.module('docs.giv2giv.orgApp')
  .directive('param', function () {
    return {
      template: '<div class="endpoint__param">'
      	      		+'<label class="endpoint__param-label">{{name}}:</label>'
                  +'<ng-switch on="type">'
                    +'<input ng-switch-when="url" type="text" ng-model="urlParam.id" class="endpoint__param-input"/>'
      	      	  	+'<input ng-switch-default type="text" name="{{name}}" value="{{default}}" class="endpoint__param-input"/>'
                  +'</ng-switch>'
      	      		+'<span class="endpoint__param-type">{{type}}</span>'
      	      		+'<span>{{description}}</span>'	      		
          			+'</div>',
      restrict: 'E',
      replace: true,
      scope: {
      	name: "@name",
      	type: "@type",
      	description: "@description",
      	default: "@default"
      },
      link: function(scope, iElement, iAttrs) {
         
      }
    };
  });
