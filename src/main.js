import Vue from 'vue'
import App from './App'
import store from './store'
import Vuex from 'vuex'
import router from './router'
console.log(Vuex)

console.log(store);
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
}).$mount('#app')


