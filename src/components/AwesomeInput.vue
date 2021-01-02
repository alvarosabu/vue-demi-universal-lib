<template>
  <div class="awesome-input">
    <input type="text" v-model="awiwi" />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue-demi";

export default defineComponent({
  name: "AwesomeInput",
  setup() {
    const awiwi = ref("Awesome");
    return { awiwi };
  }
});
</script>
