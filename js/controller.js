;(function (angular) {
    angular.module('app')
    //电影控制器
        .controller('movieController', ['$scope', '$myHttp', '$routeParams', 'apikey', 'url', '$timeout',function ($scope, $myHttp, $routeParams, apikey, url) {
            //路由参数,对应标签的值
            var name = $routeParams.name;
            // api密钥
            var apikey = apikey;
            // 跨域的地址
            var url = url + name;
            //跨域参数
            //索引
             $scope.index = 1;

            $scope.count = 5;

            $scope.totalCount='';

            var movieParams = {
                'apikey': apikey,
                'count': 5,
                'start': 0,
                'city': '中山'
            };

            $scope.flag = true ;

            $myHttp.jsonp(url, movieParams, function (data) {
                $scope.flag = false ;
                //接收数据
                $scope.data = data;

                $scope.totalCount=Math.floor(data.total/data.count);

                //触发脏值检测
                $scope.$apply();
            });

            $scope.search=function (text) {
                  $scope.info = text ;
              };
            $scope.all=function () {
                $scope.info = '' ;
            };

            $scope.prev=function () {
                $scope.flag = true ;
                $scope.index --;
                var start=( $scope.index - 1) *  $scope.count;
                var movieParams = {
                    'apikey': apikey,
                    'count':  $scope.count,
                    'start': start,
                    'city': '中山'
                };
                $myHttp.jsonp(url, movieParams, function (data) {
                    $scope.flag = false ;
                    //接收数据
                    $scope.data = data;
                    //触发脏值检测
                    $scope.$apply();
                });
            };
            $scope.next=function () {
                $scope.flag = true ;
                $scope.index ++;
                var start=( $scope.index - 1) *  $scope.count;
                var movieParams = {
                    'apikey': apikey,
                    'count':  $scope.count,
                    'start': start,
                    'city': '中山'
                };
                $myHttp.jsonp(url, movieParams, function (data) {
                    $scope.flag = false ;
                    //接收数据
                    $scope.data = data;
                    //触发脏值检测
                    $scope.$apply();
                });
            };

            //详情控制器
        }]).controller('detailsController', ['$scope', '$myHttp', '$routeParams', 'apikey', 'url', function ($scope, $myHttp, $routeParams, apikey, url) {
        $scope.flag = true ;
        //发送请求,重新获取数据
        var url = url + $routeParams.id;
        var detailsParams = {'apikey': apikey};
        $myHttp.jsonp(url, detailsParams, function (data) {
            $scope.flag = false ;
            //接收数据
            $scope.data = data;
            //触发脏值检测
            $scope.$apply();
        });
    }])
})(angular,document);