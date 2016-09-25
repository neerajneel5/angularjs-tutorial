var app = angular.module('tutorial-app',['ngRoute'])

app.config(['$routeProvider',function($routeProvider) {
	
	$routeProvider
	
	.when('/home',{
		templateUrl:'Home/home.html',
		controller:'homeController'
	})
	.when('/',{
		template:'<h2>Welcome to tutorial-app</h2>'
	})
	
}])