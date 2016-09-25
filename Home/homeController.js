(function(){

	var injectParams = ['$scope']
	var homeController = function($scope){
		alert('Home homeController')
	}
	homeController.$inject = injectParams
	angular.module('tutorial-app').controller('homeController',homeController)

}())