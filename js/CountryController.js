angular
  .module('ngCountry')
  .controller('CountryController', function($http, $scope, CountryFactory) {

    $scope.countries;

    CountryFactory.getCountries().success(function(data) {
          $scope.countries = data;
          console.log("GOT IT");
        }).error(function(error) {
          console.log(error);
        });

        });
