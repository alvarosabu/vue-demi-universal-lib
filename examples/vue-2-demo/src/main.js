import Vue from 'vue';
import App from './App.vue';

import { createAwesomePlugin } from 'vue-universal-lib';

const AwesomePlugin = createAwesomePlugin({
  option1: true,
});

Vue.config.productionTip = false;
Vue.use(AwesomePlugin);

new Vue({
  render: h => h(App),
}).$mount('#app');
