;(function (angular) {
    //配置路由
    angular.module('app').config(['$routeProvider', function ($routeProvider) {
        //监听哈希值变化
        $routeProvider.when('/movie/:name', {
            //模板地址
            templateUrl: 'content.html',
            //控制器名字
            controller: 'movieController'
            //点击出现详情
        }).when('/details/:id', {
            //模板地址
            templateUrl: 'movie_detail_tpl.html',
            //控制器名字
            controller: 'detailsController'
        }).otherwise({
            //找不到对应的参数默认显示
            redirectTo: '/movie/in_theaters'
        });
        //设置白名单
    }]).config(['$sceDelegateProvider', function ($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'https://api.douban.com/**'
        ]);
    }]);
})(angular);