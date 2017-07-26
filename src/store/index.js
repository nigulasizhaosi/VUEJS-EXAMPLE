import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
/*
const state = {
	userInf : '', //用户信息
	login : null, //是否登录
}
*/
export default new Vuex.Store({
	state : {
		count : 0
	}
})