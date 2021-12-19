<template>
  <!-- tw-h-60 -->
  <div class="tw-px-18 tw-py-8 tw-group hover:tw-text-gray-1 hover:tw-bg-orange-1">
    <div class="tw-flex tw-items-center tw-gap-x-10">
      <div class="tw-flex-1">
        <VIcon :icon="icon" class="tw-text-blue-1 group-hover:tw-text-orange-1" />
      </div>
      <div class="w-268px tw-flex-grow-1 tw-flex-shrink-0">
        <div class="tw-text-2.7xl tw-font-semibold">{{ title }}</div>
      </div>
      <div
        class="tw-flex-grow-0 tw-text-gray-2 tw-font-medium group-hover:tw-text-gray-1"
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

<style lang="scss" scoped>
.w-268px {
  flex-basis: 268px;
}
</style>
