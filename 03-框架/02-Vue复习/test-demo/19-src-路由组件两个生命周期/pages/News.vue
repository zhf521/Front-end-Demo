<template>
  <ul>
    <li v-for="(news, index) in newsArr" :key="index">{{ news }} <input type="text"> </li>
  </ul>
</template>

<script>
export default {
  name:'News',
  data() {
    return {
      newsArr: ["news001", "news002", "news003", "news004"],
    }
  },
}
</script>
<style></style>