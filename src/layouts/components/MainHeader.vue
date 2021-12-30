<template>
  <header
    class="app-header tw-flex tw-bg-gray-1 tw-items-center tw-justify-between dark:tw-bg-black dark:tw-text-gray-300"
  >
    <!-- left -->
    <div class="tw-ml-2 sm:tw-ml-4 md:tw-ml-6 lg:tw-ml-20 xlg:tw-ml-20 tw-order-2 lg:tw-order-1">
      <Logo :white="false" />
    </div>
    <!-- center -->
    <div class="tw-order-1 lg:tw-order-2">
      <MainHeaderMenu />
    </div>
    <!-- right -->
    <div
      class="tw-mr-5 lg:tw-mr-14 tw-order-2 md:tw-order-3 tw-gap-5 lg:tw-gap-8 tw-flex tw-items-center tw-text-sm tw-z-50"
    >
      <VButton
        class="tw-hidden lg:tw-block"
        :variant="$route.name !== 'financing' ? 'orange-1' : 'orange-2'"
        height="40px"
        width="102px"
        :class="$route.name !== 'financing' ? 'tw-border-[#E8E7EA]' : ''"
        :text="$t('button.financing')"
        @click="$router.push({ name: 'financing' })"
      />
      <DarkToggle v-if="0" class="anim-batch-once" />
      <LocaleSelect />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';

import LocaleSelect from './LocaleSelect.vue'
import Logo from './Logo.vue'
import MainHeaderMenu from './MainHeaderMenu.vue'

import VButton from '@/components/ui/VButton.vue'

export default defineComponent({
  name: 'MainHeader',
  components: {
    Logo,
    MainHeaderMenu,
    LocaleSelect,
    VButton,
    DarkToggle: defineAsyncComponent(() => import('./DarkToggle.vue')),
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
</style>
