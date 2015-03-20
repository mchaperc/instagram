'use strict';

/**
 * @ngdoc overview
 * @name instagramApp
 * @description
 * # instagramApp
 *
 * Main module of the application.
 */
angular
  .module('instagramApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'instagram/views/InstagramSearch.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'src/instagram/views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
