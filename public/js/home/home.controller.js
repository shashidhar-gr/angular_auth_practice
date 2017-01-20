angular.module('home.module')
	.controller('homeController', ['$scope', 'UserService', 'Storage', function($scope, UserService, Storage) {
		$scope.user = {
			username: ""
		};	

		
		UserService.profile({})
			.then(function(response) {
				console.log("got success response from profile api.");
				$scope.user = Storage.getUsername();

			}, function(err) {
				console.log("got error response from login api.");
		});
		

}]);