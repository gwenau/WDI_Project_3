(function() {

  var app = angular.module('LumneeApp', ['ngAnimate']);

// $http to call on the api's.
  app.controller('LumneeController' , ["$scope", "$http", function($scope, $http) {

      $http.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk").success(function(data){
        $scope.weatherData = data;
      })

  }])

})();