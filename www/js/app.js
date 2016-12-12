angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {

      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);


      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('btnController', function($scope){

    $scope.alterarNomeBtn = function(nome){

        $scope.nomeBtn1 = nome;
    };

     $scope.alterarNomeBtn2 = function(nome){

        $scope.nomeBtn2 = nome;
    };

    $scope.desabilitar = false;
});
