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
        transclude: true,
		templateUrl: 'directive/row-details/row-details.html',
		link: function(scope, element, attrs, fn) {

		}
	};
});
