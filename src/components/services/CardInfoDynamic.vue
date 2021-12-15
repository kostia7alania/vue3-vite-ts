<template>
  <!-- tw-h-60 -->
  <div class="gray-shadow-1 tw-bg-white tw-rounded-3xl tw-p-8">
    <VIcon :icon="icon" />
    <div class="card-info__content tw-pt-8">
      <div class="tw-text-3xl tw-font-semibold">
        <!-- number -->
        {{ title }}
      </div>
      <div
        class="tw-flex tw-items-center tw-text-gray-2 tw-text-lg tw-font-medium tw-pt-3"
      >{{ description }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';

export default defineComponent({
  name: "CardInfo",
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
.card-info__content {
  max-width: 336px;
}
</style>