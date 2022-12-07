/*
 * 酱茄小程序开源版
 * 作者: 追格
 * 文档：https://www.zhuige.com/docs/zxfree.html
 * github: https://github.com/zhuige-com/jiangqie_kafei
 * gitee: https://gitee.com/zhuige_com/jiangqie_kafei
 * Copyright © 2020-2022 www.zhuige.com All rights reserved.
 */

//module.exports = {
//	//你的域名
//	JQ_DOMAIN: 'xcx.jiangqie.com',
//};
module.exports = { //导出对象
    JQ_DOMAIN: 'xcx.jiangqie.com',//xcx.jiangqie.com

    devServer: {
        open: true,//是否自动打开浏览器
        //host: '192.168.181.246:80',
        //port: '81',
        https: false,
        hotOnly: false,//模块是否热更新,具体语义不详
        //跨域
        //proxy: {
        //    //配置跨域
        //    '/1': {
        //        target: "http://192.168.181.246:80",//后台接口baseUrl
        //        ws: true,//是否跨域
        //        changeOrigin: true,//配置跨域
        //        pathRewrite: {
        //            '^/1': ''
        //        },
		//	}
        //},
		header: {
			'Accept':'application/json',
			'Content-Type': 'application/json; charset=utf-8'	
		}
    }
}

