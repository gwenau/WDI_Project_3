(function() {

  var app = angular.module('lumneeApp', ['ui.bootstrap', 'ngMap']]);
 
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
          text: ['Gunmakers','The','Girls of','Farewell'][$scope.slides.length % 4] + ' ' +
            ['Friday', 'Gang', 'WDI7', 'Matt'][$scope.slides.length % 4]
        });
      };
      for (var i=0; i<4; i++) {
        $scope.addSlide();
      }

      // Drop down menu
      $scope.items = [
        'The first choice!',
        'And another choice for you.',
        'but wait! A third!'
      ];
      $scope.status = {
        isopen: false
      };
      $scope.toggled = function(open) {
        console.log('Dropdown is now: ', open);
      };
      $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
      };

      // Google maps
      $scope.map
      $scope.markers = {}
      $scope.shapes = {}
      $scope.markerCluster = {}
      // mapsInitialized
      $scope.$on('mapsInitialized', function(event, maps) {
        maps[0].setCenter()
      });


      // // Add Chat
      // $scope.chatlines = [{username: "Mike", line: "Hello World"}];
      // // $scope.other = [];

      // $http.get('/chat.json').success(function(data) {
      //   $scope.chatlines = data;
      // })


      // $scope.addlines = function (chat) {
      //   console.log("addLinesFunctionFired.")
      //   console.log($scope.chat)
      //   $scope.chatlines.push($scope.chat)
        
        
      //   $http.post('/chat.json', { chatline: $scope.chat}).success(function(data) {
      //       $scope.chatlines.push(data)
      //       $scope.chat = false        
      //     })
      // }


  }])

})();