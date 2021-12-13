<template>
  <nav class="nav">
    <router-link to="/" class="dm-link">Home</router-link> |
    <router-link to="/about" class="dm-link">About</router-link>
    <router-link to="/login" class="dm-link">Login</router-link>
  </nav>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style>
@import 'normalize.css';

@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
  @apply tw-p-0 tw-m-0;
}

.dm-link {
  @apply tw-text-green-600;
}

.nav {
  @apply tw-text-center;
}

.nav a {
  @apply tw-mx-2;
}

.home {
  @apply: tw-mx-auto tw-w-52 tw-h-52;
  @apply: tw-flex tw-justify-center tw-items-center;
}
</style>
