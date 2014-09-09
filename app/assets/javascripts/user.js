(function() {

  var app = angular.module('LumneeApp', ['ui.bootstrap']);

// $http to call on the api's.
  app.controller('LumneeController' , ["$scope", "$http", function($scope, $http) {

      // Temperature api currently hardcoded to London in degrees celcius
      $http.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&mode=json&units=metric").success(function(data){
        $scope.weatherData = data["main"]["temp"];
      })

      // Carousel, currently programmed to displaying kittens.
      $scope.myInterval = 5000;
      $scope.slides = [];
      $scope.addSlide = function() {
        var newWidth = 601 + $scope.slides.length;
        $scope.slides.push({
          image: 'http://placekitten.com/' + newWidth + '/300',
          text: ['More','Extra','Lots of','Surplus'][$scope.slides.length % 4] + ' ' +
            ['Cats', 'Kittys', 'Felines', 'Cutes'][$scope.slides.length % 4]
        });
      };

      for (var i=0; i<4; i++) {
        $scope.addSlide();
      }

  }])

})();