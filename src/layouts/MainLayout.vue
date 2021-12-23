<template>
  <div v-if="!isInit" class="tw-w-full tw-h-screen tw-flex">
    <!-- loading -->
    loading
  </div>
  <div v-if="isInit" class="tw-flex tw-flex-col dark:tw-bg-gray-800">
    <div class="main-header tw-flex-1">
      <div class="main-header"></div>
      <div class="tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-z-50">
        <MainHeader class="main-header max-layout-width tw-mx-auto" />
      </div>
    </div>
    <div class="app-main tw-flex-1">
      <div class="max-layout-width tw-overflow-hidden tw-mx-auto">
        <router-view v-slot="{ Component }">
          <transition name="component-fade">
            <component :is="Component" @ready="$emit('ready')" />
          </transition>
        </router-view>
      </div>
    </div>
    <!-- footer -->
    <div>
      <MainFooter class="main-footer max-layout-width tw-overflow-hidden tw-mx-auto" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, defineAsyncComponent } from 'vue';

import MainHeader from './components/MainHeader.vue'
import MainFooter from './components/MainFooter.vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
    MainHeader,
    MainFooter
  },
  emits: ['ready'],
  setup() {
    const isInit = ref(false);

    onMounted(() => {
      isInit.value = true;
    });
    return { isInit };
  },
});
</script>

<style lang="scss" scoped>
.max-layout-width {
  max-width: 1440px;
}

$header-lg: 80px;
$header-sm: 72px;

$footer-lg: 480px;
$footer-sm: 461px;

.main-header {
  min-height: $header-sm;
  @media (max-width: 770px) {
    min-height: $header-lg;
  }
}
.main-footer {
  min-height: $footer-lg;
  @media (max-width: 770px) {
    min-height: $footer-sm;
  }
}

// .app-main {
// overflow: auto;
// min-height: calc(100vh - $header-lg - $footer-lg);
// // margin-top: calc($heightLg);
// @media (max-width: 770px) {
//   height: calc(100vh - $header-sm - $footer-sm);
//   // margin-top: calc($heightSm);
// }
// }
</style>
