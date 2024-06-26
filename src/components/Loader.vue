<template>
  <div class="loader" :style="{ display: store.loader ? 'flex' : 'none' }">
    <span class="loading"></span>
    <span class="loading"></span>
    <span class="loading"></span>
  </div>
</template>

<script setup>
import { useStore } from "@/store/store";
const store = useStore()
</script>

<style lang="scss" scoped>
</style>