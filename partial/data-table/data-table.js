angular.module('tables').controller('DataTableCtrl',function($scope, $resource){
    // This does not work if you want to bind once
    $scope.persons = $resource('data.json').query();

    // This works
    /*$resource('data.json').query().then(function(persons) {
        $scope.persons = persons;
    });*/

});
