angular.module('app.factories', [])
	.factory('AuthTokenFactory', function AuthTokenFactory($window) {

		var store = $window.localStorage;
		var key = "auth_token";

		return {	
			saveToken : saveToken,
			getToken: getToken
		}

		function saveToken(token) {
			if(token) {
				store.setItem(key, token);
			}
			else {
				store.removeItem(key);
			}
		}

		function getToken() {
			return store.getItem(key);
		}

	})
	.factory('AuthInterceptorFactory', function AuthInterceptorFactory(AuthTokenFactory) {

		return {	
			addToken : addToken
		}

		function addToken(config) {
			var token = AuthTokenFactory.getToken();
			if(token) {
				config.headers = config.headers || {};
				config.headers.Authorization = 'Bearer ' +token;
			}
			return config;
		}

	})