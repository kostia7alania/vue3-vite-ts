<template>
  <div
    class="gray-shadow-1 tw-h-56 tw-w-72 tw-bg-white tw-rounded-3xl tw-flex tw-items-center tw-justify-center tw-flex-col tw-gap-4"
  >
    <div class="tw-text-orange-1 tw-text-5xl tw-font-semibold">
      <!-- number -->
      {{ number }}
    </div>
    <div class="tw-flex tw-items-center tw-gap-x-2 tw-text-gray-2 tw-text-lg tw-font-medium">
      <div>
        <!-- icon -->
        <!-- {{ icon }} -->
        <VIcon :icon="icon" />
      </div>
      <div>
        <!-- label -->
        {{ label }}
      </div>
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
    number: { type: [Number, String], default: 0, },
    label: { type: [Number, String], default: "", },
    icon: { type: String, default: "", },
  },
});
</script>


 