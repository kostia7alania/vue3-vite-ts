<template>
  <header
    class="app-header tw-flex tw-bg-gray-1 tw-items-center tw-justify-between dark:tw-bg-black dark:tw-text-gray-300"
  >
    <!-- left -->
    <div class="tw-ml-3 sm:tw-ml-4 md:tw-ml-6 lg:tw-ml-20 xlg:tw-ml-20 tw-order-1">
      <Logo :white="false" />
    </div>
    <!-- center -->
    <div class="tw-order-3 md:tw-order-2">
      <MainHeaderMenu />
    </div>
    <!-- right -->
    <div
      class="tw-mr-6 md:tw-mr-10 lg:tw-mr-14 tw-ml-auto md:tw-ml-0 tw-order-2 md:tw-order-3 tw-gap-5 lg:tw-gap-8 tw-flex tw-items-center tw-text-sm"
    >
      <VButton variant="orange-1" height="40px" width="102px" class="financing-btn" :text="$t('button.financing')" />
      <DarkToggle class="anim-batch-once" />
      <LocaleSelect />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';

export default defineComponent({
  name: 'MainHeader',
  components: {
    MainHeaderMenu: defineAsyncComponent(() => import('./MainHeaderMenu.vue')),
    VButton: defineAsyncComponent(() => import('@/components/ui/VButton.vue')),
    DarkToggle: defineAsyncComponent(() => import('./DarkToggle.vue')),
    LocaleSelect: defineAsyncComponent(() => import('./LocaleSelect.vue')),
    Logo: defineAsyncComponent(() => import('./Logo.vue'))
  },
  // setup(/* _, ctx: SetupContext */) {

  // },
});
</script>

<style lang="scss" scoped>
.app-header {
  border: 1.5px solid #e8e7ea;
  z-index: 1111;
  @media (max-width: 770px) {
    .logo {
      width: 32px;
    }
  }
}

:deep {
  .tw-modal-container {
    @media (max-width: 500px) {
      // on small screens - full width
      width: calc(100vw - 20px) !important;
    }
  }
}

.logo {
  transform: rotate(0deg);
  transition: transform 0.8s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: rotate(360deg);
  }
  &:active {
    transform: rotate(-360deg);
  }
}

.financing-btn {
  &::deep button {
    @apply tw-border-gray-3;
  }
}
</style>
