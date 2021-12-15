<template>
  <div class="tw-flex tw-justify-between tw-px-40 tw-pt-14 ">
    <!-- left -->
    <div class="tw-pt-20">
      <div class="tw-font-semibold tw-text-6xl">
        <div>We deliver more</div>
      </div>
      <div class="tw-pt-5 tw-text-gray-2 tw-text-lg tw-font-medium">
        <div>With an effective management model, we ensure</div>
        <div class="tw-pt-1">that the money paid for our work is invested in the</div>
        <div class="tw-pt-1">project, not into overheads.</div>
      </div>
      <VButton text="Our approach" class="tw-mt-14" variant="blue" />
    </div>
    <!-- right -->
    <ServiceSwipperSlide3Cartoon />
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  name: 'ServiceSwipper',
  components: {
    ServiceSwipperSlide3Cartoon: defineAsyncComponent(() => import("@/components/services/ServiceSwipperSlide3Cartoon.vue")),
    VButton: defineAsyncComponent(() => import("@/components/ui/VButton.vue")),
  }
});
</script>
