/**
 * @ngdoc interface
 * @name tables
 * @module tables
 * @description
 *
 * # tables (core module)
 * The tables module is loaded by default.
 */
angular.module('tables', ['ui.bootstrap','ui.utils','ui.router','ngAnimate','datatables','ngResource']);


angular.module('tables').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('table', {
        url: '/',
        templateUrl: 'partial/data-table/data-table.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/');

});

angular.module('tables').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
