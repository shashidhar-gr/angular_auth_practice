angular.module('login.module')
	.controller('loginController', ['$scope', 'UserService', 'Storage', 'AuthTokenFactory', '$state', function($scope, UserService, Storage, AuthTokenFactory, $state) {
		$scope.user = {

		}

		$scope.login = function(user) {
			UserService.login(user)
				.then(function(response) {
					console.log("got success response from login api.");
					AuthTokenFactory.saveToken(response.data.message.token);
					Storage.save('isLoggedIn', true);
					Storage.setUsername(response.data.message.user.username);
					$state.go('home');
				}, function(err) {
					console.log("got error response from login api.");
				});
		}
}])