var app = angular.module('myapp', ['ui.router', 'app.constants', 'app.services', 'app.factories', 'login.module', 'home.module']);

app.config(function($httpProvider) {
	$httpProvider.interceptors.push('AuthInterceptorFactory');
});

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('index', {
			url: '/',
			templateUrl: '/templates/login.html',
			controller: 'loginController'
		})
		.state('login', {
			url: '/login',
			templateUrl: '/templates/login.html',
			controller: 'loginController'
		})
		.state('signup', {
			url: '/signup',
			templateUrl: '/templates/signup.html'
		})
		.state('home', {
			url: '/home',
			templateUrl: '/templates/home.html',
			controller: 'homeController'
		})
});

