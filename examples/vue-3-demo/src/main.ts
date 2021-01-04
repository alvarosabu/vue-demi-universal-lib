import { createApp } from 'vue';
import App from './App.vue';

// with rollup-plugin-vue
import { createAwesomePlugin } from 'vue-demi-universal-lib';

// without it
// import { createAwesomePlugin } from 'vdul-next';

const AwesomePlugin = createAwesomePlugin({
  option1: true,
});

createApp(App).use(AwesomePlugin).mount('#app');
