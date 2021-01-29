//util 公共对象函数
import Vue from 'vue';
import axios from 'axios'
import store from "../../store"
import { message } from 'ant-design-vue';
import BigNumber from "bignumber.js";
Vue.prototype.$message = message;

message.config({maxCount:1});

class util{
	
	//初始化对象
	constructor(){
		this.win=window.top;
		this.UA=navigator.userAgent;
		this.isPC=this.UA.indexOf('Windows NT')>-1;
		this.isAndroid=this.UA.indexOf('Android')>-1;
		this.isIos=this.UA.indexOf('Mac OS X')>-1;
		this.isIphone=this.UA.indexOf('iPhone')>-1;
		this.isIpad=this.UA.indexOf('iPad;')>-1;
		this.isIE7=this.UA.indexOf('MSIE 7.0;')>-1;
		this.isIE8=this.UA.indexOf('MSIE 8.0;')>-1;
		this.isIE9=this.UA.indexOf('MSIE 9.0;')>-1;
		this.isIE10=this.UA.indexOf('MSIE 10.0;')>-1;
		this.isIE11=this.UA.indexOf('Trident')>-1;
		this.IsWeiXin=this.UA.indexOf('MicroMessenger')>-1;
	};

	/*
	* method: get | post
	* url
	* data
	* nohideloading
	* complete
	* success
	* error
	* headers
	* goingError
	* timeout
	* isGoingLogin
	*/
	ajax(json = {}){
	   //是否code!=0时返回数据
      let isOk = json.isOk;
	   let isLoadding = json.isLoadding;
		let url = null;
		// 增加时间戳参数
		if (json.url.indexOf('?') != -1) {
			url = json.url + '&_=' + new Date().getTime();
		} else {
			url = json.url + '?_=' + new Date().getTime();
		};
		if (json.method) json.method = json.method.toUpperCase();
      if(isLoadding){store.state.loadding = json.isLoadding}
		return new Promise((resolve,reject)=>{
			axios({
				method: json.method || 'POST',
				params: json.method == 'GET' ? json.data : '',
				data: json.method != 'GET' ? json.data : '',
				url: `${baseApi}${url}`,
				timeout: json.timeout || 15000,
				headers: Object.assign({

				}, json.headers),
			}).then((response)=>{
            if(isLoadding){store.state.loadding = false}
				if (response.data.code == "0") {
               this.success(response, json, resolve);
				} else {
				   if(isOk){
                  this.error(response, json, reject);
                  message.error(response.data.msg)
               }else {
                  message.error(response.data.msg)
               }
				}
			}).catch((error)=>{
            if(isLoadding){store.state.loadding = false}
				this.error(error, json, reject);
			})
		})
	}

	// 重构优化
	success(response, json, resolve) {
        //判断code 并处理
		const data = response.status;
		resolve(response.data);
	}

	error(error, json, reject){
		if (json.isOk){
         reject(error);
			return;
		}
		switch (error.response.status) {
			case 401:
                message.error('你需要登录哦')
				break;
			case 400:
                message.error('您的请求不合法呢')
				break;
			case 404:
                message.error('访问的地址可能不存在哦')
				break;
			case 500:
                message.error('服务器内部错误')
				break;
			default:
			   reject({})
            message.error('网络错误，请稍后再试')
		}
	}

	// 后台调用响应异常提醒信息处理
	serviceException(error, json, reject) {
		var msg = { title: '服务调用提醒', message: error.data.header.service_exception, type: 'warning' };
		var serviceStatus = error.data.header.service_status;
		// TODO 异常判定需要重构
		switch (true) {
		  case serviceStatus == 900:
			break;
		  case serviceStatus >= 500 && serviceStatus < 600:
			break;
		  case serviceStatus == 909:
			// window.location.href = '/login';
			store.state.showlogin = true
			break;
		  default:
		}
		Notification(msg);
		reject({});
	}
	//返回
	goBack(){
		window.history.go(-1);
	}
	/*获取 storage 缓存数据
	* type  类型   local：localStorage   session：sessionStorage
	* name  缓存数据name名
	*/
   	getStorage(type,name){
   		var type=type||'local';
   		if(type=='local'){
   			var result = localStorage.getItem(name)? localStorage.getItem(name):"";
   		}else if(type=='session'){
   			var result = sessionStorage.getItem(name)? sessionStorage.getItem(name):"";
   		}
	    return result;
 	}

 	/*设置 storage 缓存数据
 	*type  类型   local：localStorage   session：sessionStorage
 	*name  缓存数据name名
 	*content  缓存的数据内容
 	*/
	setStorage(type,name,content){
		var type=type||'local';
		var data=content;
		if(typeof(data)=='object'){ data=JSON.stringify(content) };
		if(type=='local'){
			localStorage.setItem(name,data);
		}else if(type=='session'){
			sessionStorage.setItem(name,data);
		}
	}
	/*生成随机字符串*/
	randomString(len) {
	　　len = len || 32;
	　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
	　　var maxPos = $chars.length;
	　　var pwd = '';
	　　for (let i = 0; i < len; i++) {
	　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
	　　}
	　　return pwd;
	}
	//当前时间
	time(){
		return new Date().getTime();
	}
   	mathDiv(a,b){
		let x = new BigNumber(a);
		let y = new BigNumber(b);
		if(y==0 || x==NaN || y==NaN)return 0;
		return x.dividedBy(y);
	}
	mathMul(a,b){
		let x = new BigNumber(a);
		let y = new BigNumber(b);
		if(x==NaN || y==NaN)return 0;
		return x.multipliedBy(y);
	}
	mathAdd(a,b){
		let x = new BigNumber(a);
		let y = new BigNumber(b);
		if(x==NaN || y==NaN)return 0;
		return x.plus(y);
	}
	mathMinus(a,b){
		let x = new BigNumber(a);
		let y = new BigNumber(b);
		if(x==NaN || y==NaN)return 0;
		return x.minus(y);
	}
	mathPow(a,b){
		let x = new BigNumber(a);
		let y = new BigNumber(b);
		if(x==NaN || y==NaN)return 0;
		return x.exponentiatedBy(y);
	}
	mathFormatter(val){
		let x = new BigNumber(val);
		if(x==NaN)return 0;
		if(x > 1000000) {
			return x.dividedBy(1000000).toFixed(2)+"M";
		 }else if(x > 1000) {
			return x.dividedBy(1000).toFixed(2)+"K";
		 }else {
			return x.toFixed(2);
		 }
	}
	mathFixed(val,decimals) {
		let x = new BigNumber(val);
		if(x==NaN)return 0;
		return x.toFixed(decimals);
   	}
}

//初始化util对象
export default new util();


