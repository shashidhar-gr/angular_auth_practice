angular.module('app.services')
	.service('Storage', ['$window', function($window) {
		var store = $window.localStorage;	

		return {
			save: save,
			get: get,
			setUsername: setUsername,
			getUsername: getUsername
		}

		function setUsername(username) {
			store.setItem('username', username);
		}

		function getUsername() {
			return store.getItem('username');
		}

		function save(key, value) {
				store.setItem(key, value);		
		}

		function get(key, value) {
				return store.getItem(key);		
		}
	}])