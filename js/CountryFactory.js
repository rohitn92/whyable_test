
angular
  .module('ngCountry')
  .factory('CountryFactory', function($http) {

    function getCountries() {
      return $http.get('countries.json');
    }

    return {
      getCountries: getCountries
    }

  });
