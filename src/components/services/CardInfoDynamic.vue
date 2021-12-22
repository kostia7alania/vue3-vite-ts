<template>
  <!-- tw-h-60 -->
  <div class="gray-shadow-1 tw-bg-white tw-rounded-4xl tw-p-6 tw-pb-7 xl:tw-p-8 xl:tw-pb-8">
    <VIcon :icon="icon" :class="iconClass" />
    <div class="card-info__content tw-pt-8">
      <div class="topic-title-28px">
        <!-- number -->
        {{ title }}
      </div>
      <div
        class="topic-description tw-pt-2 md:tw-pt-3"
      >{{ description }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';


export default defineComponent({
  name: "CardInfoDynamic",
  components: {
    VIcon: defineAsyncComponent(() => import('@/components/ui/VIcon.vue'))
  },
  props: {
    title: { type: [Number, String], default: '', },
    description: { type: [Number, String], default: "", },
    icon: { type: String, default: "", },
    iconClass: { type: String, default: "", },
  },
});
</script>



<style lang="scss" scoped>
.card-info__content {
  max-width: 336px;
}
</style>