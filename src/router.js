import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './components/Login';
import SignUp from './components/SignUp';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',

    routes: [{
            path: "/",
            name: "Login",
            alias: "/Login",
            component: Login,
        },
        {
            path: '/SignUp',
            name: 'SignUp',
            component: SignUp,
        },
    ],

    
});
