import { ref, defineComponent, h } from 'vue-demi';

const AwesomeInput = defineComponent({
  name: 'AwesomeInput',
  setup(_props, ctx) {
    const awiwi = ref('Awesome');
    return () =>
      h(
        'div',
        {
          class: 'awesome-input',
        },
        h('input', {
          name: 'awesome-input',
          modelValue: awiwi.value,
          'onUpdate:modelValue': value => ctx.emit('update:modelValue', value),
        }),
      );
  },
});

export default AwesomeInput;
