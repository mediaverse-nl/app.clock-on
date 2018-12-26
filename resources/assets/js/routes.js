import Http from './http.js'

import Vue from 'vue'
import VueRouter from 'vue-router'

//components
import Dashboard from './views/Dashboard.vue'
import Schedule from './views/Schedule.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/schedule',
            name: 'schedule',
            component: Schedule,
        },
    ],
});

export default router