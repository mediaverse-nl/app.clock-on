//start
import Vue from 'vue'
import App from './App.vue'
import Router from './routes.js'

//bootstraps
import BootstrapVue from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

//uses
Vue.use(BootstrapVue)

//components
import FullCalendar from 'vue-fullcalendar'
Vue.component('full-calendar', FullCalendar)

//render application
new Vue({
    el: '#app',
    render: h => h(App),
    router: Router
});
