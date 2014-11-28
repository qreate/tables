/**
 * @ngdoc directive
 * @name tables.directive:rowDetails
 *
 * @description
 * Description of row-details directive, lorem ipsum dolar sit amet
 *
 */
angular.module('tables').directive('rowDetails', function() {
	return {
		restrict: 'EA',
		replace: true,
		scope: {

		},
		templateUrl: 'directive/row-details/row-details.html',
		link: function(scope, element, attrs, fn) {
            scope.expand = function(){
                alert('hepp');
            }


		}
	};
});
