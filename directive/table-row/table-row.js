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
        transclude: true,
		scope: false,
		templateUrl: 'directive/table-row/table-row.html',
		link: function(scope, element, attrs, fn) {
            scope.person.details = false;
            var isShown = scope.person.details;

            scope.showDetails = function(){
                if(!isShown) {
                    scope.person.details = true;
                    isShown = scope.person.details;
                } else {
                    scope.person.details = false;
                    isShown = scope.person.details;
                }
            }

		}
	};
});
