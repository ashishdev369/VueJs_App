import Vue from 'vue'
import Calculation from './Calculation.vue'

Vue.filter('toUSD', function (value) {
  return `$${value}`;
});

new Vue({
  el: '#vue-app',
  render:h => h(Calculation)
});
