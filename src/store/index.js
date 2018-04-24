import Vue from 'vue';
import Vuex from 'vuex';

import state from './store';
import * as getters from './getters';
import * as mutations from './mutation';
Vue.use(Vuex);

export default new Vuex.Store({
	state,
	getters,
	mutation
});