import { createApp } from 'vue';
import App from './App.vue';

import { createAwesomePlugin } from 'vue-universal-lib';

const AwesomePlugin = createAwesomePlugin({
  option1: true,
});

createApp(App).use(AwesomePlugin).mount('#app');
