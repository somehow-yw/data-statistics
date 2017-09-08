import Vue from 'vue';
import Router from 'vue-router';

import consultStatistics from './../views/consultStatistics/consultStatistics.vue';
import goodsStatistics from './../views/goodsStatistics/goodsStatistics.vue';
// import shopRank from './../views/shoprank/shoprank.vue';
import shopStatistics from './../views/shopStatistics/shopStatistics.vue';
import sellStatistics from './../views/sellStatistics/sellStatistics.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/', component: consultStatistics},
        {path: '/goodsStatistics', component: goodsStatistics},
        // {path: '/shopRank', component: shopRank},
        {path: '/shopStatistics', component: shopStatistics},
        {path: '/sellStatistics', component: sellStatistics}
    ]
});