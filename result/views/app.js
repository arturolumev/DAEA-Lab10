var app = angular.module('catsvsdogs', []);
var socket = io.connect();

app.controller('statsCtrl', function ($scope) {
  $scope.distanciaManhattan = 0;

  var updateDistances = function () {
    socket.on('distances', function (json) {
      var data = JSON.parse(json);
      $scope.$apply(function () {
        $scope.distanciaManhattan = data.distancia_manhattan;
      });
    });
  };

  var init = function () {
    document.body.style.opacity = 1;
    updateDistances();
  };
  socket.on('message', function (data) {
    init();
  });
});

