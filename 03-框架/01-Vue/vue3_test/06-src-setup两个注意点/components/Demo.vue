<template>
  <h2>姓名：{{ person.name }}</h2>
</template>

<script>
import { reactive } from "@vue/reactivity";
export default {
  name: "Demo",
  props: ['msg'], // 不写全会报警告
  setup(props, context) {
    let person = reactive({
      name: "zhf",
    });
    console.log('props-----', props);
    console.log()
    console.log('context.attrs-----', context.attrs)
    return { person };
  },
};
</script>