// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('App', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})
  .factory('Posts', function() {
    return [
      { title: 'AAA', text: 'QQQQ', date: '2011-11-11', selected: true},
      { title: 'BBB', text: 'sdflfgh', date: '2011-11-11', selected: true},
      { title: 'CCC', text: 'fhcv', date: '2011-11-11', selected: true},
      { title: 'DDDDD', text: 'dfbcv', date: '2011-11-11', selected: true},
      { title: 'EEEE', text: 'qwe', date: '2011-11-11', selected: true},
      { title: 'FFFF', text: 'wery34y34y', date: '2011-11-11', selected: true},
      { title: 'QWE', text: 'y45ydfy', date: '2011-11-11', selected: true},
      { title: 'ABSFHWEAA', text: 'uirfh', date: '2011-11-11', selected: true},
      { title: 'WHXC', text: '34thfgh', date: '2011-11-11', selected: true},
      { title: 'RWU', text: 'ghmghj', date: '2011-11-11', selected: true},
      { title: 'WHNR', text: 'earerb23', date: '2011-11-11', selected: true},
      { title: 'QHJKWER', text: 'wdbrt2356', date: '2011-11-11', selected: true},
      { title: 'AIERHERH', text: 'tbyrery ery', date: '2011-11-11', selected: true},

    ]
  })
.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  .state('boardlist', {
    url: '/boardlist',
    templateUrl: 'board/boardlist.html',
    controller: 'BoardController'

  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/boardlist');

});
