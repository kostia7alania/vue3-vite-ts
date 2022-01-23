<template>
  <nav class="main-menu tw-hidden lg:tw-block navbar tw-font-medium tw-text-sm tw-text-gray-2">
    <ul class="tw-flex md:tw-gap-2 lg:tw-gap-10 xlg:tw-gap-12">
      <li v-for="{ title, routeName } of linksMap" :key="routeName" class="link-item">
        <router-link
          class="anim-batch-once hover:tw-text-black"
          :to="{ name: routeName }"
        >{{ title }}</router-link>
      </li>
    </ul>
  </nav>
  <!-- mobile menu -->
  <MainHeaderMenuMobile :links-map="linksMap" class="tw-block lg:tw-hidden" />
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useI18n } from 'vue-i18n'

import MainHeaderMenuMobile from './MainHeaderMenuMobile.vue'

export default defineComponent({
  name: 'MainHeaderMenu',
  components: {
    MainHeaderMenuMobile
  },
  setup(/* _, ctx: SetupContext */) {
    // use global scope
    const { t
      // , locale
    } = useI18n({ useScope: 'global' });

    const links = [
      'services',
      'company',
      'team',
      'careers',
      'articles',
      'contact',
    ];

    const linksMap = computed(() =>
      links.map((link) => ({
        title: t(`menu.${link}`),
        routeName: link,
      })),
    );

    return {
      linksMap,
      // t,
      // locale,
    };
  },
});
</script>

<style lang="scss" scoped>
.main-menu {
  max-width: 1110px;
}
.router-link-exact-active {
  @apply tw-text-blue-400 tw-transition-colors;

  &:hover {
    @apply tw-text-blue-500;
  }
}
</style>