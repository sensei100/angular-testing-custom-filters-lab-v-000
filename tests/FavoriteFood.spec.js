describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  it('should filter the favorite foods correctly', function() { 
	 var list = [{
      name: 'Jennifer',
      favoriteFood: 'pizza'
    }, {
      name: 'Jackson',
      favoriteFood: 'enchiladas'
    }, {
      name: 'Oscar',
      favoriteFood: 'spaghetti'
    }, {
   }];

   var results = $filter('favoriteFood')(list, 'enchiladas');
    expect(results.length).toBe(1);
    expect(results[0].name).toBe('Jackson');
  });
});
