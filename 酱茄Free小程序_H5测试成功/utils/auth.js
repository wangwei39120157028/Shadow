/*
 * 酱茄小程序开源版
 * 作者: 追格
 * 文档：https://www.zhuige.com/docs/zxfree.html
 * github: https://github.com/zhuige-com/jiangqie_kafei
 * gitee: https://gitee.com/zhuige_com/jiangqie_kafei
 * Copyright © 2020-2022 www.zhuige.com All rights reserved.
 */

const Constant = require("./constants.js");

//获取TOKEN
function getToken() {
	let user = uni.getStorageSync(Constant.JQ_USER_KEY);

	if (!user) {
		return false;
	}

	return user.token;
}

//注销
function logout() {
	uni.setStorageSync(Constant.JQ_USER_KEY, false);
}

module.exports = {
	//检查登录态
	checkSession() {
		uni.checkSession({
			fail: () => {
				logout();
			}
		});
	},

	logout: logout,

	//获取TOKEN
	getToken: getToken,

	//是否已登录
	isLogin: getToken,

	//获取用户信息
	getWXUser() {
		return new Promise(function(resolve, reject) {
			uni.login({
				success: (res) => {
					resolve(res);
				},
				fail: (err) => {
					reject(err);
				}
			});
		});
	},

	setUser(user) {
		uni.setStorageSync(Constant.JQ_USER_KEY, user);
	},

	getUser() {
		return uni.getStorageSync(Constant.JQ_USER_KEY);
	}
};
