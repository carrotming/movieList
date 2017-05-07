;(function (angular, document) {
    //自定义服务
    angular.module('app').service('$myHttp', ['$window', function ($window) {

        /**
         * 定义jsonp方法用来跨域请求数据
         * @param url       传入跨域的地址
         * @param params    传入需要的参数
         * @param callBack  回调操作
         */
        this.jsonp = function (url, params, callBack) {
            //随机一个函数名,用来给服务器接收进行回调拿到数据  
            var callBackName = 'carrotming' + Math.random().toString().slice(2);
            //定义一个全局函数,调用回调函数
            $window[callBackName] = function (data) {
                callBack && callBack(data);
            };
            //对传入的参数进行处理 拼接到url后面
            //格式 url?key=value&...
            var newParams = '';
            for (var key in params) {
                newParams += key + '=' + encodeURI(params[key]) + '&';
            }
            url += '?' + newParams + 'callback=' + callBackName;
            //动态创建script标签
            var oScript = document.createElement('script');
            //添加src
            oScript.src = url;
            //插入到body标签里面
            document.body.appendChild(oScript);
        };
        //配置apikey服务
    }]).value('apikey', '0b2bdeda43b5688921839c8ecb20399b')
        //配置url
        .value('url', 'https://api.douban.com/v2/movie/');
})(angular, document);