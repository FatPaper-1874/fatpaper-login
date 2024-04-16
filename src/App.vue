<script setup lang="ts">
import Background from '@/components/background/background.vue';
import {defineAsyncComponent} from "vue";
const Login = defineAsyncComponent(()=>import('@/view/login/login.vue'))

</script>

<template>
  <Login />
  <Background />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
