import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
    //url에 #표시 없에준다. 
    mode : 'history',
    routes:[
        {
            path : '/',
            redirect : '/news',
        },
        {
            //url에 대한 정보가 담긴다.  (url주소)
            path : '/news',
            //url주소로 갔을때 표시될 컴포넌트
            component : NewsView,
        },
        {
            path : '/ask',
            component : AskView,
        },
        {
            path : '/jobs',
            component : JobsView,
        },
        {
            path : '/user',
            component : UserView
        },
        {
            path : '/item',
            component : ItemView
        },
    ]
});

