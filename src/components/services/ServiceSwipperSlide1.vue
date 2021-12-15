<template>
  <div class="tw-flex tw-justify-between tw-px-40 tw-pt-14">
    <!-- left -->
    <div class="tw-pt-20">
      <div class="tw-font-semibold tw-text-6xl">
        <div>The Challengeʳ</div>
        <div>Advisory</div>
      </div>
      <div class="tw-pt-5 tw-text-gray-2 tw-text-lg tw-font-medium">
        <div>Fast-based management consulting</div>
        <div class="tw-pt-1">and market research</div>
      </div>
      <VButton text="Our story" class="tw-mt-14" variant="blue" />
    </div>
    <!-- right -->
    <ServiceSwipperSlide1Cartoon />
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  name: 'ServiceSwipper',
  components: {
    ServiceSwipperSlide1Cartoon: defineAsyncComponent(() => import("@/components/services/ServiceSwipperSlide1Cartoon.vue")),
    VButton: defineAsyncComponent(() => import("@/components/ui/VButton.vue")),
  }
});
</script>
