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

//12. Navegação entre páginas
.config(function($stateProvider, $urlRouterProvider){

    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/layout.html'
    })
    .state('app.home', {
        url: '/home',
        views: {
            "layoutContent": {
                templateUrl: 'templates/home.html'
            }
        }

    })
    .state('app.sobre', {
        url: '/sobre',
        views: {
            "layoutContent": {
                templateUrl: 'templates/sobre.html'
            }
        }

    });

    $urlRouterProvider.otherwise('/app/home');
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
})
.controller('appController', function($scope){
    $scope.noticias = [
         {
            titulo: 'Noticia 1',
            descricao: 'Descricao 1',
            imgUser: 'avatar1.png',
            imgNot: 'ionic.png',
            nome: 'Pedro'
        },
         {
            titulo: 'Noticia 2',
            descricao: 'Descricao 3',
            imgUser: 'avatar1.png',
            imgNot: 'ionic.png',
            nome: 'Rafaela'
        },
         {
            titulo: 'Noticia 3',
            descricao: 'Descricao 3',
            imgUser: 'avatar1.png',
            imgNot: 'ionic.png',
            nome: 'Giovanni'
        }
    ];
})

.controller('formController', function($scope){
//8
    $scope.form = function(){

        console.log('Nome: ' + $scope.nome);
    };
})

.controller('modalController',function($scope, $ionicModal){
  //9

    $scope.contatos = [
        {nome: 'Camila', email: 'camila@mail.com'},
        {nome: 'Rafaela', email: 'rafaela@mail.com'},
        {nome: 'Fernanda', email: 'fernanda@mail.com'}
    ];

    //escolhendo o template
    $ionicModal.fromTemplateUrl('templates/modal.html',{
        //passando os parâmetros:
        scope: $scope
    }).then(function(modal){
        $scope.modal = modal;
    });

    $scope.addContato = function(contato){

        $scope.contatos.push(
        {
            nome: contato.nome,
            email: contato.email
        });

        contato.nome ="";
        contato.email = "";

        //sumir com o modal
        $scope.modal.hide();
    };
});




















