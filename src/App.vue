<template>
  <router-view v-slot="{ Component }">
    <transition name="component-fade">
      <component :is="Component" @ready="readyHandler" />
    </transition>
  </router-view>
  <!-- <VModal v-if="state.items.length" /> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// import useModal from './api/useModal'

// import VModal from '@/components/ui/VModal.vue'

export default defineComponent({
  name: 'App',
  // components: { VModal, },
  setup() {
    // const { openModal, state } = useModal()
    // const hasModal = state.items.length
    const removeSpinner = () => {
      const loading = document.querySelector('.starter-loading');
      if (loading) {
        loading.classList.add('starter-loading__hide');
        setTimeout(function () {
          loading.remove();
          document.documentElement.style.overflow = '';
        }, 500);
      }
    }


    const readyHandler = () => { setTimeout(removeSpinner, 300); }

    return {
      // state,
      // openModal
      readyHandler
    }
  },
});
</script>

<style>
/* #app {
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
} */
</style>
