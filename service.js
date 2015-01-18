angular.module('flapperNews.services', [])
    .factory('posts', [function(){
        var o = {
            posts: []
        };
        return o;
    }]);
