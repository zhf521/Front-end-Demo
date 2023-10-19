<template>
  <div>
    <Count></Count>
    <User></User>
  </div>
</template>

<script>
import Count from './components/Count';
import User from './components/User.vue';
export default {
  name: 'App',
  components: { Count,User },
};
</script>