import { ref, defineComponent, h } from 'vue-demi';

export const Awesome = defineComponent({
  name: 'Awesome',
  setup() {
    const awiwi = ref('Awesome');
    return () =>
      h(
        'div',
        {
          class: 'awesome',
        },
        awiwi.value,
      );
  },
});
