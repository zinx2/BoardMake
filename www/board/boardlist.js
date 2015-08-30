/**
 * Created by JHwan on 2015-08-30.
 */
angular.module('App')
.controller('BoardController', function($scope, Posts) {

    $scope.load = function() {
      $scope.posts = Posts;
      $scope.$broadcast('scroll.refreshComplete');
    };

    $scope.load();
});
