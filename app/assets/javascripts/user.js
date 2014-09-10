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
          image: 'http://placekitten.com/' + newWidth + '/300',
          text: ['More','Extra','Lots of','Surplus'][$scope.slides.length % 4] + ' ' +
            ['Cats', 'Kittys', 'Felines', 'Cutes'][$scope.slides.length % 4]
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


      // Add Chat
      $scope.chatlines = [];
      $scope.newLine = false;

      $http.get('/chats.json').success(function(data) {
        $scope.chatlines = data;
      })

      $scope.addlines = function () {
        console.log("newLine")
        $http.post('/chat.json', { chatline: $scope.newLine}).success(function(data) {
            $scope.chatlines.push(data)
            $scope.newLine = false;
            // $scope.stallForm.$setPristine()            
          })
      }
    
      // Word shuffle 
      // var word = document.getElementById('hidden');
      // console.log(word.value)

      // $scope.answer = []
      // $scope.submitAnswer = function(){
      //   console.log($scope.answer)
      //   if ($scope.answer === word.value){
      //     console.log("Correct!")
      //     $scope.correct = true;
      //     $scope.wrong = false;
      //   } else {
      //     console.log("Wrong!")
      //     $scope.correct = false;
      //     $scope.wrong = true;
      //   }


  }])

})();