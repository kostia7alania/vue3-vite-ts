<template>
  <!-- tw-h-60 -->
  <div class="px-0-32px-70px lg:tw-py-8 tw-group lg:hover:tw-text-gray-1 lg:hover:tw-bg-orange-1">
    <div class="tw-flex tw-items-start lg:tw-items-center tw-gap-x-10 tw-flex-col lg:tw-flex-row">
      <div v-if="icon" class="tw-flex-1">
        <VIcon :icon="icon" class="h-80px-92px-92px tw-text-blue-1 lg:group-hover:tw-text-orange-1" />
      </div>
      <div class="mt-16px-24px-0 lg:tw-basis-[268px] tw-flex-grow-1 tw-flex-shrink-0">
        <div class="tw-text-2.7xl tw-font-semibold">{{ title }}</div>
      </div>
      <div
        class="mt-8px-12px-0 tw-flex-grow-0 tw-text-gray-2 tw-font-medium lg:group-hover:tw-text-gray-1"
      >{{ description }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';

export default defineComponent({
  name: "CardInfoDynamicHorizontal",
  components: {
    VIcon: defineAsyncComponent(() => import('@/components/ui/VIcon.vue'))
  },
  props: {
    title: { type: [Number, String], default: '', },
    description: { type: [Number, String], default: "", },
    icon: { type: String, default: "", },
  },
});
</script>

