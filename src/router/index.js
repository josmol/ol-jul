import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Rim from '@/components/Rim';
import Glogg from '@/components/Glogg';
import ChartAll from '@/components/Charts/All';
import ChartSingle from '@/components/Charts/Single';

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
          component: ChartAll
        },
        {
          path: ':nr',
          name: 'glogg-single',
          component: ChartSingle,
          props: true
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
