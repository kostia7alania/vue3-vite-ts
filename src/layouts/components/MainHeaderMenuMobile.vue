<template>
  <div class="tw-text-center tw-flex tw-justify-center tw-relative">
    <button
      :class="classComputed"
      class="anim-batch-once button__join-us tw-px-6"
      @click="setIsActiveContacts(!isActiveModal)"
    >
      <!-- hamburger -->
      <svg
        v-show="!isActiveModal"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="tw-fill-current"
          d="M4 6H20M4 12H20M4 18H20"
          stroke="#21242C"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <!-- close -->
      <svg
        v-show="isActiveModal"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 10.5862L16.95 5.63623L18.364 7.05023L13.414 12.0002L18.364 16.9502L16.95 18.3642L12 13.4142L7.04999 18.3642L5.63599 16.9502L10.586 12.0002L5.63599 7.05023L7.04999 5.63623L12 10.5862Z"
          fill="#21242C"
        />
      </svg>
    </button>
    <HeaderModal v-if="isActiveModal" @close="isActiveModal = false">
      <ul
      class="navbar-items tw-flex tw-flex-col tw-text-left tw-px-9 tw-font-medium tw-text-3xl">
        <li
          v-for="{ title, routeName } of linksMap"
          :key="title"
          class="link-item tw-mt-12"
          :class="{
            'tw-underline tw-font-semibold': routeName === $route.name
          }"
        >
          <router-link :to="{ name: routeName }" @click.prevent="isActiveModal = false">{{ title }}</router-link>
        </li>

        <li
          class="link-item tw-mt-12"
          :class="{
            'tw-underline tw-font-semibold': 'financing' === $route.name
          }"
        >
          <router-link :to="{ name: 'financing' }" @click.prevent="isActiveModal = false">{{ $t('button.financing') }}</router-link>
        </li>
      </ul>
    </HeaderModal>
  </div>
</template>

<script lang="ts">
import { computed, defineAsyncComponent, defineComponent, PropType, ref } from 'vue';

interface ILinksMap {
  title: string,
  routeName: string
}

export default defineComponent({
  name: 'MainHeaderMenuMobile',
  components: {
    HeaderModal: defineAsyncComponent(() => import('./HeaderModal.vue'))
  },
  props: {
    linksMap: {
      type: Array as PropType<Array<ILinksMap>>,
      default: () => [],
    },
  },
  setup(/* _, { emit } */) {
    const isActiveModal = ref(false);

    const setIsActiveContacts = (val: boolean) => {
      isActiveModal.value = val;
    };

    const classComputed = computed(() => {
      if (isActiveModal.value)
        return 'tw-text-black tw-rounded-full tw-flex tw-justify-center tw-items-center tw-z-50';
      return ' tw-text-black tw-font-bold  box-shadow-1';
    });

    return {
      isActiveModal,
      setIsActiveContacts,
      classComputed,
    };
  },
});
</script>

<style lang="scss" scoped>
.button__join-us {
  transition: 1s;
  &:hover {
    color: #000019;
    svg path {
      stroke: blue;
    }
  }
  &:active {
    transition: 0.2s;
    transform: scale(0.9);
    color: blue;
  }
}
</style>
