// AngularJS used for all areas of this app where possible.
(function() {

  var app = angular.module('lumneeApp', ['ui.bootstrap', 'ngMap']);
  // $http to call on the api's.

  app.controller('lumneeController' , ["$scope", "$http", function($scope, $http) {

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
          image: 'https://s3-eu-west-1.amazonaws.com/wdi7-project3-gwen-au/' + newWidth + '.JPG',
          text: ['Gunmakers Friday','The Gang','Girls of WDI7','Farewell Matt'][$scope.slides.length % 4]
        });
      };
      for (var i=0; i<4; i++) {
        $scope.addSlide();
      }

      // Drop down menu
      $scope.status = {
        isopen: false
      };
      $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
      };

      // Events
      $scope.events = gon.events
      $scope.selectedEvent = gon.selectedEvent
      
      // // mapsInitialized
      // $scope.$on('mapsInitialized', function(event, maps) {
      //   maps[0].setCenter()
      // });

  }])

})();