import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Rim from '@/components/Rim';
import Glogg from '@/components/Glogg';
import Chart1 from '@/components/Charts/Chart1';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/glogg',
      component: Glogg,
      children: [
        {
          path: '',
          name: 'glogg',
          component: Chart1
        }
      ]
    },
    {
      path: '/rim',
      name: 'rim',
      component: Rim
    }
  ]
});
