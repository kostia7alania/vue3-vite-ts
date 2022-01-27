<template>
  <header
    class="app-header tw-flex tw-items-center tw-justify-center dark:tw-bg-black dark:tw-text-gray-300"
  >
    <div class="max-layout-width">
      <div class="app-header__child px-16px-48px-80px tw-flex tw-items-center tw-justify-between">
        <!-- left -->
        <div class="tw-ml-2 lg:tw-ml-0 tw-order-2 lg:tw-order-1">
          <Logo :white="false" />
        </div>
        <!-- center -->
        <div class="tw-order-1 lg:tw-order-2">
          <MainHeaderMenu />
        </div>
        <!-- right -->
        <div
          class="tw-order-2 md:tw-order-3 tw-gap-5 lg:tw-gap-8 tw-flex tw-items-center tw-text-sm tw-z-50"
        >
          <router-link :to="{ name: 'financing' }">
            <VButton
              class="tw-hidden lg:tw-block"
              :variant="$route.name !== 'financing' ? 'orange-1' : 'orange-2'"
              height="40px"
              width="102px"
              :class="$route.name !== 'financing' ? 'tw-border-[#E8E7EA]' : ''"
              :text="$t('button.financing')"
            />
          </router-link>
          <DarkToggle v-if="0" class="anim-batch-once" />
          <LocaleSelect />
        </div>
      </div>
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
.app-header .app-header__child {
  @apply tw-px-0 md:tw-px-4 lg:tw-px-2 xl:tw-px-18 2xl:tw-px-20;
  @media (max-width: 1770px) {
    // padding: 0px !important;
  }
}
.app-header {
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
