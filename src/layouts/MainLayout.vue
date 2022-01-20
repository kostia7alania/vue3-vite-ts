<template>
  <div :key="$i18n.locale" class="tw-flex tw-flex-col dark:tw-bg-gray-800">
    <div class="main-header tw-flex-1">
      <div class="tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-z-50 border-bottom-gray-1 tw-bg-gray-1">
        <div class="max-layout-width-overflow-auto tw-mx-auto">
          <MainHeader class="main-header" />
        </div>
      </div>
    </div>
    <div class="app-main tw-flex-1">
      <router-view v-slot="{ Component }">
        <transition name="component-fade">
          <component :is="Component" @ready="$emit('ready')" />
        </transition>
      </router-view>
    </div>
    <!-- footer -->
    <div>
      <MainFooter class="main-footer" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';

import MainHeader from './components/MainHeader.vue'


export default defineComponent({
  name: 'MainLayout',
  components: {
    MainHeader,
    MainFooter: defineAsyncComponent(() => import('./components/MainFooter.vue'))
  },
  emits: ['ready'],
});
</script>

<style lang="scss" scoped>
$header-lg: 80px;
$header-sm: 72px;

$footer-lg: 480px;
$footer-sm: 461px;

.border-bottom-gray-1 {
  border-bottom: 1.5px solid #e8e7ea;
}
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
