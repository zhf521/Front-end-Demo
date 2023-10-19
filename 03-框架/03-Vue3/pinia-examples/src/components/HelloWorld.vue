<template>
  <p> {{ mainStore.count }}</p>
</template>
<script setup>
import { useMainStore } from '../store/index.ts'

const mainStore = useMainStore()

</script>
<style></style>