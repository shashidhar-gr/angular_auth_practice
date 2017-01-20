angular.module('app.services')
	.service('UserService', ['$http', 'CONSTANT', function($http, CONSTANT) {
			
		return {
			login: login,
			profile: profile
		}	

		function login(user) {
			return $http.post(CONSTANT.API_URL+ '/login', user);
		}

		function profile(user) {
			return $http.get(CONSTANT.API_URL+ '/profile');
		}
}])