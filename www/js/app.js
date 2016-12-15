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
})
.controller('MeuController', function($scope){

    $scope.itens = [1,2,3,4];
    $scope.moveItem = function(item, fromIndex, toIndex){
        $scope.itens.splice(fromIndex,1);
        $scope.itens.splice(toIndex,0,item);
    };
});
