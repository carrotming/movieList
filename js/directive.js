;(function (angular) {
    //自定义指令
    angular.module('app').directive('ngactive', ['$location', function ($location) {
        return {
            restrict: 'A',
            link: function ($scope, ele, attr) {
                //把location服务绑定到$scope中
                $scope.$location = $location;
                //监听
                $scope.$watch('$location.url()', function (newVal) {
                    //当点击的hash值等于当前的哈希值时候,添加样式,其余删除样式
                    var href = ele.find('a').attr('href').slice(2);
                    if (newVal == href) {
                        ele.addClass(attr.ngactive).siblings('li').removeClass(attr.ngactive);
                    }
                })
            }
        }
    }])
})(angular);