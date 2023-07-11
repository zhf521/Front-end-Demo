<template></template>
<script setup lang="ts">
import { useMainStore } from '../store/'

const mainStore = useMainStore()
console.log(mainStore.count)


</script>

<style scoped></style>
