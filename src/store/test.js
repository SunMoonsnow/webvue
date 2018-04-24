import Vuex from 'vuex';
Vue.use(Vuex);
var store = new Vuex.Store({
	state:{
		title:'播放中'
	},
	mutations:{
		changePlayState(state,val){
			state.title = val;
		}
	},
	getters:{
		changePlayState(state){
			return.state.title;
		}
	}
});
export default store;