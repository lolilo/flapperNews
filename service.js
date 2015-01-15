angular.module('flapperNews', [])
    .factory('posts', [function(){
        var o = {
            posts: []
        };
        return o;
    }])



.controller('MainCtrl', [
    '$scope',
    'posts',
    function($scope, posts){
        // bind $scope.posts in controller to
        // posts array in service
        $scope.posts = posts.posts;
    }])