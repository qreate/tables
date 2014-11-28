/**
 * @ngdoc directive
 * @name tables.directive:tableRow
 *
 * @description
 * Description of table-row directive, lorem ipsum dolar sit amet
 *
 */
angular.module('tables').directive('tableRow', function() {
	return {
		restrict: 'EA',
		replace: true,
		scope: {

		},
		templateUrl: 'directive/table-row/table-row.html',
		link: function(scope, element, attrs, fn) {


		}
	};
});
