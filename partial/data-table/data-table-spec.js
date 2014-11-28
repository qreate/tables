describe('DataTableCtrl', function() {

	beforeEach(module('tables'));

	var scope,ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('DataTableCtrl', {$scope: scope});
    }));	

	it('should ...', inject(function() {

		expect(1).toEqual(1);
		
	}));

});